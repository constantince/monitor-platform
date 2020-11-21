import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/send/:id', (ctx, next) => {
    console.dir(ctx.request.query);
    ctx.body = '444444';
});

app
    .use(router.routes())
    .use(router.allowedMethods()).listen(3000);
