$pdfPath = "c:\Users\grant\Desktop\portfolio\assets\Granth_Senjaliya_Resume.pdf"

# Write a basic valid PDF file format (PDF-1.4) containing Granth's resume text
$pdfContent = @"
%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
6 0 obj
<< /Length 1200 >>
stream
BT
/F1 22 Tf
50 740 Td
(GRANTH SENJALIYA) Tj
/F2 10 Tf
0 -16 Td
(Computer Science Engineering Student | CHARUSAT University (Batch 2025)) Tj
0 -14 Td
(Email: granthsenjaliya881@gmail.com | Phone: +91 98251 06122 | Location: Gujarat, India) Tj
0 -12 Td
(GitHub: github.com/GranthSenjaliya88 | LeetCode: leetcode.com/u/Granth88/) Tj

0 -28 Td
/F1 14 Tf
(EDUCATION) Tj
0 -4 Td
1 0 0 1 50 642 Tm
/F1 11 Tf
(CHARUSAT University) Tj
350 0 Td
(2022 - Present) Tj
-350 -14 Td
/F2 10 Tf
(Bachelor of Technology - Computer Science Engineering | 2025 Batch) Tj

0 -20 Td
/F1 11 Tf
(Aspire Public School) Tj
350 0 Td
(2023 - 2025) Tj
-350 -14 Td
/F2 10 Tf
(Higher Secondary School (12th GSEB - Science Stream)) Tj

0 -20 Td
/F1 11 Tf
(Aspire Public School) Tj
350 0 Td
(Passed 2023) Tj
-350 -14 Td
/F2 10 Tf
(Secondary School (10th GSEB Board) - Grade: 87%) Tj

0 -32 Td
/F1 14 Tf
(TECHNICAL SKILLS) Tj
0 -16 Td
/F1 10 Tf
(Programming Languages: ) Tj
130 0 Td
/F2 10 Tf
(C, C++, Java, JavaScript, HTML5, CSS3) Tj
-130 -14 Td
/F1 10 Tf
(Hardware & IoT: ) Tj
130 0 Td
/F2 10 Tf
(Arduino, ESP32, ESP8266, Sensors, Circuit Design) Tj
-130 -14 Td
/F1 10 Tf
(Core Concepts: ) Tj
130 0 Td
/F2 10 Tf
(Data Structures & Algorithms (DSA), Problem Solving, Digital Electronics) Tj
-130 -14 Td
/F1 10 Tf
(Developer Tools: ) Tj
130 0 Td
/F2 10 Tf
(Git, GitHub, VS Code, Arduino IDE, Figma) Tj

0 -32 Td
/F1 14 Tf
(FEATURED PROJECTS) Tj

0 -16 Td
/F1 11 Tf
(1. ESP32 Voice Controlled Home Automation) Tj
/F2 10 Tf
0 -14 Td
(- Designed IoT-based automation using ESP32 & voice command recognition over Wi-Fi.) Tj
0 -12 Td
(- Integrated relay modules for real-time remote appliance control and feedback.) Tj

0 -18 Td
/F1 11 Tf
(2. Farmer Guide Website) Tj
/F2 10 Tf
0 -14 Td
(- Developed a Gujarati language web guide for agricultural recommendations.) Tj
0 -12 Td
(- Provided insights on crop management, fertilizers, pest control, and government schemes.) Tj

0 -18 Td
/F1 11 Tf
(3. Digital Voting System) Tj
/F2 10 Tf
0 -14 Td
(- Built a hardware digital voting machine using logic gates, push buttons & CD4026 counters.) Tj
0 -12 Td
(- Implemented debouncing circuits to ensure tamper-proof and accurate vote tallies.) Tj

ET
endstream
endobj
xref
0 7
0000000000 65535 f
0000000009 00000 n
0000000058 00000 n
0000000115 00000 n
0000000244 00000 n
0000000315 00000 n
0000000381 00000 n
trailer
<< /Size 7 /Root 1 0 R >>
startxref
1630
%%EOF
"@

[System.IO.File]::WriteAllText($pdfPath, $pdfContent, [System.Text.Encoding]::ASCII)
Write-Host "Created valid PDF resume at: $pdfPath (size: $([System.IO.FileInfo]::new($pdfPath).Length) bytes)"
