import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
  statuss: {
    type: String,
    required: true,
  },
  relay: {
    type: String,
    required: true,
    enum: ['ON', 'OFF'],
  },
  medium: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  }
});

// 👇 Forces mongoose to use exact collection name: 'upload'
const DataModel = mongoose.models.upload || mongoose.model('upload', dataSchema, 'upload');

export default DataModel;
