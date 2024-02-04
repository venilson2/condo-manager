import TenantModel, { Tenant } from '../model/tenant.model';

class TenantRepository {
  async createTenant(name: string, databaseCode: string): Promise<Tenant> {
    const newTenant = new TenantModel({ name, databaseCode });
    return await newTenant.save();
  }

  async getAllTenants(): Promise<Tenant[]> {
    return await TenantModel.find();
  }

  async getTenantById(id: string): Promise<Tenant | null> {
    return await TenantModel.findById(id);
  }

  async updateTenant(id: string, name: string, databaseCode: string): Promise<Tenant | null> {
    return await TenantModel.findByIdAndUpdate(id, { name, databaseCode }, { new: true });
  }

  async deleteTenant(id: string): Promise<Tenant | null> {
    return await TenantModel.findByIdAndDelete(id);
  }
}

export default new TenantRepository();
