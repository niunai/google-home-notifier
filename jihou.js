const moment = require("moment")
const googlehome = require('./google-home-notifier')
const language = 'ja'

googlehome.device('Google-Home-Mini', language)
//googlehome.ip('10.15.8.126', language)

googlehome.notify(moment().hours() + '時です', function(res) {
  console.log(res)
})
