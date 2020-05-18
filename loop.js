var memberArray = ['dh lewis', 'graphittie', 'leezzhce'];
console.group('array loop');
while (i< memberArray.length) {
    console.log( i, memberArray[i]);
    i = i + 1;
}
console.groupEnd('array loop');

console.group('object loop');
for(let name in memberObject) {
    console.log(name, memberObject.name);
}
console.groupEnd('object loop');