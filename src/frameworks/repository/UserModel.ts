import { model, Schema } from 'mongoose';

interface IUserRepository {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUserRepository>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  updatedAt: { type: Date },
});

const UserModel = model('users', UserSchema);
export default UserModel;
