//#ENJOY BRO😍
// Credit: JINHUYK|KangJinhuyk 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "chanjinhuyk@gmail.com";
global.location = "Douala, congo-brazaville";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://paulrick312:rBfEkBv2P9b6LDWH@cluster0.pmmq0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/ChanJinhuyk/JINHUYK-MD-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/sx2KY0mS/JINHUYK-MD-V1.jpg";
global.devs = "https://wa.me/242067274660 , https://wa.me/242065155487";
global.sudo = process.env.SUDO || "242067274660";
global.owner = process.env.OWNER_NUMBER || "2250576509952";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.postimg.cc/nrsBc8Td/JINHUYK-MD-V0.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "false";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://unknown-md-sessions-generator-1.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUhlUk84Z1haSUZhRW9NajdnTjBwaDltQzZVRXcwMENubFpJVnlYWHFudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzhTYkVxU0xpUzdjTzRabEpEdzlNUmdhZzZFMHlsRzlod1NOZjBSYTlRRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQ3pUV3RZbktEVU9FVHpCUXRDUHJPaDVUeXQvT0JGWHY1UlN1ekcxS25NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5eVByc01BSmczZWU4T2lFa1VBcGU3Mk5vWHYvYjlac3VsSDdPK3p0ZG5JPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVKaVU5dkRhSk9wSFZ0Vk41S3h0cjlQVGRUbEV0R0J5NTVQRFpuZUl0bU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijc3RlMvbzBKbFoyd3pJakV4Yk95QU40YWowUDJCOThvUzcxQ2Myb0lZRzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0ROc2k5dFlsR0JLaElkZllGZ0h4eW1VaDZLSUYwNGs4WmUyK3VQT1ZuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0xhTEtRNWFnZCtjYWltOXBLN3pOZkdDS3lHQThuMjRyTEhFME8rb0lRbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhlNGg5MEl2K3NnTS9rR3lDbWRVaXNNYWZXZHhmVSs2QUpnVW5GcUZuOGg3KzNkcHkxUUZFNmNxRkVFMkRNOGdUNGVGUFgvbWErNkVobG1jaG53VUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6IkFIYmpJVVlTVDRDRDc0Y3ZmUEZEVVJlQytsWWJqRWlCN01TZ0MrRDRZdk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImZYbDFvYWtUUVNhT2NQRWhSZkxZaXciLCJwaG9uZUlkIjoiZGI5ZjdmNzgtNDUzMi00NTBiLTgxZmEtNTM4MTAxNzcxZTU4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJVdU5lQTltWHhQZGMvNEZzbTB2RWlSakoraz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxNHF2K0ZZNlJHdTBMaGZrVy8rWCtMMm1HUG89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSFlCMldQWFYiLCJtZSI6eyJpZCI6IjIyNTc2NTA5OTUyOjE0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPVHJrY29IRU0rcjM3MEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzaTlaOTNuZ2EwSmdEdnpTNlRCbDhxVDExY3U4aCt6MmxTWjdldVNWM2tjPSIsImFjY291bnRTaWduYXR1cmUiOiJud1lvZWk3blhHeGs0VXdYOEdQQ1E4MGt1Z0NoYVVRRXNiMnVCMjRGM3R6dnJ1QnlSYm1ZSGEvN2xNdDFNREozQ3F5SFVvZlJrNmZkenhQMmpuR3VBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQ3B3eXdHM0lwR0cvdkNTejV2WEFTWHdNTUhoWFJnMDZaZzB3aUlGUjllNHhPNmhGTUJRTlJPYS9weW5VaURuSHpVeEdoQzZkTGxSR3R4Wm5xSkJ4QUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjU3NjUwOTk1MjoxNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkNHZXZmQ1NEd0Q1lBNzgwdWt3WmZLazlkWEx2SWZzOXBVbWUzcmtsZDVIIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQwMTAxMDg1fQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "🍂𝐊𝐀𝐍𝐆 𝐉𝐈𝐍𝐇𝐘𝐔𝐊🍂",
  packname: process.env.PACK_NAME || "🍂𝐉𝐈𝐍𝐇𝐔𝐘𝐊-𝐌𝐃🍂",
  botname: process.env.BOT_NAME || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "🍁𝐊𝐀𝐍𝐆 𝐉𝐈𝐍𝐇𝐘𝐔𝐊🍁",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "JINHUYK").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
