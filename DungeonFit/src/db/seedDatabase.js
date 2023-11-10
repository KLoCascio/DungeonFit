import mongoose from 'mongoose';

mongoose
  .connect('mongodb://127.0.0.1:27017/DungeonFitDatabase')
  .then(() => {
    console.log('Successfully connected to MongoDB.');
  })
  .catch(e => {
    console.error('Connection error', e.message);
  });

const db = mongoose.connection;
export default db;