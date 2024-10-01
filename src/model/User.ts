import mongoose from "mongoose";

export interface IUser {
  username: string;
  password: string;
  email: string;
  metaAddress: string;
  signature: string;
  friends: [mongoose.Types.ObjectId];
  blogs: [mongoose.Types.ObjectId];
  likes: [mongoose.Types.ObjectId];
  comments: [mongoose.Types.ObjectId];
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
    },
    metaAddress: {
      type: String,
    },
    signature: {
      type: String,
    },
    friends: [
      {
        ref: "User",
        type: mongoose.Types.ObjectId,
      },
    ],
    blogs: [
      {
        ref: "Blog",
        type: mongoose.Types.ObjectId,
      },
    ],
    likes: [
      {
        ref: "Blog",
        type: mongoose.Types.ObjectId,
      },
    ],
    comments: [
      {
        ref: "Comment",
        type: mongoose.Types.ObjectId,
      },
    ],
  },
  { timestamps: true }
);

let UserModel: mongoose.Model<IUser>;

try {
  // Try to retrieve an existing model
  UserModel = mongoose.model<IUser>("User");
} catch (e) {
  // If the model doesn't exist, define it
  UserModel = mongoose.model<IUser>("User", UserSchema);
}

export const User = UserModel;
