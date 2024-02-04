import mongoose, { Document, Schema } from 'mongoose';

export interface Tenant extends Document {
  name: string;
  databaseCode: string;
}

const TenantSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  databaseCode: {
    type: String,
    required: true,
    unique: true,
  },
});

const TenantModel = mongoose.model<Tenant>('Tenant', TenantSchema);

export default TenantModel;
