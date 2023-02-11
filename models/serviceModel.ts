import { Document, model, Model, Schema } from 'npm:mongoose';

export interface Service extends Document {
    _id: string;
   title: string;
   description: {
    quality: string;
    time: string;
    refill: string;
    details: string;
   }
   ratePer: string;
   minOrder: number;
   average_time: string;
   createdAt: Date;
   updatedAt: Date;
}

const ServiceModel: Schema = new Schema({
    _id: String,
    title: String,
    description: {
        quality: String,
        time: String,
        refill: String,
        details: String,
       },
    ratePer: String,
    minOrder: Number,
    average_time: String,
    createdAt: Date,
    updatedAt: Date,
});

type ServiceModel = Model<Service & Document, {}>;
export const Service: ServiceModel = model<Service & Document>('Service', ServiceModel      );
