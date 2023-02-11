import { Document, model, Model, Schema } from 'npm:mongoose';

export interface User extends Document {
   /**
   * The user's ID
   */
    _id: string;
  /**
   * The user's Username
   */
   username: string;
     /**
   * The user's email
   */
   email: string;
     /**
   * The user's Username
   */
   password: string;
   /**
   * The user's roles
   */
   roles: {
    admin: boolean;
    staff: boolean;
    dev: boolean;
   }
   /**
   * The users comments
   */
   balance: number;
   /**
   * The avatar comments
   */
   avatarURL: string;

   blacklisted: {
    status: boolean;
    reason?: string | null;
  };

  ips: String[];
}

const userSchema: Schema = new Schema({
    _id: String,
    username: String,
    email: String,
    password: String,
    balance: Number,
    roles: {
        premium: {
          status: {type: Boolean, default: false},
          endsAt: {type: Number, default: -1},
        },
        admin: {
          type: Boolean,
          default: false,
        },
        staff: {
          type: Boolean,
          default: false,
        },
        dev: {
            type: Boolean,
            default: false,
          },
      },
      ips: [{
        ip: String,
      }],
    avatarURL: String,
    blacklisted: {
        status: {type: Boolean, default: false},
        reason: {
          type: String,
          required: false,
        },
    },
});

type UserModel = Model<User & Document, {}>;
export const User: UserModel = model<User & Document>('User', userSchema);
