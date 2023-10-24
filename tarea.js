//1.
function maxNumber(max) {
    return Math.max(...max);
}
console.log(maxNumber([2, 9, 6, 5]));


//2.
function minNumber(min) {
    return Math.min(...min);
}
console.log(minNumber([3, -8, 0, 7]));



//3.
function sumElement(sum) {
    return sum.reduce((a, b) => a + b, 0);
}
console.log(sumElement([4, 5, 6, 7, 8]));


//4.
function averageElement(pro) {
    return sumElement(pro) / pro.length;
}
console.log(averageElement([4, 5, 6, 7, 8]));


//5.
function filterEvenNumbers(fil) {
    return fil.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7]))

//6.
function filterOddNumbers(imp) {
    return imp.filter(num => num % 2 !== 0);
}
console.log(filterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]))


//7.
function duplicateArray(duc) {
    return duc.map(num => num * 2);
}
console.log(duplicateArray([1, 2, 3, 4, 5]))

//8.
function findFirst(elem, conditionFunc) {
    return elem.find(conditionFunc);
}
let isPositive = function(x) { return x > 0 };
console.log(findFirst([-3, -2, -1, 0, 1, 2], isPositive));


//9.
function findLast(ult, conditionFunc) {
    for (let i = ult.length - 1; i >= 0; i--) {
        if (conditionFunc(ult[i])) {
            return ult[i];
        }
    }
    return null;
}
let isNegative = function(x) { return x < 0 };
console.log(findLast([-3, -2, -1, 0, 1, 2], isNegative))


//10.
function countOccurrences(cuent, element) {
    return cuent.filter(item => item === element).length;
}
console.log(countOccurrences([1, 2, 3, 4, 5]))

//11.
function eliminarDuplicados(dup) {
    return dup.filter((item, index) => dup.indexOf(item) === index);
}
let dup = ['foo', 'bar', 'foo', 'baz', 'foo', 'baz'];
let dupSinDuplicados = eliminarDuplicados(dup);
console.log(dupSinDuplicados);

//12.
function invertirOrden(inver) {
    return inver.slice().reverse();
}
let inver = [1, 2, 3, 4, 5];
let inverInvertido = invertirOrden(inver);
console.log(inverInvertido);

//13.
function ordenarNumeros(ord) {
    return ord.slice().sort((a, b) => a - b);
}
let ord = [5, 3, 8, 1, 2];
let ordOrdenado = ordenarNumeros(arr);
console.log(ordOrdenado);

//14.
function concatenarStrings(str) {
    return str.join(' ');
}
let str = ['Hola', 'mundo!'];
let str1 = concatenarStrings(str);
console.log(str1);

//15.
function combinarSinDuplicados(comb1, comb2) {
    let combinado = [...comb1, ...comb2];
    return eliminarDuplicados(combinado);
}
let comb1 = [1, 2, 3];
let comb2 = [3, 4, 5];
let combinado = combinarSinDuplicados(comb1, comb2);
console.log(combinado);