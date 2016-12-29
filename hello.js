var helloworld = function (name, age) {
    return "" + name + age;
};
var domain = 'freetuts.net';
let email = 'thehalfheart@gmail.com';
const vietpro = 'vietpro.net.vn';
var songuyen = 10;
var sothuc = 1.0;
var isLunch = true;
var stringArray_1 = ['Welcome', 'to', 'Vietpro'];
var stringArray_2 = ['Vietpro', 'welcome', 'you'];
var stringArray = ['Vietpro', 18, 'Võ Văn Dũng'];
var Hello;
(function (Hello) {
    Hello[Hello["Xinchao"] = 0] = "Xinchao";
    Hello[Hello["Hi"] = 10] = "Hi";
    Hello[Hello["Bonjour"] = 11] = "Bonjour";
})(Hello || (Hello = {}));
;
let vietnam = Hello.Xinchao;
alert(vietnam);
var vietproany = 'Welcome to Vietpro';
var anyArray = ['Vietpro', 18, true];
let notSure = 4;
notSure = "Thay thế bằng kiểu string";
notSure = false;
function showAlert() {
    alert("Welcome to Vietpro");
}
let unusable = undefined;
let u = undefined;
let n = null;
var day = "Tuesday";
if (day == "Monday") {
    alert('Today is Monday');
}
else {
    alert('Today is not Monday');
}
var dayofWeek = 'Monday';
switch (dayofWeek) {
    case "Monday":
        alert("Today is monday");
        break;
    case "Tuesday":
        alert("Today is tuesday");
        break;
    case "Wednesday":
        alert("Today is wednesday");
        break;
    case "Thursday":
        alert("Today is thursday");
        break;
    case "Friday":
        alert("Today is friday");
        break;
    case "Saturday":
        alert("Today is saturday");
        break;
    default:
        alert("Today is sunday");
        break;
}
var start = 1;
while (start <= 10) {
    document.write(start + "<br>");
    start++;
}
var start = 10;
do {
    document.write(start + "<br>");
    start--;
} while (start > 10);
var start = 1;
for (start; start <= 10; start++) {
    document.write(start + "<br>");
}
function helloworld123(name, age) {
    alert("Hello world,I am " + name + ",I am" + age);
}
helloworld123("Vietpro", 18);
function tinhtong(sothu1, sothu2) {
    var tong = sothu1 + sothu2;
    return tong;
}
tinhtong(1, 2);
function add(sothu1, sothu2) {
    return sothu1 + sothu2;
}
function addGeneric(x) {
    return x;
}
addGeneric("Vietro");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var s = "";
var o = 0;
for (let num of numbers) {
    s = s + "\n Array Value is - " + num;
}
alert(s);
