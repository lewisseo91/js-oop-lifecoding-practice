var superObj = {superVal: 'super'};
var subObj = {subVal: 'sub'}
subObj.__proto__ = superObj;
console.log('subObj.superVal', subObj.superVal);
subObj.superVal = 'sub';
console.log('superObj.superVal', superObj.superVal);
subObj.__proto__.superVal = 'sub';
console.log('superObj.superVal', superObj.superVal);
