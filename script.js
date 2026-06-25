let sname, h, e, m, total, avg, sstatus, grade, color;

sname = prompt('Enter the name:');
h = parseInt(prompt('Enter Hindi marks:'));
e = parseInt(prompt('Enter English marks:'));
m = parseInt(prompt('Enter Math marks:'));

total = h + e + m;
avg = total / 3;

// Checks if the average falls into a valid range
if (avg >= 1 && avg <= 100) {
    sstatus = (avg >= 60) ? "pass" : "fail";
    
    grade = (avg >= 90) ? "A" : 
            (avg >= 80) ? "B" : 
            (avg >= 70) ? "C" : 
            (avg >= 60) ? "D" : "better luck next time!!";

    color = (avg >= 90) ? "green" : 
            (avg >= 80) ? "blue" : 
            (avg >= 70) ? "orange" : 
            (avg >= 60) ? "yellowgreen" : "red";

    // Writes the structure directly into the HTML document
    document.write(`
        <table width="600" border="1" cellpadding="10" style="text-align: center; border-collapse: collapse; margin: 0 auto;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>Name</th>
                    <th>Hindi</th>
                    <th>English</th>
                    <th>Math</th>
                    <th>Total</th>
                    <th>Average</th>
                    <th>Status</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${sname}</td>
                    <td>${h}</td>
                    <td>${e}</td>
                    <td>${m}</td>
                    <td>${total}</td>
                    <td>${avg.toFixed(2)}</td>
                    <td style="color: ${color}; font-weight: bold; text-transform: uppercase;">${sstatus}</td>
                    <td style="color: ${color}; font-weight: bold;">${grade}</td>
                </tr>
            </tbody>
        </table>
    `);
} else {
    document.write("<h3 style='color:red; text-align:center;'>Invalid average calculated. Please check the entered marks.</h3>");
}