import mongoose from 'mongoose';

const dataSchema2 = new mongoose.Schema({
  button: {
    type: String,
    required: true,
  },
});

// 👇 Forces mongoose to use exact collection name: 'upload'
const DataModel2 = mongoose.models.dataas || mongoose.model('dataas', dataSchema2, 'dataas');

export default DataModel2;
