const { ErrorModel } = require("../res-model/index");

async function auth(ctx, next) {
  try {
    if (process.env.TOKEN) {
      if (process.env.TOKEN === ctx.request.header.token) {
        await next();
      } else {
        ctx.body = new ErrorModel(-1, "无效的Token");
      }
    } else {
      await next();
    }
  } catch (error) {
    ctx.body = new ErrorModel(-1, "授权失败");
  }
}

async function checkReqInfo(ctx, next) {
  console.log("ctx.request.body", ctx.request.body);
  const { method, url } = ctx.request.body;
  if (!method || !url) {
    ctx.body = new ErrorModel(-1, "参数错误！");
  } else {
    await next();
  }
}

module.exports = {
  auth,
  checkReqInfo,
};
