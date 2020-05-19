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