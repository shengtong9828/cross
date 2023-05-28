const router = require("koa-router")();
const { auth, checkReqInfo } = require("../middleware");
const { cross } = require("../controller");

router.get("/", async (ctx, next) => {
  await ctx.render("index", {
    title: "Hello Koa 2!",
  });
});

router.post("/", auth, checkReqInfo, cross);

router.post("/test", async (ctx, next) => {
  ctx.body = 123;
});

module.exports = router;
