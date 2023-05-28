const Router = require("koa-router");

const router = new Router({ prefix: "/vercel" });

router.post("/", (ctx) => {
  ctx.body = ctx.request.body;
});

module.exports = router;
