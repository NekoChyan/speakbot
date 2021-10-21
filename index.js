// 引用 line bot SDK
let linebot = require('linebot');

// 初始化 line bot 需要的資訊，在 Heroku 上的設定的 Config Vars，可參考 Step2
let bot = linebot({
  channelId: process.env.1656017487,
  channelSecret: process.env.6ddedec73eb4f1e2da1ffc6e108668c7,
  channelAccessToken: process.env.z77wLXb1i4DTI+4XnmSK+1Y59veDrfoliXmNdeycWNVX3sBqFPa8uMUbwI7R4KnJog59nvXC4VZmp9nTwC4OBZo8m6rqTST51t8GxD8tDn4yCnl9VV1yBhkNu4ta9deBxaBQQm/wnJDzdd1Zat1DtgdB04t89/1O/w1cDnyilFU=
});

// 當有人傳送訊息給 Bot 時
bot.on('message', function (event) {
  // 回覆訊息給使用者 (一問一答所以是回覆不是推送)
  event.reply(`你說了 ${event.message.text}`);
});

// Bot 所監聽的 webhook 路徑與 port，heroku 會動態存取 port 所以不能用固定的 port，沒有的話用預設的 port 5000
bot.listen('/', process.env.PORT || 5000, function () {
  console.log('全國首家LINE線上機器人上線啦！！');
});
