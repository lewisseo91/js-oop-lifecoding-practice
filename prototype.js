// 함수 선언문
function Person (name, first, second, third) { // 인자를 받는다.
    // console.log(this); // global
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}

 // 공통적으로 만들 수 있는 function이 필요하다. 
 // person 생성자의 prototype 즉, 원형을 봐야한다!
 // 한번만 정의되기 때문에 메모리도 절약.
 // 생성자 이용해서 함수 생성할 때 주로 prototype으로 설정
Person.prototype.sum = function() {
    return 'prototype : ' + (this.first + this.second + this.third);
}

const park = new Person('park',10, 20, 30);
// park.sum = function() { // park만 바꾸고 싶으면 이거 사용 가능.
//     return 'modified' + (this.first + this.second);
// }
const seo = new Person('seo',10, 20, 10);
// park.sum = function() {
//     return 'modified' + this.first + this.second;
// } // 여러번 생성해야하면 생산성이 떨어진다!

console.log('park.sum()', park.sum());

console.log('seo.sum()', seo.sum());

// 프로토타입은 객체 생성 시점이 아닌 필요 시점에 생성가능하기 때문에 메모리 이점을 가져간다.
// 또한 생성된 모든 객체가 공통 사용 가능하고 재정의가 가능하기 때문에 커스터마이징도 가능.



