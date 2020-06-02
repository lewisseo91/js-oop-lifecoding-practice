var superObj = {superVal: 'super'};
// var subObj = {subVal: 'sub'}
// subObj.__proto__ = superObj;
var subObj = Object.create(superObj); // proto 쓰지않고 새로 만드는 방법
console.log('subObj.superVal', subObj.superVal);
subObj.superVal = 'sub';
debugger;
console.log('superObj.superVal', superObj.superVal);
subObj.__proto__.superVal = 'sub';
console.log('superObj.superVal', superObj.superVal);

var kim = {
    name: 'kim',
    first:10, second:20,
    sum: function(){return this.first+this.second}
}
var lee = Object.create(kim);
// 클로져 방법
var avg = function() {
    return (this.first + this.second)/2;
}
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = avg;
// var lee = {
//     name: 'lee',
//     first:10, second:10,
//     avg: function() {
//         return (this.first+this.second)/2;
//     }
// }
lee.__proto__ = kim;
console.log('lee.sum()', lee.sum());
console.log('lee.avg()', lee.avg());