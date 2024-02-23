import { Schema, model } from "mongoose";
import { type IUser } from "./user";

export interface IExternalLink extends Document {
  type: string;
  value: string;
  verified?: Date;
  userRef: IUser;
}

export const externalLinkSchema = new Schema<IExternalLink>({
  type: {
    type: String,
    enum: ["email", "phone", "github"],
  },
  value: {
    type: String,
    required: true,
  },
  verified: {
    type: Date,
  },
  userRef: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const ExternalLink = model("ExternalLink", externalLinkSchema);
