const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="earltiktokofficial04@gmail.com"
global.location="Terengganu,korea."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_40_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzksXG4gICAgICAgIDU5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgMixcbiAgICAgICAgMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDYwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgODIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1LFxuICAgICAgICA0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTksXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIzLFxuICAgICAgICA4NyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICA4MixcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyLFxuICAgICAgICA3MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0LFxuICAgICAgICA3OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTExLFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQzLFxuICAgICAgICA1NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDUyLFxuICAgICAgICA2NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU3LFxuICAgICAgICA4MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDY1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlZGQ1gwNmRkaExnL1EzZjU4MUxSeHV3TkNDeU4wQ0lxcENZeDBLaGRRTVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjAxOTYzMTMxNjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE5MjFDMTZENzREQUUzMTZDODdBRDlGRkUxOEI0Qjg3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDY0ODQzNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjYwMTk2MzEzMTYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4OURBNzg3OTgyODVCQ0U5NjlENkI2NzUwQzVBMUM0OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA2NDg0MzdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI2MDE5NjMxMzE2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUNBNkVDMUFFNzlCQkMwN0E5MjUyRUVFOEMxOTEwRDBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNjQ4NDM4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInA2TDRtSUtWUU5PeHN2VE1kMm1vV3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGFkMTQ0YjItYjA4OC00NmVlLTg2NWYtOGFjZTM2ZTRlNmI5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OSxcbiAgICAgIDc3LFxuICAgICAgMTAxLFxuICAgICAgMyxcbiAgICAgIDEzNyxcbiAgICAgIDI4LFxuICAgICAgMTUyLFxuICAgICAgNSxcbiAgICAgIDIwNCxcbiAgICAgIDE2NSxcbiAgICAgIDIxOCxcbiAgICAgIDEyMyxcbiAgICAgIDM4LFxuICAgICAgODIsXG4gICAgICAxOTksXG4gICAgICA0NSxcbiAgICAgIDEzOSxcbiAgICAgIDE1NyxcbiAgICAgIDE2MyxcbiAgICAgIDI0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NSxcbiAgICAgIDM2LFxuICAgICAgMTQwLFxuICAgICAgMjM0LFxuICAgICAgMTgyLFxuICAgICAgMTY5LFxuICAgICAgOTAsXG4gICAgICAxMTEsXG4gICAgICAxNzksXG4gICAgICA0LFxuICAgICAgOTQsXG4gICAgICAyMTIsXG4gICAgICAyMTQsXG4gICAgICAxNDUsXG4gICAgICA0NCxcbiAgICAgIDYzLFxuICAgICAgNzAsXG4gICAgICAxNDgsXG4gICAgICAxNzUsXG4gICAgICA4M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaSkZKNUFBQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNjAxOTYzMTMxNjM6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3NDUxMzE5NTEwMjMzNToxM0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJIdWh1XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUtNakxNSEVPNnlucmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSRjhFS3daT1J5NlBxUFh6SjFPaVMwaFkyQU5NWDNIMnpIQVRpcmV2VUR3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZneFB1eDNsZG1KaHhqR1lQazdLSnF1aTFNR0NDOEw5dWxKYS9SalJwWTkvbGo0dVNROW95Nk5aQUw1OWp1aGQraytlS1UrUXlwTnN1ZDd3bzFwU0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlFPbUJNQ0xTSmxmS2dCWnZuMjRkWG9NazdoeXRnbTNQQk9nYnJHV2s5ODh5SnRwVllxc0pjR2JFUVJGcnk0ZGJVLzhzRXhNUDk4c0dUemZEYVV1dml3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjYwMTk2MzEzMTYzOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA2NDg0MzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDeENcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUN4Qy5qc29uIjogIntcImtleURhdGFcIjpcIlBRbDVLL2VEOTFXQzFGZUJURUNCSGNCK1EvbkZ1RXpYWm5ka2tFU2J6T009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk4NjIwMTA5MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwNjQ4NDM1MjY1XCJ9Igp9"  // PUT your SESSION_ID 


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
