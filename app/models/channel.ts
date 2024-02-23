import { Date, Schema, model } from "mongoose";
import { type IUser } from "./user";

export interface IChannel extends Document {
  cid: string;
  title: string;
  desc: string;
  owner: IUser;
  createAt: Date;
  bookmarks: string[]; // todo: model/bookmark
}

export const channelSchema = new Schema({
  cid: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createAt: { type: Date, required: true },
  bookmarks: { type: [String], required: true },
});

export const Channel = model<IChannel>("Channel", channelSchema);
