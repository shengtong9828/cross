const path = require("path");

const Koa = require("koa");
const KoaBody = require("koa-body");
const KoaStatic = require("koa-static");
const cors = require("koa2-cors");

const errHandler = require("./errHandler.js");

const router = require("../router");

const app = new Koa();

//cors配置
app.use(
  cors({
    origin: "*", //前端origin
    credentials: true, //允许跨域带cookie
  })
);

app.use(
  KoaBody({
    multipart: true,
    formidable: {
      // 在配置选项option里，不推荐使用相对路径
      // 在option里的相对路径，不是相对的当前文件，而是相对proces.cwd()
      uploadDir: path.join(__dirname, "../upload"),
      keepExtensions: true,
    },
    json: true,
    parsedMethods: ["POST", "PUT", "PATCH", "DELETE"],
  })
);
app.use(KoaStatic(path.join(__dirname, "../upload")));

app.use(router.routes()).use(router.allowedMethods());

// 统一错误处理
app.on("error", errHandler);

module.exports = app;
