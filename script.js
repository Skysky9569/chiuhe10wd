const fallbackData = {
  "chapters": [
    {
      "id": 1,
      "title": "Hàm số lượng giác và phương trình lượng giác",
      "icon": "📐",
      "color": "#6366F1",
      "lessons": ["Bài 1. Giá trị lượng giác của góc lượng giác", "Bài 2. Công thức lượng giác", "Bài 3. Hàm số lượng giác", "Bài 4. Phương trình lượng giác cơ bản"],
      "key_points": [
        "Nắm vững khái niệm góc lượng giác, số đo góc (độ và radian), đường tròn lượng giác và các hệ thức lượng giác cơ bản.",
        "Thành thạo các phép biến đổi lượng giác: công thức cộng, công thức nhân đôi, công thức biến đổi tích thành tổng và tổng thành tích.",
        "Hiểu rõ tập xác định, tập giá trị, tính chẵn lẻ, chu kì tuần hoàn và đồ thị của 4 hàm số lượng giác cơ bản: sin, cos, tan, cot.",
        "Biết cách giải và biểu diễn nghiệm của các phương trình lượng giác cơ bản: \\(\\sin x = m\\), \\(\\cos x = m\\), \\(\\tan x = m\\), \\(\\cot x = m\\)."
      ],
      "formulas": [
        {"name": "Hệ thức Chasles", "formula": "sđ(Ou, Ov) + sđ(Ov, Ow) = sđ(Ou, Ow) + k360^\\circ"},
        {"name": "Hằng đẳng thức 1", "formula": "\\sin^2\\alpha + \\cos^2\\alpha = 1"},
        {"name": "Hằng đẳng thức 2", "formula": "1 + \\tan^2\\alpha = \\frac{1}{\\cos^2\\alpha}"},
        {"name": "Công thức cộng", "formula": "\\cos(a \\pm b) = \\cos a \\cos b \\mp \\sin a \\sin b"},
        {"name": "Công thức nhân đôi", "formula": "\\sin 2a = 2\\sin a \\cos a"},
        {"name": "PT sinx = m", "formula": "x = \\alpha + k2\\pi \\lor x = \\pi - \\alpha + k2\\pi"}
      ],
      "example": {
        "problem": "Tính các giá trị lượng giác của góc $\\alpha$, biết: $\\sin \\alpha = \\frac{3}{5}$ và $90^\\circ < \\alpha < 180^\\circ$.",
        "solution": "Vì $90^\\circ < \\alpha < 180^\\circ$ nên $\\cos \\alpha < 0$.<br><br>Từ $\\sin^2\\alpha + \\cos^2\\alpha = 1$ suy ra $\\cos \\alpha = -\\sqrt{1 - \\sin^2\\alpha} = -\\sqrt{1 - \\frac{9}{25}} = -\\frac{4}{5}$.<br><br>Do đó $\\tan \\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = -\\frac{3}{4}$ và $\\cot \\alpha = -\\frac{4}{3}$."
      }
    },
    {
      "id": 2,
      "title": "Dãy số. Cấp số cộng và cấp số nhân",
      "icon": "🔢",
      "color": "#10B981",
      "lessons": ["Bài 5. Dãy số", "Bài 6. Cấp số cộng", "Bài 7. Cấp số nhân"],
      "key_points": [
        "Nhận biết khái niệm dãy số vô hạn, hữu hạn, dãy số tăng, giảm, bị chặn và các cách cho dãy số.",
        "Nắm vững định nghĩa, công sai của cấp số cộng và công bội của cấp số nhân.",
        "Áp dụng thành thạo công thức số hạng tổng quát và tổng $n$ số hạng đầu tiên."
      ],
      "formulas": [
        {"name": "Định nghĩa CSC", "formula": "u_n = u_{n-1} + d"},
        {"name": "SHTQ Cấp số cộng", "formula": "u_n = u_1 + (n-1)d"},
        {"name": "Tổng n số hạng CSC", "formula": "S_n = \\frac{n}{2}[2u_1 + (n-1)d]"},
        {"name": "Định nghĩa CSN", "formula": "u_n = u_{n-1} \\cdot q"},
        {"name": "SHTQ Cấp số nhân", "formula": "u_n = u_1 \\cdot q^{n-1}"},
        {"name": "Tổng n số hạng CSN", "formula": "S_n = u_1\\frac{1 - q^n}{1 - q}"}
      ],
      "example": {
        "problem": "Số hạng thứ 10 của một CSC bằng $48$ và số hạng thứ 18 bằng $88$. Tìm số hạng thứ 100.",
        "solution": "Ta có hệ phương trình:<br>$u_{10} = u_1 + 9d = 48$<br>$u_{18} = u_1 + 17d = 88$<br><br>Giải hệ suy ra $u_1 = 3, d = 5$.<br><br>Vậy số hạng thứ 100 là: $u_{100} = u_1 + 99d = 3 + 99\\cdot5 = 498$."
      }
    },
    {
      "id": 3,
      "title": "Số đặc trưng đo xu thế trung tâm",
      "icon": "📊",
      "color": "#F59E0B",
      "lessons": ["Bài 8. Mẫu số liệu ghép nhóm", "Bài 9. Các số đặc trưng đo xu thế trung tâm"],
      "key_points": [
        "Biết cách đọc, giải thích và chuyển đổi dữ liệu rời rạc thành mẫu số liệu ghép nhóm.",
        "Nắm vững quy trình và công thức tính số trung bình, trung vị, tứ phân vị và mốt.",
        "Hiểu ý nghĩa thực tiễn, ưu nhược điểm và vai trò đại diện của từng số đặc trưng."
      ],
      "formulas": [
        {"name": "Số trung bình", "formula": "\\bar{x} = \\frac{m_1x_1 + \\dots + m_kx_k}{n}"},
        {"name": "Trung vị", "formula": "M_e = a_p + \\left(\\frac{\\frac{n}{2} - cf_{p-1}}{m_p}\\right) \\cdot h"},
        {"name": "Tứ phân vị Q1", "formula": "Q_1 = a_p + \\left(\\frac{\\frac{n}{4} - cf_{p-1}}{m_p}\\right) \\cdot h"},
        {"name": "Mốt", "formula": "M_o = a_j + \\left(\\frac{d_1}{d_1 + d_2}\\right) \\cdot h"}
      ],
      "example": {
        "problem": "Khái niệm Mốt (Mode) của mẫu số liệu ghép nhóm là gì?",
        "solution": "Mốt của mẫu số liệu ghép nhóm là giá trị đại diện cho nhóm có tần số lớn nhất (nhóm chứa mốt). Nó được ước lượng dựa trên tần số của nhóm chứa mốt và các nhóm lân cận."
      }
    },
    {
      "id": 4,
      "title": "Quan hệ song song trong không gian",
      "icon": "🔲",
      "color": "#8B5CF6",
      "lessons": ["Bài 10. Đường thẳng và mặt phẳng", "Bài 11. Hai đường thẳng song song", "Bài 12. Đường thẳng và mặt phẳng //", "Bài 13. Hai mặt phẳng song song", "Bài 14. Phép chiếu song song"],
      "key_points": [
        "Xác định quan hệ liên thuộc; tìm giao điểm, giao tuyến.",
        "Phân biệt và chứng minh vị trí tương đối: chéo nhau, song song, cắt nhau.",
        "Nắm vững điều kiện và tính chất về quan hệ song song; áp dụng Định lí Thalès.",
        "Nhận diện hình khối và dùng phép chiếu song song để vẽ hình biểu diễn."
      ],
      "formulas": [
        {"name": "3 giao tuyến", "formula": "\\text{3 mp cắt nhau } \\to \\text{3 giao tuyến đồng quy hoặc //}"},
        {"name": "Đường // Mặt", "formula": "a \\not\\subset (P), a \\parallel b, b \\subset (P) \\implies a \\parallel (P)"},
        {"name": "Mặt // Mặt", "formula": "(\\alpha) \\text{ chứa } a \\cap b, a \\parallel (\\beta), b \\parallel (\\beta) \\implies (\\alpha) \\parallel (\\beta)"},
        {"name": "Định lí Thalès", "formula": "\\frac{AB}{A'B'} = \\frac{BC}{B'C'} = \\frac{AC}{A'C'}"}
      ],
      "example": {
        "problem": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Xác định giao tuyến của $(SAB)$ và $(SCD)$.",
        "solution": "Hai mặt phẳng $(SAB)$ và $(SCD)$ có điểm chung là $S$.<br><br>Đồng thời chúng chứa hai đường thẳng song song là $AB \\parallel CD$.<br><br>Vậy giao tuyến là đường thẳng $d$ đi qua $S$ và song song với $AB$ (và $CD$)."
      }
    },
    {
      "id": 5,
      "title": "Giới hạn. Hàm số liên tục",
      "icon": "♾️",
      "color": "#06B6D4",
      "lessons": ["Bài 15. Giới hạn của dãy số", "Bài 16. Giới hạn của hàm số", "Bài 17. Hàm số liên tục"],
      "key_points": [
        "Nắm vững khái niệm giới hạn hữu hạn, giới hạn vô cực của dãy số và hàm số.",
        "Sử dụng các quy tắc và phép toán giới hạn (tổng, hiệu, tích, thương) để tính.",
        "Nhận biết cấp số nhân lùi vô hạn và áp dụng công thức.",
        "Hiểu khái niệm hàm số liên tục tại một điểm, trên một khoảng/đoạn."
      ],
      "formulas": [
        {"name": "Giới hạn cơ bản 1", "formula": "\\lim \\frac{1}{n^k} = 0 \\; (k > 0)"},
        {"name": "Giới hạn cơ bản 2", "formula": "\\lim q^n = 0 \\; (|q| < 1)"},
        {"name": "Tổng CSN lùi vô hạn", "formula": "S = \\frac{u_1}{1 - q} \\; (|q| < 1)"},
        {"name": "Liên tục tại 1 điểm", "formula": "\\lim_{x \\to x_0} f(x) = f(x_0)"}
      ],
      "example": {
        "problem": "Tính tổng $S = 1 - \\frac{1}{2} + \\frac{1}{4} - \\frac{1}{8} + \\dots$ (CSN lùi vô hạn)",
        "solution": "Dãy số trên là một cấp số nhân lùi vô hạn với số hạng đầu $u_1 = 1$ và công bội $q = -\\frac{1}{2}$ (thỏa mãn $|q| < 1$).<br><br>Áp dụng công thức tính tổng: $S = \\frac{u_1}{1 - q} = \\frac{1}{1 - (-\\frac{1}{2})} = \\frac{1}{\\frac{3}{2}} = \\frac{2}{3}$."
      }
    },
    {
      "id": 6,
      "title": "Hàm số mũ và hàm số lôgarit",
      "icon": "🧮",
      "color": "#EF4444",
      "lessons": ["Bài 18. Luỹ thừa với số mũ thực", "Bài 19. Lôgarit", "Bài 20. Hàm số mũ và lôgarit", "Bài 21. Phương trình mũ, lôgarit"],
      "key_points": [
        "Nắm vững khái niệm và tính chất của luỹ thừa.",
        "Hiểu rõ khái niệm lôgarit, quy tắc tính và công thức đổi cơ số.",
        "Phân tích tập xác định, sự biến thiên, tập giá trị của hàm số mũ, lôgarit.",
        "Giải phương trình, bất phương trình cơ bản."
      ],
      "formulas": [
        {"name": "Tính chất luỹ thừa", "formula": "a^m \\cdot a^n = a^{m+n}; \\; (a^m)^n = a^{mn}"},
        {"name": "Định nghĩa Lôgarit", "formula": "\\log_a M = \\alpha \\iff a^\\alpha = M"},
        {"name": "Log của Tích", "formula": "\\log_a(MN) = \\log_a M + \\log_a N"},
        {"name": "Đổi cơ số", "formula": "\\log_a b = \\frac{\\log_c b}{\\log_c a}"},
        {"name": "PT Mũ cơ bản", "formula": "a^x = b \\iff x = \\log_a b"}
      ],
      "example": {
        "problem": "Giải phương trình: $3^{x+1} = \\frac{1}{3^{1-2x}}$",
        "solution": "Biến đổi phương trình:<br>$3^{x+1} = 3^{-(1-2x)}$<br>$\\iff 3^{x+1} = 3^{2x-1}$<br><br>Do cơ số $3 > 1$, ta có:<br>$x + 1 = 2x - 1 \\iff x = 2$.<br>Vậy tập nghiệm $S = \\{2\\}$."
      }
    },
    {
      "id": 7,
      "title": "Quan hệ vuông góc trong không gian",
      "icon": "📐",
      "color": "#EC4899",
      "lessons": ["Bài 22. Hai đường thẳng vuông góc", "Bài 23. Đường thẳng vuông góc mặt phẳng", "Bài 24. Góc giữa đường và mặt", "Bài 25. Hai mặt phẳng vuông góc", "Bài 26. Khoảng cách", "Bài 27. Thể tích"],
      "key_points": [
        "Chứng minh quan hệ vuông góc: đường vuông góc đường, đường vuông góc mặt, mặt vuông góc mặt.",
        "Xác định và tính góc giữa đường và mặt, góc nhị diện.",
        "Tính khoảng cách từ điểm đến mặt phẳng, khoảng cách hai đường chéo nhau.",
        "Công thức thể tích khối lăng trụ, chóp, chóp cụt."
      ],
      "formulas": [
        {"name": "ĐL 3 đường vuông góc", "formula": "b \\perp a \\iff b \\perp a'"},
        {"name": "ĐK đường vuông góc mặt", "formula": "d \\perp a, d \\perp b, a \\cap b \\subset (P) \\implies d \\perp (P)"},
        {"name": "Thể tích lăng trụ", "formula": "V = S \\cdot h"},
        {"name": "Thể tích khối chóp", "formula": "V = \\frac{1}{3} S \\cdot h"}
      ],
      "example": {
        "problem": "Tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc, $OA=a, OB=b, OC=c$. Tính thể tích khối tứ diện.",
        "solution": "Vì $OA, OB, OC$ đôi một vuông góc nên $OA \\perp (OBC)$.<br>Do đó, $OA$ là đường cao của tứ diện ứng với đáy là tam giác vuông $OBC$.<br><br>Diện tích đáy: $S_{OBC} = \\frac{1}{2}OB \\cdot OC = \\frac{1}{2}bc$.<br>Thể tích: $V = \\frac{1}{3} S_{OBC} \\cdot OA = \\frac{1}{6}abc$."
      }
    },
    {
      "id": 8,
      "title": "Các quy tắc tính xác suất",
      "icon": "🎲",
      "color": "#14B8A6",
      "lessons": ["Bài 28. Biến cố hợp, giao, độc lập", "Bài 29. Công thức cộng xác suất", "Bài 30. Công thức nhân xác suất"],
      "key_points": [
        "Nhận biết các khái niệm biến cố hợp, biến cố giao, độc lập, xung khắc.",
        "Tính xác suất biến cố hợp bằng công thức cộng.",
        "Tính xác suất biến cố giao bằng công thức nhân và sơ đồ hình cây."
      ],
      "formulas": [
        {"name": "Biến cố xung khắc", "formula": "P(A \\cup B) = P(A) + P(B)"},
        {"name": "Cộng XS tổng quát", "formula": "P(A \\cup B) = P(A) + P(B) - P(AB)"},
        {"name": "Nhân XS độc lập", "formula": "P(AB) = P(A) \\cdot P(B)"}
      ],
      "example": {
        "problem": "An thi đậu với xác suất $0.8$, Bình thi đậu với xác suất $0.9$. Việc thi đậu của 2 bạn là độc lập. Tính xác suất cả hai cùng thi đậu.",
        "solution": "Gọi $A$ là biến cố \"An thi đậu\", $P(A) = 0.8$.<br>Gọi $B$ là biến cố \"Bình thi đậu\", $P(B) = 0.9$.<br><br>Vì $A$ và $B$ độc lập, xác suất cả hai thi đậu (biến cố giao $AB$) là:<br>$P(AB) = P(A) \\cdot P(B) = 0.8 \\times 0.9 = 0.72$."
      }
    },
    {
      "id": 9,
      "title": "Đạo hàm",
      "icon": "📈",
      "color": "#F97316",
      "lessons": ["Bài 31. Định nghĩa & Ý nghĩa", "Bài 32. Quy tắc tính đạo hàm", "Bài 33. Đạo hàm cấp hai"],
      "key_points": [
        "Hiểu ý nghĩa hình học (phương trình tiếp tuyến) và vật lý (vận tốc tức thời).",
        "Vận dụng quy tắc tính đạo hàm tổng, hiệu, tích, thương, hàm hợp.",
        "Thuộc bảng đạo hàm hàm sơ cấp cơ bản.",
        "Nhận biết đạo hàm cấp hai (gia tốc tức thời)."
      ],
      "formulas": [
        {"name": "Định nghĩa đạo hàm", "formula": "f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}"},
        {"name": "PT Tiếp tuyến", "formula": "y = f'(x_0)(x - x_0) + y_0"},
        {"name": "Đạo hàm của Tích", "formula": "(uv)' = u'v + uv'"},
        {"name": "Đạo hàm của Thương", "formula": "\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}"},
        {"name": "Hàm hợp cơ bản", "formula": "\\left(u^n\\right)' = n \\cdot u^{n-1} \\cdot u'"}
      ],
      "example": {
        "problem": "Tính đạo hàm của hàm số $y = \\sin(2x + \\frac{\\pi}{4})$.",
        "solution": "Áp dụng công thức đạo hàm hàm số hợp $(\\sin u)' = u' \\cdot \\cos u$, với $u = 2x + \\frac{\\pi}{4}$.<br><br>$y' = \\left(2x + \\frac{\\pi}{4}\\right)' \\cdot \\cos\\left(2x + \\frac{\\pi}{4}\\right)$<br><br>$y' = 2\\cos\\left(2x + \\frac{\\pi}{4}\\right)$."
      }
    }
  ]
};

