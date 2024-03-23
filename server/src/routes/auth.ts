import Router from "koa-router";
const router = new Router();

router.get('/auth', (ctx) => {
    ctx.body = { message: 'Hello World!'}
}); 

export default router;