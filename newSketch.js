var num = 8;
var bool = true;
var str = "eight"
var no = null;
var nothing;
var list = [1, 5, 2, 9]
var list2 = [0, 2, 5, 3, 7, 3]
var list3 = [1, 3, 5, 7, 9]
var main = [list, list2, list3]

console.log(num)
console.log(bool)
console.log(str)
console.log(no)
console.log(nothing)
console.log(list.length)

for (var i = 0; i < list2.length; i++){
    console.log(list2[i])
}
for (var i = 0; i < main.length; i++){
    console.log(main[i])
}

console.log(main[1][0])

main.push(5)

console.log(main[main.length - 1])

main.pop();

console.log(main)
