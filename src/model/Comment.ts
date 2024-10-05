import mongoose from "mongoose";

export interface IComment {
 
}

const CommentSchema = new mongoose.Schema<IComment>(
  {
    
  },
  { timestamps: true }
);

let CommentModel: mongoose.Model<IComment>;

try {
  // Try to retrieve an existing model
  CommentModel = mongoose.model<IComment>("Comment");
} catch (e) {
  // If the model doesn't exist, define it
  CommentModel = mongoose.model<IComment>("Comment", CommentSchema);
}

export const Comment = CommentModel;
