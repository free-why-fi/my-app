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
for (let dan = 1; dan <= 9; dan++) {
    if (dan == 5) {
        console.log(`${dan}단 은 패스할랭~`)
        continue
    }
    console.log(`~~~${dan}단 시작~~~`)
    for (let i = 9; i >= 1; i--) {
        console.log(`${parseInt(dan)} * ${parseInt(i)} = ${parseInt(dan) * i}`)
    }
}