var kim = {name: 'kim', first:10, second: 20};
var lee = {name: 'lee', first:10, second: 10};
function sum(prefix) {
    return prefix + (this.first+this.second);
}
// call: 첫번째 인자에 this로 지정할 객체, 두 번째 인자부터 호출하려고 하는 함수의 파라미터값
console.log("sum.call(kim)", sum.call(kim, "=> ")); // 파라미터 값 존재 
console.log("sum.call(lee)", sum.call(lee)); // 존재 안함 -> NAN

// bind: 함수를 고정 시켜버리는 것. 내부적으로 kim 을 기준으로 하는 새로운 함수가 만들어 짐. sum에는 영향을 미치지 않는다.
var kimSum = sum.bind(kim, '-> ');
// this 값을 영구적으로 바꾸는 새로운 함수를 만드는 것.
console.log('kimSum()', kimSum());