const illustrations = [
    '<svg class="illustration" viewBox="0 0 100 40"><path d="M0 20 Q 25 0, 50 20 T 100 20" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    '<svg class="illustration" viewBox="0 0 100 40"><circle cx="10" cy="30" r="3" fill="currentColor"/><circle cx="30" cy="25" r="3" fill="currentColor"/><circle cx="50" cy="20" r="3" fill="currentColor"/><circle cx="70" cy="15" r="3" fill="currentColor"/><circle cx="90" cy="10" r="3" fill="currentColor"/></svg>',
    '<svg class="illustration" viewBox="0 0 100 40"><rect x="10" y="20" width="10" height="20" fill="currentColor"/><rect x="30" y="10" width="10" height="30" fill="currentColor"/><rect x="50" y="25" width="10" height="15" fill="currentColor"/><rect x="70" y="5" width="10" height="35" fill="currentColor"/><rect x="90" y="15" width="10" height="25" fill="currentColor"/></svg>',
    '<svg class="illustration" viewBox="0 0 100 40"><path d="M20 30 L50 30 L60 10 L30 10 Z" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="20" x2="40" y2="5" stroke="currentColor" stroke-width="1.5"/></svg>',
    '<svg class="illustration" viewBox="0 0 100 40"><path d="M10 20 L90 20 M80 15 L90 20 L80 25" fill="none" stroke="currentColor" stroke-width="2"/><text x="35" y="38" font-size="10" fill="currentColor" font-weight="bold">n → ∞</text></svg>',
    '<svg class="illustration" viewBox="0 0 100 40"><path d="M10 35 Q 50 35, 90 5" fill="none" stroke="currentColor" stroke-width="2.5"/></svg>',
    '<svg class="illustration" viewBox="0 0 100 40"><line x1="20" y1="35" x2="80" y2="35" stroke="currentColor" stroke-width="2"/><line x1="50" y1="35" x2="50" y2="5" stroke="currentColor" stroke-width="2"/><rect x="50" y="25" width="10" height="10" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',
    '<svg class="illustration" viewBox="0 0 100 40"><rect x="35" y="5" width="30" height="30" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="42" cy="12" r="2" fill="currentColor"/><circle cx="58" cy="12" r="2" fill="currentColor"/><circle cx="50" cy="20" r="2" fill="currentColor"/><circle cx="42" cy="28" r="2" fill="currentColor"/><circle cx="58" cy="28" r="2" fill="currentColor"/></svg>',
    '<svg class="illustration" viewBox="0 0 100 40"><path d="M10 35 Q 50 35, 90 5" fill="none" stroke="currentColor" stroke-width="2" opacity="0.2"/><line x1="20" y1="35" x2="80" y2="5" stroke="currentColor" stroke-width="2"/></svg>'
];

