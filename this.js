const kim = {
    name: 'kim',
    first: 10,
    second: 20,
    sum: (f,s) => f+s
}

console.log("kim.sum(kim.first, kim.second)", kim.sum(kim.first, kim.second));
// 함수 인자로 kim.first, kim.second 한번 더 줘야하는 게 아쉬움. 뭐하러 한번 더 해주나.
const kim2 = {
    name: 'kim2',
    first: 10,
    second: 20,
    sum: function(){ return this.first + this.second}
}
console.log("kim2.sum()", kim2.sum());
// function 안 this는 kim2 객체를 가르킴. lexical Envrionment -> OuterEnvironmentReferences
const kim3 = {
    name: 'kim3',
    first: 10,
    second: 20,
    sum: () => kim3.first + kim3.second,
}
console.log("kim3.sum()", kim3.sum());
// es6 arrow function 은 this, arguments, super, new.target 바인딩 없이 사용하기 위한 것이므로 this는 상속받은 window 객체다.