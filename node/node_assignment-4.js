const fs = require('fs')

/* employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE) */
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf-8', (err) => {if (err) console.log(err); console.log("dosya basariyla olusturuldu")})


/*Bu veriyi okuyalım. (READ) */
fs.readFile('employees.json', 'utf8', (err, data) => { if (err) console.log(err); console.log(data);})



/* Bu veriyi güncelleyelim */
fs.appendFile('employees.json', '\n{"name": "Employee 3 Name", "salary": 5000} ', (err) => {if (err) console.log(err); console.log("dosya basariyla guncellendi")}) 



/* Dosyayı silelim */
fs.unlink('employees.json', (err) => {if (err) console.log(err); console.log("dosya silindi")})
