// src/modules/tenant/service/tenant.service.ts

import TenantRepository from '../repository/tenant.repository';
import { Tenant } from '../model/tenant.model';

class TenantService {
  async createTenant(name: string, databaseCode: string): Promise<Tenant> {
    const newTenant = await TenantRepository.createTenant(name, databaseCode);
    return newTenant;
  }

  async getAllTenants(): Promise<Tenant[]> {
    return await TenantRepository.getAllTenants();
  }

  async getTenantById(id: string): Promise<Tenant | null> {
    return await TenantRepository.getTenantById(id);
  }

  async updateTenant(id: string, name: string, databaseCode: string): Promise<Tenant | null> {
    return await TenantRepository.updateTenant(id, name, databaseCode);
  }

  async deleteTenant(id: string): Promise<Tenant | null> {
    return await TenantRepository.deleteTenant(id);
  }
}

export default new TenantService();