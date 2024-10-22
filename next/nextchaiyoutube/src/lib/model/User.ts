import mongoose, { Schema, Document } from "mongoose";

export interface Massage extends Document {
    content: string;
    createdAt: Date;
}

const massageSchema: Schema<Massage> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export interface User extends Document {
    userName: string;
    email: string;
    password: string;
    verifyCode: string;
    isVerified: boolean;
    verifyCodeExpiry: Date;
    isAcceptingMessage: boolean;
    massages: Massage[];
}

const userSchema: Schema<User> = new Schema({
    userName: {
        type: String,
        required: [true, "Required"],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    verifyCode: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    },
    verifyCodeExpiry: {
        type: Date,
        required: true
    },
    isAcceptingMessage: {
        type: Boolean,
        required: true,
        default: true
    },
    massages: {
        type: [massageSchema],
        required: true
    }
});

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", userSchema);
export default UserModel;