const exampleIllustrations = [
    '<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" /></marker></defs><path d="M10 60 L110 60" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow)"/><path d="M60 110 L60 10" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow)"/><circle cx="60" cy="60" r="40" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3"/><path d="M75 60 A 15 15 0 0 0 45 46" stroke="var(--accent-color)" stroke-width="2"/><text x="65" y="48" font-size="10" fill="var(--accent-color)" font-weight="bold" stroke="none">α</text><line x1="60" y1="60" x2="28" y2="36" stroke="currentColor" stroke-width="2"/><line x1="28" y1="36" x2="28" y2="60" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="2 2"/><line x1="28" y1="36" x2="60" y2="36" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="2 2"/><circle cx="28" cy="36" r="3" fill="currentColor"/><text x="15" y="32" font-size="10" fill="currentColor" font-weight="bold" stroke="none">M</text><text x="110" y="75" font-size="12" fill="currentColor" stroke="none">x</text><text x="45" y="15" font-size="12" fill="currentColor" stroke="none">y</text><text x="65" y="75" font-size="10" fill="currentColor" stroke="none">O</text></svg>',
    '<svg viewBox="0 0 120 120" fill="none"><defs><marker id="arrow2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" /></marker></defs><polyline points="20,110 20,10" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow2)"/><polyline points="10,100 110,100" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow2)"/><polyline points="30,85 55,65 80,45 105,25" stroke="var(--accent-color)" stroke-width="1.5" stroke-dasharray="3 3"/><line x1="30" y1="85" x2="55" y2="85" stroke="#EF4444" stroke-width="1" stroke-dasharray="2 2"/><line x1="55" y1="85" x2="55" y2="65" stroke="#EF4444" stroke-width="1" stroke-dasharray="2 2"/><text x="60" y="78" font-size="10" fill="#EF4444" stroke="none">+d</text><circle cx="30" cy="85" r="3" fill="currentColor"/><text x="28" y="115" font-size="10" fill="currentColor" stroke="none">1</text><text x="6" y="88" font-size="10" fill="currentColor" stroke="none">u₁</text><circle cx="55" cy="65" r="3" fill="currentColor"/><text x="53" y="115" font-size="10" fill="currentColor" stroke="none">2</text><text x="6" y="68" font-size="10" fill="currentColor" stroke="none">u₂</text><circle cx="80" cy="45" r="3" fill="currentColor"/><circle cx="105" cy="25" r="3" fill="currentColor"/></svg>',
    '<svg viewBox="0 0 120 120" fill="currentColor"><line x1="15" y1="105" x2="110" y2="105" stroke="currentColor" stroke-width="1.5"/><line x1="15" y1="105" x2="15" y2="10" stroke="currentColor" stroke-width="1.5"/><rect x="25" y="60" width="14" height="45" fill="var(--accent-color)" opacity="0.3"/><rect x="41" y="30" width="14" height="75" fill="var(--accent-color)" opacity="0.5"/><rect x="57" y="15" width="14" height="90" fill="var(--accent-color)" opacity="0.8"/><rect x="73" y="45" width="14" height="60" fill="var(--accent-color)" opacity="0.5"/><rect x="89" y="80" width="14" height="25" fill="var(--accent-color)" opacity="0.3"/><path d="M 32 60 L 48 30 L 64 15 L 80 45 L 96 80" fill="none" stroke="#EF4444" stroke-width="2"/><circle cx="64" cy="15" r="3" fill="#EF4444"/><text x="58" y="10" font-size="10" fill="#EF4444" stroke="none">Mo</text></svg>',
    '<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M60 10 L20 90 L100 90 Z" fill="var(--accent-soft)" opacity="0.5"/><path d="M60 10 L40 100 L100 90" stroke-dasharray="2 2" opacity="0.5"/><line x1="60" y1="10" x2="60" y2="110" stroke="#EF4444" stroke-width="2"/><text x="65" y="15" font-size="10" fill="currentColor" stroke="none">S</text><text x="48" y="118" font-size="10" fill="#EF4444" stroke="none">d (giao tuyến)</text><path d="M20 90 L40 100" stroke-dasharray="3 3"/><line x1="20" y1="90" x2="100" y2="90" stroke-width="2"/><circle cx="60" cy="10" r="2" fill="currentColor"/></svg>',
    '<svg viewBox="0 0 120 120" fill="none" stroke="currentColor"><line x1="10" y1="90" x2="110" y2="90" stroke-width="1.5"/><line x1="20" y1="110" x2="20" y2="10" stroke-width="1.5"/><path d="M25 20 Q 35 85, 105 88" stroke="var(--accent-color)" stroke-width="2"/><line x1="105" y1="88" x2="110" y2="88" stroke="var(--accent-color)" stroke-width="2" stroke-dasharray="2 2"/><text x="80" y="105" font-size="10" fill="currentColor" stroke="none">n → +∞</text></svg>',
    '<svg viewBox="0 0 120 120" fill="none" stroke="currentColor"><line x1="10" y1="110" x2="110" y2="110" stroke-width="1.5"/><line x1="10" y1="110" x2="10" y2="10" stroke-width="1.5"/><line x1="10" y1="110" x2="100" y2="20" stroke-width="1" stroke-dasharray="3 3" opacity="0.5"/><path d="M10 105 Q 40 100, 90 20" stroke="#EF4444" stroke-width="2"/><path d="M15 110 Q 20 80, 100 30" stroke="#3B82F6" stroke-width="2"/><text x="95" y="15" font-size="10" fill="#EF4444" stroke="none">a\u1d69</text><text x="105" y="40" font-size="10" fill="#3B82F6" stroke="none">log\u2090x</text></svg>',
    '<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="60" y1="60" x2="60" y2="10"/><line x1="60" y1="60" x2="20" y2="90"/><line x1="60" y1="60" x2="110" y2="70"/><rect x="60" y="50" width="8" height="10" stroke-width="1" transform="skewY(20)"/><path d="M52 66 L52 56 L60 50" stroke-width="1"/><text x="65" y="15" font-size="12" fill="currentColor" stroke="none">z</text><text x="15" y="95" font-size="12" fill="currentColor" stroke="none">x</text><text x="110" y="65" font-size="12" fill="currentColor" stroke="none">y</text><text x="65" y="75" font-size="10" fill="currentColor" stroke="none">O</text></svg>',
    '<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="10" y="10" width="100" height="90" rx="4"/><circle cx="45" cy="55" r="30" fill="var(--accent-color)" opacity="0.1"/><circle cx="75" cy="55" r="30" fill="#EF4444" opacity="0.1"/><circle cx="45" cy="55" r="30"/><circle cx="75" cy="55" r="30"/><path d="M 60 30 A 30 30 0 0 0 60 80 A 30 30 0 0 0 60 30" fill="var(--accent-color)" opacity="0.5"/><text x="35" y="58" font-size="12" fill="currentColor" stroke="none">A</text><text x="80" y="58" font-size="12" fill="currentColor" stroke="none">B</text></svg>',
    '<svg viewBox="0 0 120 120" fill="none" stroke="currentColor"><path d="M10 90 Q 50 10, 110 50" stroke-width="2"/><circle cx="60" cy="40" r="3" fill="#EF4444" stroke="none"/><line x1="20" y1="10" x2="100" y2="70" stroke="#EF4444" stroke-width="1.5"/><line x1="60" y1="40" x2="60" y2="70" stroke-width="1" stroke-dasharray="2 2"/><line x1="60" y1="70" x2="100" y2="70" stroke-width="1" stroke-dasharray="2 2"/><text x="75" y="82" font-size="10" fill="currentColor" stroke="none">\u0394x</text><text x="42" y="60" font-size="10" fill="currentColor" stroke="none">\u0394y</text></svg>'
];

