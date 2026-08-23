/* eslint-disable no-undef */
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  const uri = process.env.DATABASE_URI;
  if (!uri) {
    if (process.env.NODE_ENV === 'test') {
      console.warn('Skipping MongoDB connection in test environment');
      return;
    }
    console.error('DATABASE_URI is not defined');
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
