//Bài 1 : Nhập vào một số nguyên n ,xuất ra tổng số lẽ từ 1 đến n.
console.log('Bài 1:')
let n = Number(prompt('Nhập vào số nguyên n'))
let sumA = 0;
for (let i=1; i<n; i++){
    if(i%2!=0){
        sumA+=i
    }
}
console.log('Nếu số nhập vào là :' + n)
console.log('Tổng số lẽ là :' + sumA)

 //bài 2: Nhập vào một số nguyên n xuất ra n! (giai thừa)
console.log('Bài 2:')
let number4 = Number(prompt('Nhập vào số n'))
let m = 1;
for (let i=1; i<=number4; i++){
        m*= i
}
console.log('Giai thừa của :' + number4 + ' là : ' + m)


//  // bài 3: Tính kết quả của phép toán 1+1/(2^3)+1/(3^3)+...+1/(n^3)
console.log('Bài 3:')
let a = Number(prompt('Nhap vao so n can tinh'))
let sum = 1;
for (let i= 2; i<=a; i++){
    sum+= (1/(i*i*i))
}
console.log('Nếu giá trị n là: ' + a)
console.log('Thì kết quả của biểu thức là : ' + sum)



// //Bài 4 : Một cặp sô nguyên dương được gọi là số bạn bè, nếu tổng
// //các ước số của số này bằng chính số kia
console.log('Bài 4:')
 let number1 = parseInt(prompt('Nhập vào số thứ nhất'))
 let number2 = parseInt(prompt('Nhập vào số thứ 2'))
 let sum1 = 0;
 let sum2 = 0;
 for (let i=0; i<number1; i++){
    if(number1%i==0){
        sum1+= i
    }
 }
 for (let j=0; j<number2; j++){
     if(number2%j==0){
         sum2+= j
     }
 }
 if(sum1==number2&&sum2==number1){
     console.log('Đây là số bạn bè')
 }else{
     console.log('Đây không phải là số bạn bè')
 }
console.log('Tổng ước số thứ nhất :' + sum1)
console.log('Tổng ước của số thứ hai :' + sum2)

// //bài 5: Kiểm tra số vừa nhập có phải là số hoàn hảo hay không ?
console.log('Bài 5:')
 let numberCheck = Number(prompt('Nhập vào số cần kiểm tra'))
 let sumN = 0;
 for (let i=1; i<=numberCheck/2; i++){
     if(numberCheck%i==0){
         sumN+=i
     }
 }
 if(sumN==numberCheck){
     console.log(numberCheck + ' là số hoàn hảo')
 }else{
     console.log(numberCheck + ' không phải là số hoàn hảo')
}
