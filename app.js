const mongoose = require("mongoose");
const User = require("./User");
require("dotenv").config();

mongoose.connect(process.env.URL);

run();
async function run() {
  try {
    const user = await User.create({
      name: "Ishita",
      age: 22,
      email: "abc@abc.com",
      hobbies: ["writing", "music"],
      address: {
        street: "tilak marg",
      },
    });
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
  //create new user and save data
  // const user=new    User({name:"ishita",age:23}) create new user ,stored locally
  // await user.save() //it will save data to mongoose and return a promise
  // user.name="ishu" //update user name
  // await user.save()
}
