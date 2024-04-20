/*let color=prompt('rang kiriting','black')
alert(`menga ham ${color} rang yoqadi`)
*/
// Taqqoslash operatorlari
/*= 
==
===
!=
>=
<=
>
<
*/

/*let num1 = '2'
let num2 = 3 
alert(num1 = num2)*/

// Shart operatorlari
/*
if(shart){
    kod
}else{
    kod
}*/

/*let num1 = +prompt('1-sonni kiriting')
let num2 = +prompt('2-sonni kiriting')
let a = prompt('operator kiriting')
if (a == '+') {
    alert(num1 + num2)
}else{
    alert("error")
}*/

/*

let num1 = +prompt('1-sonni kiriting')
let num2 = +prompt('2-sonni kiriting')
if(num1>num2){
    alert("1 son kotta  2chi sondan")
}else{
    alert("1 son kichik 2chi sondan")
}*/
/*
let category = prompt('Tavar kategoriyasini tanlang , kompyuter, xolodilnik,pilisos', "kompyuter")
if(category == "pilisos"){
    document.write("pilisoslar")
}else if (category == "kompyuter"){

    let categoryComp=prompt('ПК/Ноутбуки ?')
    if(categoryComp=='ПК'){
        document.write('Kompyuterlar')
    }else{
        document.write('Noutbuklar')
    }
    
}else if(category=="xolodilnik"){
    document.write('Xolodilniklar')
}else{
    document.write('BUNDAY KATEGORIYADAGI TAVAR MAVJUD EMAS')
}
*/

let language = prompt('tilni tanlang (uz/ru)', 'uz/ru');
if (language == 'ru') {
document.write('Привет!');
}
else {
document.write('Salom!');
}
