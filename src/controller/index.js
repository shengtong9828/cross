const axios = require("axios");
const { getAxiosParams } = require("../plugins");
const { SuccessModel, ErrorModel } = require("../res-model/index");

class ColorController {
  async cross(ctx) {
    try {
      let result = {};
      const param = getAxiosParams(ctx.request.body);
      console.log("param", param);
      if (param.status === 0) {
        await axios(param.data)
          .then((res) => {
            result = new SuccessModel(res.data);
          })
          .catch((err) => {
            const { code, message } = err;
            result = new ErrorModel(-1, `${code} -- ${message}`);
          });
      } else {
        result = new ErrorModel(param.status, param.message);
      }
      ctx.body = result;
    } catch (error) {
      ctx.body = new ErrorModel(-1, "请求错误！");
    }
  }
}

module.exports = new ColorController();
