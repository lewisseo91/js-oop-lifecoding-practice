// 객체를 return
// constructor 함수 역할
// 1. 객체를 만든다.
// 2. 객체의 초기상태를 세팅한다.
// function Person (name, first, second, third) {
//     this.name = name;
//     this.first = first;
//     this.second = second;
//     this.third = third;
// }

// var kim = new Person('kim', 10, 20);

// 클래스 형태로 생성해보자. 

class Person {
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
}

var kim = new Person();
console.log('kim', kim); // 객체가 생성되었다.

