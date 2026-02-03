import { Resource, IResource } from "../models/resource.model.js";
import { SortOrder } from "mongoose";
import { Filter } from "mongodb";

export class ResourceRepository {
  async getAll(
    filter: Filter<IResource>,
    sort: Record<string, SortOrder>,
    skip: number,
    limit: number,
  ) {
    return await Resource.find(filter as any)
      .sort(sort)
      .skip(skip)
      .limit(limit);
  }

  async getById(id: string) {
    return await Resource.findById(id);
  }

  async create(data: Partial<IResource>) {
    return await Resource.create(data);
  }

  async update(id: string, data: Partial<IResource>) {
    return await Resource.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string) {
    return await Resource.findByIdAndDelete(id);
  }

  async count(filter: Filter<IResource>) {
    return await Resource.countDocuments(filter as any);
  }
}
