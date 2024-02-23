import { Document, Schema, model } from "mongoose";
import { type IPost } from "./post";
import { type IExternalLink, externalLinkSchema } from "./external-link";

export interface IUser extends Document {
  _id: number;
  uid: string;
  cred: string;
  avatar: string;
  joinTime: Date;
  links: IExternalLink[];
  invitedBy?: string;
  posts: IPost[];
}

export const userSchema = new Schema<IUser>({
  _id: {
    type: Number,
    unique: true,
    required: true,
    regex: /^[1-9][0-9]{4,9}$/,
  },
  uid: {
    type: String,
    unique: true,
    required: true,
    regex: /^[a-zA-Z0-9-_]{3,}$/,
  },
  avatar: {
    type: String,
    unique: true,
    required: true,
  },
  joinTime: {
    type: Date,
    required: true,
    default: Date.now,
  },
  cred: {
    type: String,
    required: true,
  },
  invitedBy: {
    type: String,
    required: false,
  },
  links: [externalLinkSchema],
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

export const User = model("User", userSchema);
