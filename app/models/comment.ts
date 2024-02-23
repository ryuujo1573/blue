import { Date, Document, Schema, model } from "mongoose";
import { type IPost } from "./post";
import { type IUser } from "./user";

export interface IComment extends Document {
  uuid: string;
  content: string;
  author: IUser;
  replyTo: IPost | IComment;
  createdAt: Date;
  updatedAt: Date;
  upvotes: IUser[];
  downvotes: IUser[];
}

export const commentSchema = new Schema<IComment>({
  uuid: {
    type: String,
    index: true,
    unique: true,
    required: true,
    lowercase: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  replyTo: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: false,
  },
  upvotes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  downvotes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export const Comment = model("Comment", commentSchema);
