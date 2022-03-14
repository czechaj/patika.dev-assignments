const Koa = require('koa');
const Router = require('@koa/router');


const app = new Koa();
const router = new Router();

const port = 3000;

router.get('/', (ctx) => {
    ctx.body = '<h1> INDEX sayfasina hosgeldiniz</h1>'
})

router.get('/about', (ctx) => {
    ctx.body = '<h1>HAKKIMIZDA sayfasina hosgeldiniz</h1>'
})

router.get('/contact', (ctx) => {
    ctx.body = '<h1>ILETISIM sayfasina hosgeldiniz</h1>'
})

app.use(router.routes())


app.listen(port, () => {
    console.log(`request responded on port ${port}`)
})