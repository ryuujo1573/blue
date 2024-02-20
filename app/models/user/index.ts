import { Date, Document, Schema, model } from "mongoose";

export interface IExternalLink extends Document {
  type: "email" | "phone";
  value: string;
  verified?: Date;
  uid: string;
}

export interface IUser extends Document {
  uid: string;
  cred: string;
  avatar: string;
  links: IExternalLink[];
  invitedBy: string;
}

export const User = model(
  "User",
  new Schema<IUser>({
    uid: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      min: 3,
    },
    avatar: {
      type: String,
      unique: true,
      required: true,
    },
    cred: {
      type: String,
      required: true,
    },
    invitedBy: {
      type: String,
      required: true,
    },
    links: [
      {
        type: Schema.Types.ObjectId,
        ref: "ExternalLink",
      },
    ],
  })
);

export const ExternalLink = model(
  "ExternalLink",
  new Schema<IExternalLink>({
    type: {
      type: String,
      enum: ["email", "phone"],
    },
    value: {
      type: String,
      required: true,
    },
    verified: {
      type: Date,
    },
  })
);
