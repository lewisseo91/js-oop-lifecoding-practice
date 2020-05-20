// 객체 찍어내는 공장을 만들어 보자!
const kim = {
    name: 'kim',
    first: 10,
    second: 20,
    third: 30,
    sum: function(){ return this.first + this.second + this.third}
}
const lee = {
    name: 'lee',
    first: 10,
    second: 10,
    third: 10,
    sum: function(){ return this.first + this.second + this.third}
}

console.log(kim.sum());
console.log(lee.sum());

var d1 = new Date('2020-05-20'); // 새로운 객체가 생성되어서 할당, Date 객체는 return 해주고 있음.
console.log('d1', d1.getFullYear());
console.log('d1', d1.getMonth());
console.log('Date', Date);
// date 처럼 객체를 찍어내는 공장을 만들어 보자!

// 함수 선언문
function Person (name, first, second, third) { // 인자를 받는다.
    // console.log(this); // global
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function() {
        return this.first + this.second + this.third;
    }
}

console.log(Person()); // 함수 선언문에서 this가 undefined니깐 함수 호출 하면 -> 함수

console.log(new Person()); // 생성자가 있으면 객체를 생성하므로 생성자 함수가 된다!

const park = new Person('park',10, 20, 30);
const seo = new Person('seo',10, 20, 10);

console.log('park.sum()', park.sum());

console.log('seo.sum()', seo.sum());

// 객체를 찍어 내는 공장인 constructor(생성자) 를 만드는 방법

