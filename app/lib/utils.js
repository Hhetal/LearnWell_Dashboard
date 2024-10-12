// import mongoose from "mongoose";

// const connection = {};

// export const connectToDB = async () => {
  

//   try {
//     if (connection.isConnected) return;

//     const db = await mongoose.connect(process.env.MONGO);
//     connection.isConnected = db.connections[0].readyState;
//   } catch (error) {
//     console.log(error)
//     throw new Error(error);
//   }
// };

import mongoose from "mongoose";

const connection = {}; // Keep connection state outside

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return; // Return if already connected

    const db = await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState; // Update connection state
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error("Failed to connect to the database");
  }
};

