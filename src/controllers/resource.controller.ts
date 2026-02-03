import { Request, Response } from "express";
import { ResourceService } from "../services/resource.service.js";

export class ResourceController {
  private service = new ResourceService();

  getAll = async (req: Request, res: Response) => {
    try {
      const result = await this.service.findResources(req.query);
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };

  getById = async (req: Request, res: Response) => {
    try {
      const resource = await this.service.getResourceById(
        req.params.id as string,
      );
      if (!resource) {
        res.status(404).json({ error: "Resource not found" });
        return;
      }
      res.json(resource);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const newResource = await this.service.addResource(req.body);
      res.status(201).json(newResource);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const updatedResource = await this.service.updateResource(
        req.params.id as string,
        req.body,
      );
      if (!updatedResource) {
        res.status(404).json({ error: "Resource not found" });
        return;
      }
      res.json(updatedResource);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const deletedResource = await this.service.deleteResource(
        req.params.id as string,
      );
      if (!deletedResource) {
        res.status(404).json({ error: "Resource not found" });
        return;
      }
      res.json({ message: "Resource deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };
}
