class Student {
    name: string;
    age: number;
    course: string;
    study(): void {
        document.write("Learning TypeScript");
    }
}

var student1 = new Student();
student1.name = 'Angela';
student1.age = 18;
student1.course = 'TypeScript';
student1.study();

class Connguoi {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    noi(): void { }
    nghe(): void { }
}
class Sinhvien extends Connguoi {
    constructor(name: string, age: number) {
        super(name, age);
    }
    hoc(): void {
    }
    quanlysv(): void {
        this.name = "Angela";
        this.age = 18
    }
    nghe(): void {
        alert('Nghe thầy cô giảng');
    }
}
var sinhvien = new Sinhvien('thanhnm', 27);
sinhvien.quanlysv();
console.log(sinhvien.name + sinhvien.age);

//setter and getter : cung ten phuong thuc
class Connguoi1 {
    private name: string;
    //cách 1
    public setname(name: string) {
        this.name = name;
    }
    //cách 2
    public set Name(new_name: string) {
        this.name = new_name;
    }
    public get Name(): string {
        return this.name;
    }
}
var nguoithu1 = new Connguoi1();
nguoithu1.setname("Vietpro");
// hoặc
nguoithu1.Name = "Vietpro";
