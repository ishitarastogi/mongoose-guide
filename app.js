const mongoose=require('mongoose');
const User = require('./User');
mongoose.connect('');

run()
async function run(){
    const user=await User.create({name:"Ishita",age:26}) //create new user and save data
// const user=new User({name:"ishita",age:23}) create new user ,stored locally
// await user.save() //it will save data to mongoose and return a promise
console.log(user)
}