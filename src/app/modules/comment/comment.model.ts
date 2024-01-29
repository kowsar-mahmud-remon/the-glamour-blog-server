import { Model, Schema, model } from 'mongoose';
import { IComment } from './comment.interface';

type CommentModel = Model<IComment, Record<string, unknown>>;

const CommentSchema = new Schema<IComment>(
  {
    blogId: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
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

export const Comment = model<IComment, CommentModel>('Comment', CommentSchema);
