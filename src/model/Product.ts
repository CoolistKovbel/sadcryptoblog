import mongoose from "mongoose";

export interface IProduct {}

const ProductSchema = new mongoose.Schema<IProduct>(
  {},
  {
    timestamps: true,
  }
);

let ProductModel: mongoose.Model<IProduct>;

try {
  // Try to retrieve an existing model
  ProductModel = mongoose.model<IProduct>("Product");
} catch (e) {
  // If the model doesn't exist, define it
  ProductModel = mongoose.model<IProduct>("Product", ProductSchema);
}

export const Product = ProductModel;
