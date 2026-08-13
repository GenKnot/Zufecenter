from pathlib import Path
import shutil

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf"
PUBLIC = ROOT / "public" / "resources"
OUTPUT.mkdir(parents=True, exist_ok=True)
PUBLIC.mkdir(parents=True, exist_ok=True)

FONT_PATH = "/Library/Fonts/Arial Unicode.ttf"
pdfmetrics.registerFont(TTFont("ZUFE-CN", FONT_PATH))

NAVY = colors.HexColor("#0B2F5B")
DEEP_NAVY = colors.HexColor("#071F3E")
BLUE = colors.HexColor("#174F8F")
GOLD = colors.HexColor("#C99B48")
PAPER = colors.HexColor("#F7F5F0")
MIST = colors.HexColor("#EDF2F6")
INK = colors.HexColor("#11233E")
MUTED = colors.HexColor("#637083")
LINE = colors.HexColor("#DCE3E8")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="CN", fontName="ZUFE-CN", fontSize=9.5, leading=16, textColor=INK))
styles.add(ParagraphStyle(name="CN-Small", parent=styles["CN"], fontSize=8, leading=12, textColor=MUTED))
styles.add(ParagraphStyle(name="CN-Tiny", parent=styles["CN"], fontSize=7, leading=10, textColor=MUTED))
styles.add(ParagraphStyle(name="CN-Title", parent=styles["CN"], fontSize=25, leading=34, textColor=DEEP_NAVY, spaceAfter=8))
styles.add(ParagraphStyle(name="CN-Subtitle", parent=styles["CN"], fontSize=10.5, leading=17, textColor=MUTED, spaceAfter=16))
styles.add(ParagraphStyle(name="CN-H2", parent=styles["CN"], fontSize=15, leading=22, textColor=NAVY, spaceBefore=10, spaceAfter=10))
styles.add(ParagraphStyle(name="CN-H3", parent=styles["CN"], fontSize=10.5, leading=16, textColor=NAVY, spaceAfter=4))
styles.add(ParagraphStyle(name="CN-White", parent=styles["CN"], textColor=colors.white))
styles.add(ParagraphStyle(name="CN-White-Small", parent=styles["CN-Small"], textColor=colors.HexColor("#EAD7AD")))
styles.add(ParagraphStyle(name="CN-Center", parent=styles["CN"], alignment=TA_CENTER))


def p(text, style="CN"):
    return Paragraph(text, styles[style])


def header_footer(canvas, doc):
    canvas.saveState()
    width, height = A4
    canvas.setFillColor(DEEP_NAVY)
    canvas.rect(0, height - 18 * mm, width, 18 * mm, stroke=0, fill=1)
    canvas.setFont("ZUFE-CN", 9)
    canvas.setFillColor(colors.white)
    canvas.drawString(18 * mm, height - 11.5 * mm, "浙江财经大学语言中心")
    canvas.setFont("ZUFE-CN", 7)
    canvas.setFillColor(colors.HexColor("#EAD7AD"))
    canvas.drawRightString(width - 18 * mm, height - 11.5 * mm, "LANGUAGE - KNOWLEDGE - WORLD")
    canvas.setStrokeColor(LINE)
    canvas.line(18 * mm, 14 * mm, width - 18 * mm, 14 * mm)
    canvas.setFont("ZUFE-CN", 7)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 8.5 * mm, "资料版本 2026-08-13 · 具体安排以正式通知为准")
    canvas.drawRightString(width - 18 * mm, 8.5 * mm, f"{doc.page}")
    canvas.restoreState()


def make_doc(path, title, story):
    doc = SimpleDocTemplate(
        str(path),
        pagesize=A4,
        title=title,
        author="浙江财经大学语言中心",
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=27 * mm,
        bottomMargin=20 * mm,
    )
    doc.build(story, onFirstPage=header_footer, onLaterPages=header_footer)
    shutil.copy2(path, PUBLIC / path.name)


