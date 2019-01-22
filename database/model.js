const sequelize = require('./db.js');
const Sequelize = require('sequelize');



console.log('uuuuuuuu')
// table members
const Member = sequelize.define('member', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {type: Sequelize.STRING, allowNull: false}

})



Member.sync({force: true}).then(() => {
  // Table created
  return Member.create({
    username: 'John',
    password: 'Hancock'
  });
});

Member.create({username:'Naassa', password:"weewewe23i3u3"})
.then(membr => {
  console.log('uuuuuuuu')
  console.log(membr.get('username'))
})