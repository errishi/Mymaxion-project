/* eslint-disable no-undef */
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.set('bufferCommands', false);

const connectDB = async () => {
  const uri = process.env.DATABASE_URI;
  if (!uri) {
    if (process.env.NODE_ENV === 'test') {
      console.warn('Skipping MongoDB connection in test environment');
      return;
    }
    console.error('DATABASE_URI is not defined. Set it in your deployment environment.');
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 15000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 15000,
      maxPoolSize: 10,
      retryWrites: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    console.error('Check that the Atlas network access allows your deployment IP and that DATABASE_URI is correct.');
    process.exit(1);
  }
};

export default connectDB;
