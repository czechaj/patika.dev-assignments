// Ödev 3
// Daire Modüler Dosyası
// Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları içeren ve consola sonuçları yazdıran circle.js dosyası oluşturunuz.
// module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
// require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.
// Kolay gelsin.


const parameter = process.argv.slice(2)


function circleArea(r){
    return Math.PI * r* r
    // console.log(`Yarıçapı ${parameter[0]} olan dairenin alanı: ${(Math.PI * r * r).toFixed(2)} şeklinde olmalıdır.`  )
}


function circleCircumference(r){
    return Math.PI * 2 * r
    // console.log(`Yarıçapı ${parameter[0]} olan dairenin çevresi: ${(Math.PI * r * 2).toFixed(2)} şeklinde olmalıdır.`)
}


function mixedCircle(x){
    if(x === undefined){
        x = parameter[0]
    }
    console.log(`Yarıçapı ${x} olan dairenin çevresi: ${(circleCircumference(x).toFixed(2))} ve alanı: ${(circleArea(x).toFixed(2))} şeklinde olmalıdır.`)
}


module.exports = {
    
    mixedCircle
}
