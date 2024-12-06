const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(`mongodb+srv://utkarshgarg0903:pgpjuly@cluster0.s1kz7.mongodb.net/post`);
    console.log(`MongoDB Connected !! DB Host ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MOngodB connection error", error);
    process.exit(1);
  }
};

module.exports = connectDb;

// const addData = () => {
//   // const student1 = new students({   //adding new object to instance object
//   //     name: "Utkarsh",
//   //     age: 25,
//   //     email: "utkarshgarg871@gmail.com"
//   // })
//   // student1.save();     //to save the data
//   students.create({
//     //one more way to create data.
//     name: "Rahul",
//     age: 26,
//     email: "rahuldhingra@gmail.com",
//   });
// };

// addData();
