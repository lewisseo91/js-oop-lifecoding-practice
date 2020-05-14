
console.log('arr small');
console.time('push');
var arr1 = [1,2,3,4,5,6,7,8,9,10];
for(let i=10;i>0;i--) {
    arr1.push(1,2,3,4,5,6,7,8,9,10);
}
// console.log('push', arr1);
console.timeEnd('push');
console.time('concat');
var arr2 = [1,2,3,4,5,6,7,8,9,10];
for(i=10;i>0;i--) {
    arr2 = arr2.concat([1,2,3,4,5,6,7,8,9,10]);
}
// console.log('push', arr2);
console.timeEnd('concat');

console.log('arr big');
console.time('push');
var arr1 = [1,2,3,4,5,6,7,8,9,10];
for(let i=10000;i>0;i--) {
    arr1.push(1,2,3,4,5,6,7,8,9,10);
}
// console.log('push', arr1);
console.timeEnd('push');
console.time('concat');
var arr2 = [1,2,3,4,5,6,7,8,9,10];
for(i=10000;i>0;i--) {
    arr2 = arr2.concat([1,2,3,4,5,6,7,8,9,10]);
}
// console.log('push', arr2);
console.timeEnd('concat');