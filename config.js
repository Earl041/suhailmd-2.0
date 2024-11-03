const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="earltiktokofficial04@gmail.com"
global.location="Terengganu,korea."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://Fadhil:Fadhil@cluster0.t47cv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://Fadhil:Fadhil@cluster0.t47cv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© So" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+601173139757";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "601173139757,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_27_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MyxcbiAgICAgICAgNixcbiAgICAgICAgMzYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNixcbiAgICAgICAgMjA0LFxuICAgICAgICA2NixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDUyLFxuICAgICAgICA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQyLFxuICAgICAgICA0NixcbiAgICAgICAgNzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4MixcbiAgICAgICAgMTgwLFxuICAgICAgICAzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICA0MixcbiAgICAgICAgMTAsXG4gICAgICAgIDEyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDg0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDkxLFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4LFxuICAgICAgICA4NixcbiAgICAgICAgMjMwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNixcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg0LFxuICAgICAgICA5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMixcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MixcbiAgICAgICAgMjksXG4gICAgICAgIDg0LFxuICAgICAgICA1OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDgsXG4gICAgICAgIDY5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDY0LFxuICAgICAgICA0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2LFxuICAgICAgICA0MixcbiAgICAgICAgMTM4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYyLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInRkZHRIUXU3NUQ5TnVSMENLeUhWbjhLdFhESVo2ZVQvYUpSd1k5VFZWZGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjAxOTYzMTMxNjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM1RDdDRDkzQUZCOTMxQjI4RUM5RkI1OURENUFFMTNDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDY1MTIzNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5c2c1OThNMVRJYVQ1ajZrSEo0NTZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjI4ZDNmZWFmLWRiOGQtNDNjNS1iMTc0LTgxMDdkYTY0MzM3MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTUsXG4gICAgICAxMDMsXG4gICAgICAyMDYsXG4gICAgICAyMzksXG4gICAgICAxMjUsXG4gICAgICA0NixcbiAgICAgIDU5LFxuICAgICAgNDUsXG4gICAgICA1LFxuICAgICAgMTQ5LFxuICAgICAgMTkyLFxuICAgICAgNTcsXG4gICAgICAyNTUsXG4gICAgICA5NSxcbiAgICAgIDEwNixcbiAgICAgIDM1LFxuICAgICAgNzcsXG4gICAgICA4LFxuICAgICAgMTgzLFxuICAgICAgMjE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MCxcbiAgICAgIDI0OCxcbiAgICAgIDYzLFxuICAgICAgNDksXG4gICAgICA0MCxcbiAgICAgIDE4LFxuICAgICAgMjAxLFxuICAgICAgMjM1LFxuICAgICAgMjIwLFxuICAgICAgMjE2LFxuICAgICAgMTMzLFxuICAgICAgMTA0LFxuICAgICAgMTksXG4gICAgICAyMjgsXG4gICAgICAxMjgsXG4gICAgICA0NyxcbiAgICAgIDEwLFxuICAgICAgNTMsXG4gICAgICAxMjUsXG4gICAgICAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhCSFo0RDVEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI2MDE5NjMxMzE2MzoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc0NTEzMTk1MTAyMzM1OjE0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkh1aHVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJT01qTE1IRU52SW5ya0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJGOEVLd1pPUnk2UHFQWHpKMU9pUzBoWTJBTk1YM0gyekhBVGlyZXZVRHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOHIxVXcwYmo5L2x0Q1MzUWZGSzRnWVlJbEpZNUI3N29JZFdZdFJuSFAzS1pqWmxMOTJERFJnRkJOYXR6UVhMYzl3cURUVGlHWW93bG1qb2o0VEQ0REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUlJabVJFZFluVHhhNDk4Q1ZpSFc0YTY5QVVGQThzMHFGbDY1ZSs0MU5kZmt5eG1MeW15UlZJOEFvcjdYRGZzRDVsRmZENFM5QkwwbzczdnFVTmxxZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNjAxOTYzMTMxNjM6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDY1MTIzMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUN4RVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ3hFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTFFCT2wxZGQ3NmppNlhVSTRxTnBwejlMTXNnVEhYL1huWTdyZ05WNTBhYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTg2MjAxMDkxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA2NTEyMzQ3MzdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Earlstore"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