let mathData = fallbackData;
let activeChapterId = 1;

// --- GEMINI API INTEGRATION ---
async function callGeminiAPI(prompt, systemInstruction = "", schema = null) {
    const apiKey = ""; 
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    const payload = {
        contents: [{ parts: [{ text: prompt }] }],
    };
    if (systemInstruction) {
        payload.systemInstruction = { parts: [{ text: systemInstruction }] };
    }
    if (schema) {
        payload.generationConfig = {
            responseMimeType: "application/json",
            responseSchema: schema
        };
    }

    let retries = 5;
    let delay = 1000;
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const result = await response.json();
            return result.candidates?.[0]?.content?.parts?.[0]?.text;
        } catch (e) {
            if (i === retries - 1) throw e;
            await new Promise(res => setTimeout(res, delay));
            delay *= 2;
        }
    }
}

function init() {
    renderSidebar();
    showChapter(1);
}

function renderSidebar() {
    const list = document.getElementById('chapter-list');
    list.innerHTML = mathData.chapters.map(ch => `
        <li class="nav-item ${ch.id === activeChapterId ? 'active' : ''}" onclick="showChapter(${ch.id})">
            <span class="chapter-icon">${ch.icon}</span>
            <div class="nav-item-content">
                <span class="nav-item-num">Chương ${ch.id}</span>
                <span class="nav-item-title">${ch.title}</span>
            </div>
        </li>
    `).join('');
}

