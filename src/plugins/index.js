function getNotionParams() {
  const NOTION_CONFIG = process.env.NOTION_CONFIG
    ? JSON.parse(process.env.NOTION_CONFIG)
    : {};
  if (NOTION_CONFIG["Authorization"]) {
    const headers = {};
    Object.keys(NOTION_CONFIG).forEach((item) => {
      headers[item] = NOTION_CONFIG[item];
    });
    return { status: 0, headers };
  } else {
    return { status: -1, message: "请配置NOTION_CONFIG！" };
  }
}

function getAxiosParams(requestBody) {
  const { method, url, data = {}, config = {}, type } = requestBody;
  const funDict = {
    notion: getNotionParams,
  };

  const result = {
    status: 0,
    data: { method, url, data, ...config },
    message: "",
  };
  const typeParams = funDict[type]();
  console.log("typeParams", typeParams);
  if (typeParams.status === 0) {
    Object.keys(typeParams).forEach((item) => {
      if (item !== "status") {
        if (item in result.data) {
          result.data[item] = { ...result.data[item], ...typeParams[item] };
        } else {
          result.data[item] = typeParams[item];
        }
      }
    });
  } else {
    result.data = { ...result.data, ...typeParams };
  }
  return result;
}

module.exports = {
  getAxiosParams,
};
