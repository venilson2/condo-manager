import { Request, Response } from 'express';
import TenantService from '../service/tenant.service';

class TenantController {
  async createTenant(req: Request, res: Response): Promise<void> {
    try {
      const { name, databaseCode } = req.body;
      const newTenant = await TenantService.createTenant(name, databaseCode);
      res.status(201).json(newTenant);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating the Tenant.');
    }
  }

  async getAllTenants(req: Request, res: Response): Promise<void> {
    try {
      const tenants = await TenantService.getAllTenants();
      res.status(200).json(tenants);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error getting the list of Tenants.');
    }
  }

  async getTenantById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const tenant = await TenantService.getTenantById(id);
      if (tenant) {
        res.status(200).json(tenant);
      } else {
        res.status(404).send('Tenant not found.');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error getting the Tenant.');
    }
  }

  async updateTenant(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { name, databaseCode } = req.body;
      const updatedTenant = await TenantService.updateTenant(id, name, databaseCode);
      if (updatedTenant) {
        res.status(200).json(updatedTenant);
      } else {
        res.status(404).send('Tenant not found.');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error updating the Tenant.');
    }
  }

  async deleteTenant(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deletedTenant = await TenantService.deleteTenant(id);
      if (deletedTenant) {
        res.status(200).json(deletedTenant);
      } else {
        res.status(404).send('Tenant not found.');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting the Tenant.');
    }
  }
}

export default new TenantController();
