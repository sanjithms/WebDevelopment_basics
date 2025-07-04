var a = 10;
var b = 20;
let c = 10;

document.writeln("<h1>JavaScript Operations</h1><hr>");

// 1. Arithmetic Operations
document.writeln("<br><h2>Arithmetic Operations</h2>");
document.writeln("a + b = " + (a + b));
document.writeln("<br>a - b = " + (a - b));
document.writeln("<br>a * b = " + (a * b));
document.writeln("<br>a / b = " + (a / b));
document.writeln("<br>a % b = " + (a % b));
document.writeln("<br>a ** 2 = " + (a ** 2) + "<hr>");

// 2. Relational (Comparison) Operations
document.writeln("<br><h2>Relational Operations</h2>");
document.writeln("a == b → " + (a == b));
document.writeln("<br>a != b → " + (a != b));
document.writeln("<br>a > b → " + (a > b));
document.writeln("<br>a < b → " + (a < b));
document.writeln("<br>a >= c → " + (a >= c));
document.writeln("<br>b <= a → " + (b <= a) + "<hr>");

// 3. Logical Operations
document.writeln("<br><h2>Logical Operations</h2>");
document.writeln("(a < b && a == c) → " + (a < b && a == c));
document.writeln("<br>(a > b || a == c) → " + (a > b || a == c));
document.writeln("<br>!(a == c) → " + (!(a == c)) + "<hr>");

// 4. Assignment Operations
document.writeln("<br><h2>Assignment Operations</h2>");
var x = 5;
document.writeln("x = " + x);
x += 2;
document.writeln("<br>x += 2 → " + x);
x -= 1;
document.writeln("<br>x -= 1 → " + x);
x *= 3;
document.writeln("<br>x *= 3 → " + x);
x /= 2;
document.writeln("<br>x /= 2 → " + x);
x %= 2;
document.writeln("<br>x %= 2 → " + x + "<hr>");

// 5. Increment / Decrement
document.writeln("<br><h2>Increment / Decrement</h2>");
var y = 7;
document.writeln("y = " + y);
document.writeln("<br>y++ = " + (y++));
document.writeln("<br>After y++, y = " + y);
document.writeln("<br>++y = " + (++y) + "<hr>");

// 6. Bitwise Operations
document.writeln("<br><h2>Bitwise Operations</h2>");
document.writeln("a & b = " + (a & b));
document.writeln("<br>a | b = " + (a | b));
document.writeln("<br>a ^ b = " + (a ^ b));
document.writeln("<br>~a = " + (~a));
document.writeln("<br>a << 1 = " + (a << 1));
document.writeln("<br>b >> 1 = " + (b >> 1) + "<hr>");

// 7. If Condition
document.writeln("<br><h2>If Condition</h2>");
const p = 10;
let q = 30;

if (p < q) {
    document.writeln("q is greater.");
} else {
    document.writeln("p is greater.");
}
document.writeln("<hr>");

// 8. While Loop
document.writeln("<br><h2>While Loop</h2>");
var i = 5;
while (i > 0) {
    document.writeln(i + "<br>");
    i--;
}
document.writeln("<hr>");

// 9. For Loop
document.writeln("<br><h2>For Loop</h2>");
for (let i = 0; i < 5; i++) {
    document.writeln(i + "<br>");
}
document.writeln("<hr>");
//10. Switch Case
document.writeln("<br><h2>Switch Case</h2>");
let mark =78;
let grade = Math.floor(mark / 10);

switch (grade) {
    case 10:
    case 9:
        document.writeln("You got O grade.");
        break;
    case 8:
        document.writeln("You got A+ grade.");
        break;
    case 7:
        document.writeln("You got A grade.");
        break;
    case 6:
        document.writeln("You got B+ grade.");
        break;
    case 5:
        document.writeln("You got B grade.");
        break;
    case 4:
        document.writeln("You got C+ grade.");
        break;
    default:
        document.writeln("RA");
}


document.writeln("<hr>");
//11. Function
document.writeln("<br><h2>Function</h2>");
function greet(){
    document.writeln("Function printed succesfully");
}
greet();
function airthmeticoperations(a,b){
    document.writeln("<br><h3>Arithmetic Operations function</h3>");
document.writeln("a + b = " + (a + b));
document.writeln("<br>a - b = " + (a - b));
document.writeln("<br>a * b = " + (a * b));
document.writeln("<br>a / b = " + (a / b));
document.writeln("<br>a % b = " + (a % b));
document.writeln("<br>a ** 2 = " + (a ** 2) + "<hr>");

}
airthmeticoperations(10,20);
//12. String operation
document.writeln("<br><h2>String Operations</h2>");

let firstname="Sanjith";
let lastname="MS";
let fullname=firstname+lastname;
document.writeln("<Strong>Conactenation Operation:</strong>"+fullname);
document.writeln("<br><br><Strong>Slice Operation:</strong>"+fullname.slice(0,2));
document.writeln("<br><br><Strong>Uppercase Operation:</strong>"+fullname.toUpperCase());
document.writeln("<br><br><Strong>Lowercase Operation:</strong>"+fullname.toLowerCase());
document.writeln("<br><br><Strong>Replace Operation:</strong>"+fullname.replace("M","S"));
document.writeln("<br><br><Strong>SubString Operation:</strong>"+fullname.substring(1,3));
document.writeln("<br><br><Strong>LastIndexOf Operation:</strong>"+fullname.lastIndexOf('j'));

document.writeln("<hr>");

//13. Null & undefined
document.writeln("<br><h2>Null & undefined</h2>");
let age = null;
document.writeln("Age: " + age + "<br>");
document.writeln("Age + 3: " + (age + 3) + "<br>");
document.writeln(`The age is ${age}<br>`);
document.writeln("<hr>");

//14.Mathoperator
document.writeln("<br><h2>Mathamatical operations</h2>");
document.writeln("<br>10/2 →"+10/2);
document.writeln("<br>16%4 →"+16%4);
document.writeln("<br>a*b**c →"+2*3**4+"<hr>");

//15.Bodmas Rule
document.writeln("<br><h2>Bodmass operation</h2>");
document.writeln("<br>a*(b-c)**d →"+5*(10-3)**2+"<hr>");

//16.List
document.writeln("<br><h2>List Collection</h2>");
let ni=['sanjith','ms','sm','an','th','io','lk'];
let ni1=['psa'];
document.writeln(" <Strong>List1: </strong>"+ni);
ni[1]='san';
document.writeln("<br><Strong>List1 after alteration: </strong>"+ni);
document.writeln("<br><Strong>Splice operation: </strong>"+ni.splice(2,3,"jith"));
document.writeln("<br><Strong> List1 after Splice operation: </strong>"+ni);
let ni2=ni.concat(ni1);
document.writeln("<br><Strong> after Concat operation: </strong>"+ni2);
document.writeln("<br><Strong>Pushing the element in the list: </strong>"+ni2.push('ghj'));
document.writeln("<br><Strong> After conacat and push: </strong>"+ni2);
document.writeln("<br> <Strong>join operation: </strong>"+ni2.join('-')+"<hr>");

//17.Accessing Object Properties in JavaScript
document.writeln("<br><h2>Accessing Object Properties in JavaScript</h2>");
let user={name:"Sanjith",depart:"IT",email:"sanjithma@gmail.com"};
document.writeln("<strong>User Name:</strong>"+user.name);
document.writeln("<br><strong>User Department:</strong>"+user.depart);
document.writeln("<br><strong>To find type of:</strong>"+typeof user+"<hr>");