// var name = 'Vũ Duy Đức'

// console.log(name); //in ra tên
// alert(name) in ra thông báo là mãng đã truyền vào

// confirm('Đây là thông báo')

// prompt("Đây là thô?ng báo")// cho phép nhập thông báo
// setTimeout(function(){
//     console.log(name);
// },1000)

// setInterval(function(){
//     console.log("Đây là thông báo" + Math.random());
// },2000) in ra thông báo nhiều lần


// vid 2 
// var name = 'Vũ'
// var lastName = "Duy"
// var firstName = "Đức"

// var fullName = name + " " + lastName + " " + firstName;

// console.log(fullName);


// const a = 2 ; 
// const b = 3 ;

// if(a > 0 && b > 0 ){
//     console.log("Điều kiện đúng");
// }else{
//     console.log("Điều kiện sai");
// }


// vid 3 : toán tử học 

// var a = 8 ;
// a--;
// a--;


// console.log(a);


//vid 5 
// var a = 7 

// a += 2
// a -= 2
// a *= 2
// a /= 2
// console.log(a);



//vid 6 

// var FistName = 'Đức'
// var midName = 'Duy'
// var lastName = 'Vũ'

// console.log(FistName + " " + midName + " " + lastName);

// FistName += 'Duy'
// console.log(FistName);


// var a = 1 
// var b = 2 

// if(a > b ){
//             console.log("Điều kiện đúng");
// }else{
//             console.log("Điều kiện sai");
// } có thể so sánh tên nếu như cả hai biến tên trùng nhau

//vid 7 dữ liệu boolean (đúng hoặc sai)

// var a = 1 
// var b = 2

// var isSuccess = a > b 
// console.log(isSuccess);

// var isSuccess = 1 < 2 ;

// if(isSuccess){
//         console.log("Điều kiện đúng");
// }else{
//         console.log("Điều kiên sai");
// }


// toán tử logical

// var a = 1 
// var b = 2 
// var c = 3 

// if(a > 0 && b > 0  && c > 0){
//     console.log("Điều kiện đúng");
// }else{
//     console.log("Điều kiện sai");
// }

// if(a < 0 || b > 0  || c < 0){
//     console.log("Điều kiện đúng");
// }else{
//     console.log("Điều kiện sai");
// } // trường hợp này điều kiện vẫn đúng vì có || vẫn so sáng được b > 0 

// if(!(a<0)){
//     console.log("Điều kiện vẫn đúng");
// } Điều kiện vẫn đúng vì phủ định của a < 0 



//vid 9 
// các kiểu dữ liệu trong js Số : int , String : Mãng , Boolean : Đúng sai , Null : không có gì , Undifined : không tìm thấy , 



//vid10
// var a = 1 
// var b = "1"

// console.log(a  === b );



// var a = 1 
// var b = 2 

// var result = a < b && a < 0;
// console.log('reslut' , result);

// if(result){
//     console.log(' A < B ');
// }else{
//     console.log(' A > B');
// }



// var fullName = 'Duy Đức'

// console.log(fullName.length); đếm số kí tự của mãng

// var myString = 'Hoc JS voi f8 web'

// console.log(myString.indexOf('JS')); xem vị trí của mãng nằm ở số bao nhiêu 



// vide 15
// var age = 18;
// var pi = 3.14;

// var otherNumber = new Number(9)

// console.log(typeof otherNumber);

// var result = 20 ; 
// console.log( isNaN (result)); //isNan không hợp lệ

// console.log(typeof result.toString()); //resulut đang ở dạng string  typeoff kiểm tra result đang ở kiểu string vì đã gáng cho result thành kiểu string

// var PI = 3.14;

// console.log(PI.toFixed()); làm chẵn số  

// var languages = [
//     'Javascrift',
//     'PHP',
//     'Nextjs'
// ]


// console.log(languages); in ra mot mang 


// var languages = [
//     'javascript',
//     'php',
//     'java',
//     'C++'
// ]

// var languages2 = [
//     'index',
//     'css'
// ]

// console.log(languages.pop()); // trả về phần phử đã xoá ở cuối mãng


// console.log(languages.push('dark')); // chèn thêm một phần tử ở cuối mãng
// console.log(languages.shift()); làm mất đi phần tử đầu của mãng
// console.log(languages); 

// console.log(languages.unshift('Dart')) Cho phép chèn thêm một phần tử ở đầu 
// languages.splice('1') dùng để select tới vị trí của mãng
// console.log(languages.concat(languages2));// cộng hai mãng lại với nhau 
// console.log(languages);


// function showDialog() {
//     alert('Hello word')
// }

// showDialog()


// function write(message,message_2) {
//     console.log( message);
//     console.log( message_2);
// }

// write("Duc",'Test_2')


// function writeLog() {
//     var myString = ''
//     for (var param of arguments){
//         myString += `${param} - `
//     }
//     console.log(myString);
// }

// writeLog('Log_1','Log_2','log_3') ta có param bằng log 1 log 2 log 3 biến mystring bằng cách khi mystring + param thì sẽ có kết quả 
// log1 - log2 - log3


// var isConfirm = confirm('Hello')

// console.log(isConfirm);


// function cong(a,b){
//     return a + b 
// }

// var result = cong(2,8)

// console.log(result); kết quả = 10 là vì ta có function cộng a và b a bằng 2 b = 8 thế nên lúc return a + b thì kết quả bằng 10


// function cong(a,b) {
//     return a + b 
// }

// const result = cong(4,2)
// console.log(result);





// var myInfor = {
//     name : 'Duc',
//     age : 18,
//     adress : '18 hải châu 1' // lấy một phần tử bên trong
// }

