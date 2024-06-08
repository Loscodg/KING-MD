const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("263776926048,")
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' /leo/ add your username
global.sudo = process.env.SUDO || '923096566451'
global.devs = '923096566451';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5541dfe4dc8c2f51e3f02.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'KING-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Naveed Dogar' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ014M1JlbHd1NlVPRG9vY0NzNHFuQ2s4b01QOGhqMTdDekVQbFluWjRHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicnpUR1VxZnFxZjhQWDlOcmtiYzdMbHFGbEZPRzI2cHlFQnlieGhaTEVqZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSXd5NW9pVkRsUFpDNWZyVFZEZkhrM2JFRG83Wll0Tk5qZFJ5SEpqemtZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEQit2MUlNdkFReVZ4MzFMOXBZQlRsbGgvNWEyS0RmMnljb0VZQ1pCZ3lRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJOMDU1L3BvS3JoSGNrMDZpTnErY0pZUDZUanJsNzVzbksvTGpSREpNazQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpiRWJsUC9IaXp4WDFBSWtlejQ2NkwvemQvMUp0dks2eDFseHNSZThvRjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUZ2bWxZRXJlU0hNT0o2ckQ2U1dqUjlDbjdQMlBUNFFMSERtbCtoSjlYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0g5NHNXVkdhOFdRc2VzZitmMmFiRDVzVTFkUFlDNE5Eb3BoMm5KSDFHZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkROYjdaN3JoOHg0cFVqUldBeVV2S01LMmVyQTRRNUoyRXpBcjdJVkVKejZDdTlUL3NCS3VCa3RXRFREeXhZTmFKZ2FLWCthbzl1Tm9qUjJGL013YmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NSwiYWR2U2VjcmV0S2V5IjoiYjdHOWZncmNpQmNJN0RrWEQzWGovTGdxb0FVTVgzbnNWTFhhaUMvU0o2Yz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3NzY5MjYwNDhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNzlEQzdCNUM1OTREOEExRkNFMUVEQzhCNEYwMjVCQ0MifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNzgwNDY5N30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzc2OTI2MDQ4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkEwRDlBNDdBQUYyQzYxREQ5MUJFODdFOTU3OTREOTc5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTc4MDQ2OTh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkZOTkNkZDlIUWg2RWxqT3FoWllOZHciLCJwaG9uZUlkIjoiMWRiYzRhZmUtNTA4NC00N2M3LTg1Y2ItNGIzMzg4ZWQ1NThlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlUZk40WUcwOVhwZnRNcDIwbHF6bkRxMW95RT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRMXozV25zWDQ4TjhoTWtBRWxKN1YxWGI4dkk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiS1dMRTVSVlgiLCJtZSI6eyJpZCI6IjI2Mzc3NjkyNjA0ODo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkxlbyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSStpNzYwSEVJaTlqck1HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYmgvNlVyYVBZU2VuTXdSWExZRVVyY2wzbjd2Tmo3QnQ2azFUcWJ2c2pqTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidEF2R3dXb0ZYN3ZBOWpmbFdrVFB3bFpQcWN0NzF5M0xwRXh1YkdENXh4MHpmdk90cklrRzJRRDk0MWlGeU5QTFdTcUt0QXBWMGpucmtodVRHQWQ4RHc9PSIsImRldmljZVNpZ25hdHVyZSI6IjNKanl6ZzY2NThtdnQvTkNUTjlYL2xCc2MzNVVQM1ZIVzNCUkR0Qkc4d2dOK2w5SVYxTWwraktjNHBLZmg2cXhDcFN6Z3VzUlRtL3paemZjem93WGpRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzc2OTI2MDQ4OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVzRmK2xLMmoyRW5wek1FVnkyQkZLM0pkNSs3elkrd2JlcE5VNm03N0k0eiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNzgwNDY5NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJUG0ifQ==
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
