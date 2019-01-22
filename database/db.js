const Member = require('./model.js')
const bcrypt = require('bcryptjs')


module.exports = {
  Create: function(uname, passwd) {
    return new Promise((resolve, reject) => {
      Member.create({username:uname, password: passwd})
      .then((membr) => {
        membr.set('password',passwd)
        resolve('create')
      })
    })

  },

  Read: function(uname, plainPwd) {
    Member.find(
      {where: {username: uname}}).then((m) => {
      let dbhash = m.getDataValue('password')
      // console.log(m.getDataValue('password', 'aabc'))
      console.log(bcrypt.compareSync(plainPwd, dbhash));
    })
  },
  
  Update: function() {


  },

  Delete: function() {

  }
 }




Member.create({username:'Naassa', password:"weewewe23i3u3"})
.then((membr) => {
  // membr.setDataValue('username')
  membr.set('password', '112')
})



Member.find(
  {where: {id: 1}}).then((m) => {
  let dbhash = m.getDataValue('password')
  console.log(m.getDataValue('password', 'aabc'))
  console.log(bcrypt.compareSync("wdddewewe23i3u3", dbhash));

})


// Member.find(
//   {where: {id: 1}}).then((m) => {
//   // console.log(m.set('username', '9999'))
//   console.log(m.get('username'))
//   // console.log(m.getDataValue('username'))
// })