def info_strip(items):
    cells = []
    for label, value in items:
        cells.append(p(f'<font color="#637083" size="7">{label}</font><br/><font color="#0B2F5B" size="10"><b>{value}</b></font>', "CN"))
    table = Table([cells], colWidths=[(A4[0] - 36 * mm) / len(items)] * len(items), rowHeights=[25 * mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PAPER),
        ("BOX", (0, 0), (-1, -1), 0.6, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.6, LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
    ]))
    return table


course_rows = [
    ["EN-A1", "英语基础一级", "2026-09-07", "周一、周四 18:30-20:00", "预约测评中"],
    ["EN-BIZ", "商务英语沟通班", "2026-09-12", "周六 09:30-12:30", "开放咨询"],
    ["FR-A1.1", "法语启蒙 A1.1", "2026-09-08", "周二、周五 18:30-20:00", "预约测评中"],
    ["JP-START", "日语零基础启蒙", "2026-09-09", "周三晚、周日上午", "开放咨询"],
    ["KR-START", "韩语零基础启蒙", "2026-09-13", "周日 13:30-16:30", "接受意向登记"],
    ["EN-IELTS", "雅思基础与能力衔接班", "2026-09-14", "周一、周三 18:30-20:30", "预约测评中"],
]


def build_autumn_guide():
    story = [
        Spacer(1, 5 * mm),
        p("2026 AUTUMN TERM", "CN-White-Small"),
        p("2026 秋季课程与活动安排", "CN-Title"),
        p("从入学沟通与分级测评开始，按语种和学习目标进入合适的班级。以下为本学期课程与活动安排。", "CN-Subtitle"),
        info_strip([
            ("咨询与测评", "8 月 17 日-9 月 13 日"),
            ("秋季教学周期", "9 月-12 月"),
            ("测评方式", "线上测评 + 学习沟通"),
        ]),
        Spacer(1, 8 * mm),
        p("本学期课程排期", "CN-H2"),
    ]
    data = [[p(x, "CN-H3") for x in ["课程代码", "课程", "开课日期", "上课时间", "当前状态"]]]
    for row in course_rows:
        data.append([p(row[0], "CN-Small"), p(row[1], "CN"), p(row[2], "CN-Small"), p(row[3], "CN-Small"), p(row[4], "CN-Small")])
    table = Table(data, colWidths=[23 * mm, 43 * mm, 25 * mm, 51 * mm, 30 * mm], repeatRows=1)
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, PAPER]),
        ("GRID", (0, 0), (-1, -1), 0.5, LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
    ]))
    story.extend([
        table,
        Spacer(1, 7 * mm),
        p("近期活动", "CN-H2"),
        Table([
            [p("08.22", "CN-H3"), p("秋季课程与分班测评说明会", "CN-H3"), p("14:00-15:30 · 语言中心多功能教室", "CN-Small")],
            [p("08.29", "CN-H3"), p("多语种零基础体验日", "CN-H3"), p("13:30-16:30 · 文一西路教学点", "CN-Small")],
            [p("09.12", "CN-H3"), p("新学期语言角：第一次见面", "CN-H3"), p("18:30-20:00 · 共享学习空间", "CN-Small")],
        ], colWidths=[24 * mm, 78 * mm, 70 * mm], style=TableStyle([
            ("ROWBACKGROUNDS", (0, 0), (-1, -1), [MIST, colors.white]),
            ("BOX", (0, 0), (-1, -1), 0.5, LINE),
            ("INNERGRID", (0, 0), (-1, -1), 0.5, LINE),
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("TOPPADDING", (0, 0), (-1, -1), 8),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ])),
    ])
    make_doc(OUTPUT / "2026-autumn-course-guide.pdf", "2026 秋季课程与活动安排", story)


