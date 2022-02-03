let userName = prompt("Lutfen kullanıcı adinizi yaziniz (kullanici adiniz minimum 3 karakter olmalidir)" , "guest")

let welcome = document.querySelector('#welcome')
let error = document.querySelector("#text1")
let error2 = document.querySelector("#text2")

if(userName.length >= 3 ) {welcome.innerHTML = userName }
else {error2.innerHTML = "Girdiginiz  kullanıcı adini kontrol ediniz" ; error.innerHTML = "X    X   X" }
 




function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let weekdayNumber = date.getDay();

    let dayName = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    let weekdayName = dayName[weekdayNumber]

    h = h < 10 ? "0" + h : h;   m = m < 10 ? "0" + m : m;   s = s < 10 ? "0" + s : s;

    let time = ` ${h}:${m}:${s} ${weekdayName}` ;
  
    document.querySelector("#clock").innerHTML = time;


    setTimeout(showTime, 1000);
}

showTime();

