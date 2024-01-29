import { Model, Schema, model } from 'mongoose';
import { IBlog } from './blog.interface';

type BlogModel = Model<IBlog, Record<string, unknown>>;

const BlogSchema = new Schema<IBlog>(
  {
    userId: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Blog = model<IBlog, BlogModel>('Blog', BlogSchema);
