import mongoose from 'mongoose';

export function connectDatabase() {
  return new Promise((resolve, reject) => {
    mongoose.connect(process.env.MONGODB_URL);
    mongoose.connection
      .on('error', reject)
      .on('open', () => resolve(mongoose.connection))
      .on('close', () => console.log('🚫 Database connection closed.'));
  });
}
