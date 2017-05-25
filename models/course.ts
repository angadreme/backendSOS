import * as mongoose from 'mongoose';

export interface Course extends mongoose.Document {
  name: string;
  isDisabled: boolean;
  icon: string;
}

let courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  isDisabled: Boolean,
  icon: String
});

export default mongoose.model<Course>('Course', courseSchema);