function getLessonIcon(title) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>';
}

function showChapter(id) {
    activeChapterId = id;
    const chapter = mathData.chapters.find(ch => ch.id === id);
    const content = document.getElementById('content');
    
    document.querySelectorAll('.nav-item').forEach((item, index) => {
        item.classList.toggle('active', (index + 1) === id);
    });

    document.documentElement.style.setProperty('--accent-color', chapter.color);
    document.documentElement.style.setProperty('--accent-soft', `${chapter.color}22`);

    content.innerHTML = `
        <div class="chapter-header" style="background: linear-gradient(135deg, ${chapter.color}, ${chapter.color}dd)">
            <span class="chapter-icon-lg">${chapter.icon}</span>
            <h1>Chương ${chapter.id}. ${chapter.title}</h1>
            ${illustrations[id-1]}
        </div>

        <section>
            <h2>📌 Trọng tâm kiến thức</h2>
            <div class="key-points-grid">
                ${chapter.key_points.map(point => `
                    <div class="key-point-card">${point}</div>
                `).join('')}
            </div>
        </section>

        <section>
            <h2>📐 Bảng Công thức</h2>
            <div class="formulas-container">
                ${chapter.formulas.map(f => `
                    <div class="formula-pill">
                                <div class="formula-info">
                                    <div class="formula-name">${f.name}</div>
                                    <div class="formula-text">\\( ${f.formula} \\)</div>
                                </div>
                                <div class="formula-actions">
                                    <button class="action-btn copy-btn" data-formula="${f.formula.replace(/"/g, '&quot;')}" onclick="copyFormula(this)" title="Copy công thức">
                                        <svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                    </button>
                                    <button class="action-btn ai-btn" data-name="${f.name}" data-formula="${f.formula.replace(/"/g, '&quot;')}" onclick="explainFormula(this)" title="AI Giải thích chi tiết">
                                        ✨
                                    </button>
                                </div>
                            </div>
                `).join('')}
            </div>
        </section>

        <section>
            <h2>💡 Ví dụ minh họa</h2>
            <div class="example-card">
                <div class="example-main">
                    <div class="example-content">
                        <div class="example-problem">${chapter.example.problem}</div>
                        <div class="example-solution-toggle" onclick="toggleSolution(this)">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            <span>Xem lời giải</span>
                        </div>
                        <div class="example-solution-content">
                            ${chapter.example.solution}
                        </div>
                    </div>
                    <div class="example-diagram">
                        ${exampleIllustrations[id-1]}
                    </div>
                </div>
            </div>
        </section>

        <section>
            <h2 style="color: var(--accent-color);">✨ Gia sư AI: Luyện tập</h2>
            <div class="ai-practice-card">
                <p>Bạn đã nắm vững lý thuyết chương <b>${chapter.title}</b> chưa? Hãy để Gia sư AI thử thách bạn với một bài tập vận dụng ngẫu nhiên nhé!</p>
                <button class="primary-btn ai-generate-btn" onclick="generatePractice()">✨ Tạo bài tập mới</button>
                <div id="ai-practice-container" style="display: none; margin-top: 1.5rem;">
                    <!-- AI Content will be injected here -->
                </div>
            </div>
        </section>

        <section>
            <h2>📚 Danh sách bài học</h2>
            <div class="lessons-grid">
                ${chapter.lessons.map(lesson => `
                    <div class="lesson-card">
                        <div class="lesson-icon-sm">${getLessonIcon(lesson)}</div>
                        <div class="lesson-text">${lesson}</div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;

    if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise().catch(err => console.error(err));
    }

    if (window.innerWidth <= 768 || document.body.classList.contains('is-mobile-preview')) {
        closeSidebar();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- CÁC HÀM XỬ LÝ GEMINI AI ---
async function explainFormula(btn) {
    const name = btn.getAttribute('data-name');
    const formula = btn.getAttribute('data-formula');
    const chapterTitle = mathData.chapters.find(c => c.id === activeChapterId).title;

    document.getElementById('ai-modal').classList.add('active');
    document.getElementById('ai-modal-title').innerHTML = `✨ AI Giải thích: ${name}`;
    document.getElementById('ai-modal-body').innerHTML = `
        <div class="loader-container">
            <div class="loader"></div>
            <p>Gia sư đang phân tích công thức, đợi một chút nhé...</p>
        </div>`;

    const prompt = `Hãy đóng vai một gia sư Toán cấp 3 thân thiện.
Giải thích công thức sau cho học sinh lớp 11:
- Tên công thức: ${name}
- Công thức: ${formula}
- Thuộc chương: ${chapterTitle}

Yêu cầu:
1. Trình bày ý nghĩa của công thức và các biến số có trong công thức.
2. Cho một ví dụ áp dụng ngắn gọn (có số liệu cụ thể) hoặc một mẹo ghi nhớ.
3. Giọng điệu khích lệ, dễ hiểu. Xưng "mình" và gọi "bạn".`;

    const sysInstruction = `Trả về kết quả bằng HTML hợp lệ (dùng <b>, <ul>, <li>, <p>). KHÔNG sử dụng Markdown code blocks (\`\`\`). Đối với công thức toán học, BẮT BUỘC dùng \\( và \\) cho công thức inline, và \\[ và \\] cho công thức block (đứng riêng một dòng).`;

    try {
        const responseText = await callGeminiAPI(prompt, sysInstruction);
        document.getElementById('ai-modal-body').innerHTML = responseText;
        if (window.MathJax) MathJax.typesetPromise([document.getElementById('ai-modal-body')]);
    } catch (error) {
        document.getElementById('ai-modal-body').innerHTML = `<p style="color: #ef4444;">Xin lỗi, có lỗi kết nối đến AI. Vui lòng thử lại sau nhé!</p>`;
    }
}

async function generatePractice() {
    const container = document.getElementById('ai-practice-container');
    const btn = document.querySelector('.ai-generate-btn');
    const chapter = mathData.chapters.find(c => c.id === activeChapterId);

    btn.disabled = true;
    btn.innerHTML = `<span class="spinner-inline"></span> Đang soạn đề...`;
    container.style.display = 'block';
    container.innerHTML = `
        <div class="loader-container">
            <div class="loader"></div>
            <p>AI đang lục lọi trí nhớ và soạn bài cho bạn...</p>
        </div>`;

    const prompt = `Hãy đóng vai gia sư Toán cấp 3.
Tạo 1 bài tập TỰ LUẬN lớp 11 thuộc chương: "${chapter.title}".
Dựa trên các bài học sau: ${chapter.lessons.join(', ')}.

Yêu cầu:
- Bài tập ở mức độ vận dụng (không quá dễ, không đánh đố).
- Có bối cảnh thực tế hoặc câu chữ thú vị nếu có thể.`;

    const sysInstruction = `Trả về kết quả dưới dạng JSON với cấu trúc bắt buộc:
{
  "problem": "Nội dung đề bài (định dạng HTML cơ bản: <p>, <b>)",
  "solution": "Lời giải chi tiết từng bước (định dạng HTML cơ bản: <p>, <b>, <br>)"
}
Dùng \\( và \\) cho toán inline, \\[ và \\] cho toán block. Không dùng markdown (\`\`\`).`;

    const schema = {
        type: "OBJECT",
        properties: {
            problem: { type: "STRING" },
            solution: { type: "STRING" }
        }
    };

    try {
        const rawResponse = await callGeminiAPI(prompt, sysInstruction, schema);
        let data;
        try {
            let cleanRes = rawResponse;
            if(cleanRes.startsWith("```")) {
                cleanRes = cleanRes.replace(/^```(json)?|```$/gm, '').trim();
            }
            data = JSON.parse(cleanRes);
        } catch (e) {
            console.error(e);
            throw new Error("Lỗi parse JSON");
        }

        container.innerHTML = `
            <div class="ai-problem-card">
                <h4>🎯 Đề bài:</h4>
                <div class="math-content">${data.problem}</div>
                <button class="secondary-btn" style="margin-top: 1rem;" onclick="toggleAISolution(this)">👁️ Xem lời giải</button>
                <div class="ai-solution math-content" style="display: none; margin-top: 1rem; padding-top: 1rem; border-top: 1px dashed #cbd5e1;">
                    <h4 style="color: #10b981;">💡 Lời giải chi tiết:</h4>
                    ${data.solution}
                </div>
            </div>
        `;
        if (window.MathJax) MathJax.typesetPromise([container]);
    } catch (error) {
        container.innerHTML = `<p style="color: #ef4444;">Lỗi khi tạo bài tập. Bạn nhấn nút tạo lại thử nha!</p>`;
    } finally {
        btn.disabled = false;
        btn.innerHTML = `✨ Tạo bài tập khác`;
    }
}

function toggleAISolution(btn) {
    const sol = btn.nextElementSibling;
    if (sol.style.display === 'none') {
        sol.style.display = 'block';
        btn.innerHTML = '🙈 Ẩn lời giải';
    } else {
        sol.style.display = 'none';
        btn.innerHTML = '👁️ Xem lời giải';
    }
}

function closeModal() {
    document.getElementById('ai-modal').classList.remove('active');
}

// --- CÁC HÀM UI ---
function toggleSolution(el) {
    const content = el.nextElementSibling;
    const isVisible = content.style.display === 'block';
    content.style.display = isVisible ? 'none' : 'block';
    el.querySelector('span').innerText = isVisible ? 'Xem lời giải' : 'Ẩn lời giải';
    el.querySelector('svg').innerHTML = isVisible ? '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>' : '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>';
}

function copyFormula(btn) {
    const text = btn.getAttribute('data-formula');
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        btn.classList.add('copied');
        const originalIcon = btn.innerHTML;
        btn.innerHTML = '<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
        setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerHTML = originalIcon;
        }, 1500);
    } catch (err) {
        console.error('Lỗi khi copy', err);
    }
    document.body.removeChild(textArea);
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const isOpen = sidebar.classList.contains('open');
    if (isOpen) {
        closeSidebar();
    } else {
        openSidebar();
    }
}

