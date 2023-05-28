const router = require("koa-router")();

router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Hello Koa 2!",
  });
});

router.post("/", async (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = ctx.request.body;
});

module.exports = router;
