//Bài 1 : nhập vào 2 số và tìm số lớn hơn 0
var number = parseInt(prompt('Nhập vào số cần chọn'))
var number = parseInt(prompt('Nhập vào số cần tính'))
var number2 = parseInt(prompt('Nhập vào giá trị số 2'))
if(number>0){
    console.log('Số lớn hơn không')
}else if(number<0){
    console.log('Số nhỏ hơn không')
}
else{
    console.log('Số bằng không')
}
if(number>0 && number2>0){
    console.log('Hai số cùng lớn hơn không')
}
if(number<0 || number2<0){
    console.log('Hai số cùng nhỏ hơn không')
}
if(number == 0){
    console.log('Số nhận giá trị đúng')
}
if(number =!0){
    console.log('Số nhận giá trị sai')
}

// Bài 1 :Tính lương sau thuế :

var salary = parseInt(prompt('Nhập vào lương cần tính thuế'));
var salaryTax1 = salary * 0.7
var salaryTax2 = salary * 0.8
var salaryTax3 = salary * 0.9
if(salary>=15000000){
    console.log('Số lương sau thuế sẽ là :' + salaryTax1 + ' VND')
}else if(salary<15000000 && salary>=7000000){
    console.log('Số lương sau thuế sẽ là :' + salaryTax2 + ' VND')
}else if(salary<7000000){
    console.log('Số lương sau thuế sẽ là :' + salaryTax3 + ' VND')
}

// bài 2 : Nhập vào số tuổi của học sinh để kiểm tra xem có đủ 
// tuổi vào lớp 10

var age = parseInt(prompt('Nhập vào độ tuổi cần tính'))
if(age>=16){
    console.log('Đủ điều kiện vào lớp 10')
}else if(age<16){
    console.log('Không đủ điều kiện vào lớp 10')
}

// bài 3: Viết chương trình nhập từ bàn phím số tự nhiên bất kì 
// để thông báo cho người dùng biết số đó nhỏ hơn 100.

var number = parseInt(prompt('Nhập vào số tự nhiên'));
if(number<=100){
    console.log('Đây là số nhỏ hơn 100')
}else{
    console.log('Đây là số lớn hơn 100')
}
// bài 3 : viết chương trình để người dùng nhập vào 3 số nguyên 
// và tìm số lớn nhất trong 3 số đó
var number1 = parseInt(prompt('Nhập vào số nguyên 1'))
var number2 = parseInt(prompt('Nhập vào số nguyên 2'))
var number3 = parseInt(prompt('Nhập vào số nguyên 3'))
if(number1>number2&&number1>number3){
    console.log('Số lớn nhất là : '+ number1)
}
else if(number2>number1&&number2>number3){
    console.log('Số lớn nhất là : '+ number2)
}
else if(number3>number1&&number3>number2){
    console.log('Số lớn nhất là : '+ number3)
}else{
    console.log('Trường hợp còn lại')
}


// bài 4: Viết chương trình xếp hạng học lực của học sinh dựa trên
// các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ

var test = parseInt(prompt('Nhập vào số điểm cần kiểm tra'))
if(test>=9&&test<=10){
    console.log('Học sinh đạt hạng A')
}else if(test<9&&test>=7){
    console.log('Học sinh đạt điểm B')
}else if(test<7&&test>=5){
    console.log('Học sinh đạt điểm C')
}else if(test<5&&test>=0){
    console.log('Học sinh đạt điểm F')
}else{
    console.log('Trường hợp không xác định')
}


// bài 5: Cửa hàng bạn nhận bán sản phẩm cho một công
// ty khác và hưởng hoa hồng, với mức hoa hồng theo doanh số:

var revenue = parseInt(prompt('Nhập vào doanh số bán hàng'))
var rose1 = revenue * 0.05
var rose2 = revenue * 0.1
var rose3 = revenue * 0.2
if(revenue>=300000000){
    console.log('Số tiền hoa hồng được hưởng là :'+ rose3 +' VND')
}else if(revenue<300000000&&revenue>100000000){
    console.log('Số tiền hoa hồng được hưởng là :'+ rose2 +' VND')
}else if(revenue<=100000000){
    console.log('Số tiền hoa hồng được hưởng là :'+ rose1 +' VND')
 }



console.log(home)
console.log(typeof name)
console.log(typeof length)
console.log(typeof home)

var number = parseInt(prompt('Nhập vào điểm số cần kiểm tra'))
if(number<4&&number>=0){
    console.log('Học sinh cần phải học lại')
}else if(number>5&&number<7){
    console.log('Học sinh đạt điểm trung bình')
}else if(number>=7&&number<9){
    console.log('Học sinh đạt điểm khá')
}else if(number>=9&&number<=10){
    console.log('Học sinh đạt điểm giỏi')
}else{
    console.log('Trường hợp không hợp lệ')
}

var age = parseInt(prompt('Nhập vào độ tuổi cần tra'))
if(age>=0&&age<6){
    console.log('Đang ở độ tuổi trẻ sơ sinh và trẻ nhỏ')
}else if(age>=6&&age<=10){
    console.log('Đang ở độ tuổi học tiểu học')
}else if(age>10&&age<=14){
    console.log('Đang ở độ tuổi học trung học cơ sở')
}else if(age>14&&age<=17){
    console.log('Đang ở độ tuổi trung học phổ thông')
}else if(age>17&&age<=22){
    console.log('Đang ở độ tuổi học đại học')
}else if(age>22&&age<=30){
    console.log('Đang trong độ tuổi làm việc')
}else if(age>30&&age<=50){
    console.log('Đang trong độ tuổi trung niên')
}else if(age>50){
    console.log('Đang trong độ tuổi về già')
}else{
    console.log('Các trường hợp còn lại')
}

