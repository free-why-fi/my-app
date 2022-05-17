const [arg1, arg2, ...args] = process.argv
// console.log("args are: ", args)

console.log("***************************")
console.log("****** 꼬니의 계산기 ******")
console.log("***************************")

console.log()
// 배열 array
// let testArray = [1, 2, 5, "rhsk", { gonny: "babo" }]
// console.log(testArray[3])


let input1 = parseInt(args[1])
let input2 = parseInt(args[0])
let input3 = args[2]

let resultComment = "결과"
let result

console.log(`<${input1} ${input3} ${input2}> 를 계산할거야`)


if (input3 == "+") {
    result = input1 + input2
}
else if (input3 == "-") {
    result = input1 - input2
}
else if (input3 == "*") {
    result = input1 * input2
}
else if (input3 == "/") {
    result = input1 / input2
}
else {
    result = "틀렸어"
}

console.log("===========================")
console.log(`${resultComment}: ${result}`)
console.log("===========================")

/*
//조건 if문
if( 조건1 ){
    //조건 1일때 실행할 코드
}

//조건이 여러개일떄
if( 조건1){

}else if(조건2){

}


if( 조건1){

}else if(조건2){

}else{
    //다 아닐때
}*/

/*
조건
[변수 / 값](비교 연산자)[변수 / 값]
== //같다
!= // 다르다
> // 크다
< //작다
>= // 크거나 같다
<= // 작거나 같다

예시
let a = 0;
console.log(a < 1) // true
let b = "hi"
console.log(b == "안녕") //false
*/