import { Schema, model } from "mongoose";

export interface IResource {
  title: string;
  description?: string;
  category: "Electronics" | "Books" | "Tools" | "Other";
  ownerName: string;
  pricePerDay: number;
  isAvailable: boolean;
}

const resourceSchema = new Schema<IResource>(
  {
    title: { type: String, required: true },
    description: { type: String },
    category: {
      type: String,
      enum: ["Electronics", "Books", "Tools", "Other"],
      default: "Other",
    },
    ownerName: { type: String, required: true },
    pricePerDay: { type: Number, default: 0 },
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export const Resource = model<IResource>("Resource", resourceSchema);
