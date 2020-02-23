
import * as mongoose from 'mongoose';
import User from './user.interface';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  }
})

const User = mongoose.model<User & mongoose.Document>('User', UserSchema);

export { UserSchema };

export default User;
