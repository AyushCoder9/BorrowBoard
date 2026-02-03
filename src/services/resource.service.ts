import { ResourceRepository } from "../repositories/resource.repo.js";

export class ResourceService {
  private repo = new ResourceRepository();

  async findResources(query: any) {
    const filter: any = {};

    if (query.search) filter.title = { $regex: query.search, $options: "i" };

    if (query.category) filter.category = query.category;

    const sort: any = {};
    if (query.sortBy === "price")
      sort.pricePerDay = query.order === "desc" ? -1 : 1;

    if (!query.sortBy) sort.createdAt = -1;

    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 5;
    const skip = (page - 1) * limit;

    const data = await this.repo.getAll(filter, sort, skip, limit);
    const total = await this.repo.count(filter);

    return { total, page, limit, data };
  }

  async getResourceById(id: string) {
    return await this.repo.getById(id);
  }

  async addResource(data: any) {
    if (data.pricePerDay < 0) throw new Error("Price cannot be negative");
    return await this.repo.create(data);
  }

  async updateResource(id: string, data: any) {
    if (data.pricePerDay !== undefined && data.pricePerDay < 0)
      throw new Error("Price cannot be negative");
    return await this.repo.update(id, data);
  }

  async deleteResource(id: string) {
    return await this.repo.delete(id);
  }
}