def build_checklist():
    story = [
        Spacer(1, 5 * mm),
        p("PLACEMENT PREPARATION", "CN-White-Small"),
        p("入学测评准备清单", "CN-Title"),
        p("这不是考试前的临时复习清单，而是帮助教师更准确了解你的起点、目标和可持续学习节奏。", "CN-Subtitle"),
    ]
    sections = [
        ("01 · 学习经历", ["最近一次系统学习这门语言是什么时候？", "使用过哪些教材、课程或考试？", "目前听、说、读、写中哪一项最有把握？"]),
        ("02 · 使用目标", ["希望在 3-6 个月后完成什么具体任务？", "目标更偏生活、考试、升学、工作还是兴趣？", "是否有明确考试日期、工作项目或出行时间？"]),
        ("03 · 时间条件", ["每周可以稳定上课的时段有哪些？", "除课堂外，每周可以安排多少自主练习时间？", "哪些工作、课程或家庭安排可能影响出勤？"]),
        ("04 · 当前困难", ["开口时最常卡在哪里？", "阅读或听力中最容易失去理解的环节是什么？", "过去哪些学习方法没有持续下来？为什么？"]),
    ]
    for title, prompts in sections:
        rows = [[p(title, "CN-H3")]]
        for prompt in prompts:
            rows.append([p(f"□  {prompt}", "CN")])
            rows.append([p("________________________________________________________________________________", "CN-Tiny")])
        table = Table(rows, colWidths=[172 * mm])
        table.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, 0), MIST),
            ("BOX", (0, 0), (-1, -1), 0.6, LINE),
            ("INNERGRID", (0, 0), (-1, -1), 0.3, colors.HexColor("#EDF2F6")),
            ("TOPPADDING", (0, 0), (-1, -1), 6),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ("LEFTPADDING", (0, 0), (-1, -1), 9),
        ]))
        story.extend([table, Spacer(1, 5 * mm)])
    story.extend([
        p("测评当天建议", "CN-H2"),
        p("保持自然表达，不需要为获得更高级别而刻意准备。准确的起点比勉强进入过难班级更有利于长期进步。", "CN"),
    ])
    make_doc(OUTPUT / "placement-preparation-checklist.pdf", "入学测评准备清单", story)


def build_study_plan():
    story = [
        Spacer(1, 5 * mm),
        p("12-WEEK LEARNING PLAN", "CN-White-Small"),
        p("12 周语言学习计划表", "CN-Title"),
        p("每周只记录真正完成的输入、输出和反馈。计划不追求填满，而是帮助你看见节奏、困难与下一步。", "CN-Subtitle"),
        info_strip([("学习语种", "________________"), ("课程 / 级别", "________________"), ("本阶段目标", "________________")]),
        Spacer(1, 8 * mm),
    ]
    for start in (1, 7):
        story.append(p(f"第 {start}-{start + 5} 周", "CN-H2"))
        data = [[p(x, "CN-H3") for x in ["周次", "本周输入", "本周输出", "收到的反馈", "下周调整"]]]
        for week in range(start, start + 6):
            data.append([
                p(f"W{week:02d}", "CN-Small"),
                p("阅读 / 听力：<br/><br/>关键词：", "CN-Small"),
                p("口语 / 写作：<br/><br/>完成情况：", "CN-Small"),
                p("教师 / 同伴反馈：<br/><br/>仍需注意：", "CN-Small"),
                p("保留：<br/><br/>改变：", "CN-Small"),
            ])
        table = Table(data, colWidths=[14 * mm, 40 * mm, 40 * mm, 40 * mm, 38 * mm], rowHeights=[10 * mm] + [24 * mm] * 6, repeatRows=1)
        table.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, 0), NAVY),
            ("GRID", (0, 0), (-1, -1), 0.5, LINE),
            ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, PAPER]),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("TOPPADDING", (0, 1), (-1, -1), 6),
            ("LEFTPADDING", (0, 0), (-1, -1), 5),
            ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ]))
        story.append(table)
        if start == 1:
            story.append(PageBreak())
        else:
            story.append(Spacer(1, 6 * mm))
            story.append(p("阶段复盘：我现在能够完成什么？最影响进步的问题是什么？下一阶段保留哪一个习惯？", "CN-Small"))
    make_doc(OUTPUT / "12-week-language-study-plan.pdf", "12 周语言学习计划表", story)


if __name__ == "__main__":
    build_autumn_guide()
    build_checklist()
    build_study_plan()
    print("Created resource PDFs in output/pdf and public/resources")
