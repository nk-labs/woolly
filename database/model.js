const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs')
var pwhash;


// Create database woolly
const sequelize = new Sequelize('woolly','root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});



// Create  members table
const Member = sequelize.define('member', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING, 
    allowNull: false,
    unique: true,
    set: function(val) {
      let salt = bcrypt.genSaltSync(10);
      pwhash = bcrypt.hashSync(val, salt);
      this.setDataValue('password', pwhash);
    }
  } 

})

Member.sync()
module.exports = Member

