import { Date, Document, Schema, model } from "mongoose";
import { type IUser } from "./user";
import { type IComment } from "./comment";

export interface IPost extends Document {
  uuid: string;
  title: string;
  content: string;
  author: IUser;
  createdAt: Date;
  tags: string[];
  upvotes: IUser[];
  downvotes: IUser[];
  comments: IComment[];
}

export const postSchema = new Schema<IPost>({
  uuid: {
    type: String,
    index: true,
    unique: true,
    required: true,
    lowercase: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  tags: {
    type: [String],
    required: true,
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
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

export const Post = model("Post", postSchema);