function openSidebar() {
    document.getElementById('sidebar').classList.add('open');
    document.body.classList.add('sidebar-open');
    // Đổi nút 3 gạch thành nút X đóng menu
    document.querySelector('.hamburger').innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.body.classList.remove('sidebar-open');
    // Khôi phục nút 3 gạch
    document.querySelector('.hamburger').innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
}

function toggleMobileMode() {
    document.body.classList.toggle('is-mobile-preview');
    const btnSpan = document.querySelector('.mobile-preview-btn span');
    if (document.body.classList.contains('is-mobile-preview')) {
        btnSpan.innerText = "Trở về Desktop";
    } else {
        btnSpan.innerText = "Chế độ Điện thoại";
    }
    document.getElementById('app-wrapper').scrollTo({ top: 0, behavior: 'smooth' });
}

const resizer = document.getElementById('dragMe');
let startX = 0;
let startWidth = 0;

const mouseDownHandler = function(e) {
    startX = e.clientX;
    startWidth = document.getElementById('sidebar').getBoundingClientRect().width;
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
    document.body.classList.add('is-resizing');
};

const mouseMoveHandler = function(e) {
    const dx = e.clientX - startX;
    let newWidth = startWidth + dx;
    if (newWidth < 200) newWidth = 200;
    if (newWidth > 600) newWidth = 600;
    document.documentElement.style.setProperty('--sidebar-width', `${newWidth}px`);
};

const mouseUpHandler = function() {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
    document.body.classList.remove('is-resizing');
};

resizer.addEventListener('mousedown', mouseDownHandler);

init();
