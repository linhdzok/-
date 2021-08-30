const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "adbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HelyT",
  description: "Kiểm tra thông tin ngơời dùng.",
  commandCategory: "Info",
  usages: "info",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({api,event,args,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
  {body:`梁ADMIN BOT梁\n
  \n👀 Tên: ?
  \n❎ Tuổi: ?
  \n👤 😶 Giới tính: ?
  \n💫 Chiều cao cân nặng: ?
  \n💘 Mối quan hệ: Độc thân
  \n😎 Quê quán: 
  \n🤔 Nơi ở: 
  \n👫 Gu: ?
  \n🌸 Tính cách: Là một con người Fboiz nhưng khi yêu xong rất là tềnh cảm :3
  \n👉 Profile: ?`,
   
       };