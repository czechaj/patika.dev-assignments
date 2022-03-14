const http = require('http')
const { type } = require('os')


const server = http.createServer((req, res) => {
    const url = req.url
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`<h2>${url.slice(1).toUpperCase()}index sayfasina hosgeldiniz</h2>`)
    }
    else if (url === '/hakkimizda') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`<h2>${url.slice(1).toUpperCase()} sayfasina hosgeldiniz</h2>`)
    }
    else if (url === '/iletisim') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`<h2> ${url.slice(1).toUpperCase()} sayfasina hosgeldiniz </h2>`)
    }
    else {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`<h2> 404: Page not found </h2>`)
    }
    res.end()
}
)

const port = 5000
server.listen(port, () => console.log(`Sunucu port ${port}de baslatildi`))


