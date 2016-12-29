class Student {
    study() {
        document.write("Learning TypeScript");
    }
}
var student1 = new Student();
student1.name = 'Angela';
student1.age = 18;
student1.course = 'TypeScript';
student1.study();
class Connguoi {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    noi() { }
    nghe() { }
}
class Sinhvien extends Connguoi {
    constructor(name, age) {
        super(name, age);
    }
    hoc() {
    }
    quanlysv() {
        this.name = "Angela";
        this.age = 18;
    }
    nghe() {
        alert('Nghe thầy cô giảng');
    }
}
var sinhvien = new Sinhvien('thanhnm', 27);
sinhvien.quanlysv();
console.log(sinhvien.name + sinhvien.age);
class Connguoi1 {
    setname(name) {
        this.name = name;
    }
    set Name(new_name) {
        this.name = new_name;
    }
    get Name() {
        return this.name;
    }
}
var nguoithu1 = new Connguoi1();
nguoithu1.setname("Vietpro");
nguoithu1.Name = "Vietpro";
