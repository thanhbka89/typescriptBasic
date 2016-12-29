var helloworld: (name, age) => string = function(name: string, age: number) {
    return "" + name + age;
}

/*
class Customer {
    Name : string;
    constructor (firstName: string, lastName: string)
    {
        this.Name = firstName + "  " + lastName;
    }
    GetName()
    {
        return "Hello, " + this.Name;
    }
}
let cust = new Customer("Jimi","Scott");
*/

/**
Kieu du lieu
*/
//string
var domain: string = 'freetuts.net';
let email = 'thehalfheart@gmail.com';

// Khai báo hằng
const vietpro = 'vietpro.net.vn';
// Lỗi vì không thể thay đổi giá trị của hằng
//vietpro = 'vietpro.net.vn';

//number
var songuyen: number = 10;
var sothuc: number = 1.0;

//boolean
var isLunch: boolean = true;

//array
// cách 1
var stringArray_1: string[] = ['Welcome', 'to', 'Vietpro'];
// cách 2
var stringArray_2: Array<string> = ['Vietpro', 'welcome', 'you'];

//tuple : cũng là một kiểu dữ liệu đặc biết,nó là một mảng các giá trị nhưng mỗi giá trị lại có thể có một kiểu dữ liệu khác nhau.
var stringArray: [string, number, string] = ['Vietpro', 18, 'Võ Văn Dũng'];

//enum
enum Hello { Xinchao, Hi = 10, Bonjour };
let vietnam: Hello = Hello.Xinchao;
alert(vietnam);

//any : cho phép chúng ta khai báo một giá trị khi chúng ta chưa biết giá trị trả vè ở kiểu dữ liệu nào
var vietproany: any = 'Welcome to Vietpro';
var anyArray: any[] = ['Vietpro', 18, true];

let notSure: any = 4; // kiểu number
notSure = "Thay thế bằng kiểu string";
notSure = false; // bây giờ lại là kiểu boolean

//void : cho phép ta khai báo 1 hàm không có giá trị trả về.Thực chất nó là kiểu dữ liệu với giá trị null hoặc undefined.
function showAlert(): void {
    alert("Welcome to Vietpro");
}
let unusable: void = undefined;

let u: undefined = undefined;
let n: null = null;

//if ...else
var day: string = "Tuesday";
if (day == "Monday") {
    alert('Today is Monday');
}
else {
    alert('Today is not Monday');
}

//switch ...case
var dayofWeek: string = 'Monday';
switch (dayofWeek) {
    case "Monday": alert("Today is monday"); break;
    case "Tuesday": alert("Today is tuesday"); break;
    case "Wednesday": alert("Today is wednesday"); break;
    case "Thursday": alert("Today is thursday"); break;
    case "Friday": alert("Today is friday"); break;
    case "Saturday": alert("Today is saturday"); break;
    default: alert("Today is sunday"); break;
}

//while
var start: number = 1;
while (start <= 10) {
    document.write(start + "<br>");
    start++;
}

//do...while
var start: number = 10;
do {
    document.write(start + "<br>");
    start--;
}
while (start > 10)

//for
var start: number = 1;
for (start; start <= 10; start++) {
    document.write(start + "<br>");
}

//function no param
function helloworld123(name: string, age: number): void {
    alert("Hello world,I am " + name + ",I am" + age);
}
helloworld123("Vietpro", 18);

function tinhtong(sothu1: number, sothu2: number): number {
    var tong = sothu1 + sothu2;
    return tong;
}
tinhtong(1, 2);

//overload
function add(sothu1: number, sothu2: number): number;
function add(sothu1: number, sothu2: string): number;
function add(sothu1: string, sothu2: number): number;
function add(sothu1, sothu2) {
    return sothu1 + sothu2;
}

//generic
function addGeneric<T>(x: T): T {
    return x;
}
addGeneric<string>("Vietro");

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var s = "";
var o = 0;
for (let num of numbers) {
    s = s + "\n Array Value is - " + num;
}
alert(s);
