import mongoose, { Document, Schema } from 'mongoose';

export interface User extends Document {
  username: string;
  password: string;
  roles: string[];
}

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [{
    type: String,
    enum: ['admin', 'user'],
    default: ['user'],
  }],
});

const UserModel = mongoose.model<User>('User', UserSchema);

export default UserModel;
