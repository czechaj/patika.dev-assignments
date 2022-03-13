const PI = 3.14
const parameter = process.argv.slice(2)

function getArea(r, PI){
    console.log(`Yarıçapı ${parameter[0]} olan dairenin alanı: ${(PI * r * r).toFixed(2)} şeklinde olmalıdır.`  )
}

getArea(parameter[0] * 1, PI)