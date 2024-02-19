import xss from "xss";
/**
 * https://github.com/leizongmin/js-xss#whitelist
 */
const whiteList = () => {
  const whiteListMap = { ...xss.whiteList };
  Object.keys(whiteListMap).forEach((keyName) => {
    // console.log('目前的key=>',keyName,'能用的標籤=>',whiteListMap[keyName]);
    //  除了a標籤以外，把全部的標籤變成只剩下 style 可用
    whiteListMap[keyName] = ["style"];
    if(keyName === "a"){
      whiteListMap[keyName] = ["style","target","href"];
    }
  });
  return whiteListMap;
};

export const xssParse = (str) => {
  return xss(str, {
    whiteList: whiteList(),
    stripIgnoreTag: true,
    stripIgnoreTagBody: ["script"],
  });
};
