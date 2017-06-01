import * as mongoose from 'mongoose';

interface Question extends mongoose.Document{
  qTitle: string;
  qContent: string;
  qDate: string;
  userID: string;
  lessonID: string;
  clickCount: number;
}

let questionSchema = new mongoose.Schema({
  qTitle: {
    type: String,
    required: true
  },
  qDate: {
    type: Date,
    required: true
  },
  userID: {
    type: String
  },
  lessonID: {
    type: String,
    required: true
  },
  qContent: String,
  clickCount: Number
});

export default mongoose.model<Question>('Question', questionSchema);
