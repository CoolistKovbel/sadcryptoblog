import mongoose from "mongoose";

export interface IBlog {}

const BlogSchema = new mongoose.Schema<IBlog>(
  {},
  {
    timestamps: true,
  }
);

let BlogModel: mongoose.Model<IBlog>;

try {
  // Try to retrieve an existing model
  BlogModel = mongoose.model<IBlog>("Blog");
} catch (e) {
  // If the model doesn't exist, define it
  BlogModel = mongoose.model<IBlog>("Blog", BlogSchema);
}

export const Blog = BlogModel;