// lấy address 
// var myKey = 'adress' // mykey sẽ tìm tới cái object chứa address 
// myInfor.email = "vuduyduc28042002@gmail.com" chèn thêm 1 trường nữa vào myinfo


// console.log(myInfor[myKey]);

// var emailKey = ' email' 

// var myInfor = {
//     name : " Đức ",
//     age : 18 ,
//     address : " Đống Đa , Hà Nội",
//     [emailKey] : "Vuduyduc28042002@gmail.com",
//     getName :function() { // dùng để trả về tên name trong myinfor
//             return this.name
//     }
// }
// ta có một biét emailkey bằng 'email' khi ta cho biến emailKey vào và truyền cho nó 
// mộ cái object thì nó sẽ so sánh với thằng email đã tạo ở trên => email => vuduyduc28042002@gmail.com
// delete myInfor.name // delete dùng để xoá đi một trường mà ta đã gắn vào myinfor
// console.log(typeof myInfor.getName());

// function User(firstName , middleName , lastName){
//     this.firstName = firstName;
//     this.middleName = middleName;
//     this.lastName = lastName;

//     this.getName = function(){
//         return `${this.firstName}${middleName}`
//     }
  
// }

// const auth = new User ('Vũ' , 'Duy' , 'Đức')
// const auth2 = new User('Lê' , 'Thanh' , 'Tâm')

// auth.title = 'Học lập trình tài f8'
// auth2.title = 'Học lập trình với Javascript'

// console.log(auth.getName());
// console.log(auth2.getName());

// đặt 3 biến firstName middleName và lastName bằng 3 biến trong const auth Vũ Duy Đức 
// và thêm một title nữa trong auth 




// function User(firstName , middleName , lastName){
//     this.firstName = firstName;
//     this.middleName = middleName;
//     this.lastName = lastName;

//     this.getName = function(){
//         return `${this.firstName}${middleName}`
//     }
  
// }


// User.prototype.className = 'f8'
// User.prototype.getClassName = function(){
//     return this.className
// }

// const auth = new User ('Vũ' , 'Duy' , 'Đức')
// const auth2 = new User('Lê' , 'Thanh' , 'Tâm')

// auth.title = 'Học lập trình tài f8'
// auth2.title = 'Học lập trình với Javascript'

// console.log(auth.className);
// console.log(auth2.getClassName());


// User.prototype sẽ chèn thêm một cột f8 vào trong object proto 


// var date = new Date();
// var year = date.getFullYear();
// var hours = date.getHours()




// console.log(`${date}/${year}/${hours}` );
// dùng để biết ngày tháng hiện tại
//getFullYear cho biết năm hiện tại là bao nhiêy

// var month = date.getMonth()

// console.log(month);

// var day = date.getDay();

// console.log(day);
// getMonth in ra năm hiện tại cùng với ngày tháng năm hiện tại


// var date = 9 // date bằng mấy thì sẽ log ra thứ đó
//rẻ nhánh if else
// if(date === 2 ) {
//     console.log("Nay là thứ 2 ");
// }else if(date === 3 ) {
//     console.log("Nay là thứ 3 ");
// }else if(date ===4 ) {
//     console.log('Nay là thứ 4');
// }else{
//     console.log('không biết');
// }



// var date = 2

// switch(date){
//     case 2 :
//         console.log('hôm nay là thú 2');
//         // break;
//     case 3 : 
//         console.log("Hôm nay là thứ 3 ");
//         // break;
//     case 4 : 
//         console.log("Hôm nay là thứ 4");
//         // break;
// }

//cấu trúc rẻ nhánh switch case



// toán tử 3 ngôi 

// const course = {
//     name : " Duy Đức ",
//     coins : 250
// }

// if(course.coins > 0 ){  course.coins gọi tới coins trong course và so sánh với điều kiện đã đặt 
//nếu điều kiện lớn hơn số đã cho thì sẽ in ra tiếp số tiền đã quy đinh trong coins
//     console.log(`${course.coins} coins`);
// }else{
//     console.log("không thấy trường hợp còn lại");
// }


// const prince = {
//     name : " Vegetable",
//     coins : 0
// }

// const reslut = prince.coins > 0 ? `${prince.coins} coins` : `Miễn phí`; // cách tương tự như if và else
// console.log(reslut);


// const prince = {
//     name : "Duy Đức",
//     age : 18
// }

// const result = prince.age > 0 ? `${prince.age} tuổi` : `Nhỏ hơn 18 tuổi`
// console.log(result);


// for(var i = 1 ; i <= 1000 ; i++){
//     console.log(i);
// } khởi đầu i sẽ bằng 1 và in ra đủ 1000 lần sẽ dừng lại


// var myArray = [
//     'Javascript',
//     'HTML',
//     'CSS',
//     'TypeScrpit'
// ]

// var arrayLength = myArray.length

// for( var i = 0 ; i <= arrayLength ; i++){
//     console.log(i);
// }

// sẽ tính tất cả các phần tử trong my array bắt đầu tính từ 0 vì i = 0 


// var myInfor = {
//     name : "Duy Đức",
//     age : 18 ,
//     month : 12
// }

// for( var key in myInfor ){
//     console.log(myInfor);
// } nó sẽ lấy những cái key là name age month in ra các key 

// var myInfor = [
//     'Javascript',
//     'PHP',
//     'Typescript',
//     'Golang'
// ]

// for(var key in myInfor) {
//     console.log(myInfor);
// }

// sẽ lấy số thứ tự của từng object

// vòng lặp while

// var myArray = [
//     'javascrpit',
//     'PHP',
//     'THML'
// ]


// var i = 1 

// while ( i <= myArray.length) {
//     console.log(myArray[i]);
//     i++
// }
// tương tự vồng lặp for whilte