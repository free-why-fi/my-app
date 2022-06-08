// for(초기화 ; 조건 ; 한바퀴 돌 때마다 실행할 내용){

// }

// for( let fingercount=1; fingercount <= 5; fingercount++){
//     console.log(`${fingercount}번 까지 셌어`)
//     if(fingercount == 8){

//         break;
//     }
// }
const [arg1, arg2, ...args] = process.argv

// let result = 0
// console.log(`${args.length}개 입력했구나?`)

// for (let i = 0; i < args.length; i++) {
//     result = parseInt(args[i]) + result
//     console.log(`${i} 번 까지 셌어, ${i}번은 ${parseInt(args[i])}야.`)
// }

// console.log(`다 더하면 ${result}야`)

//let dan = args[0] //몇단인지
// for (let dan = 1; dan <= 9; dan++) {
//     if (dan == 5) {
//         console.log(`${dan}단 은 패스할랭~`)
//         continue
//     }
//     console.log(`~~~${dan}단 시작~~~`)
//     for (let i = 9; i >= 1; i--) {
//         console.log(`${parseInt(dan)} * ${parseInt(i)} = ${parseInt(dan) * i}`)
//     }
// }









// for (let i = 0; i < 5; i++) {
//     console.log((i + 1) * 2)
// }

/**

*
**
***
****
*****

 */
// let a = "hi";
// let b = "hello"
// console.log(a + " miremi " + b)

let star = "*";
let space = " ";
let count = 20
console.log()
console.log()
console.log()
console.log("             merry christmas!   ")

console.log()
console.log()
console.log()
// 1 3 5 7 9
// 2n+1
for (let i = 1; i <= count; i++) {
    let line = "";
    setTimeout(() => {
        for (let k = 0; k <= count - i; k++) {
            // i =1 - 4
            // i = 2 - 3
            line = line + space
        }

        for (let j = 0; j < 2 * i - 1; j++) {
            line = line + star;
        }
        console.log(line)


    }, (i - 1) * 300)

}