import * as mongoose from 'mongoose';

export interface Course extends mongoose.Document {
  name: string;
  Enabled: boolean;
  icon: string;
}

let courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  Enabled: {
    type: Boolean,
    default: true,
    required: true
  },
  icon: String
});

export default mongoose.model<Course>('Course', courseSchema);
