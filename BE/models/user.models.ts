import mongoose, { Document, Schema } from 'mongoose'

export interface IUser {
    email: string
    password: string
    name: string
    lastLogin: Date
    isVerified: boolean
    resetPasswordToken: string
    resetPasswordExpiresAt: number
    verificationToken: string
    verificationTokenExpiresAt: number
}

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        name: { type: String, required: true },
        lastLogin: { type: Date, default: Date.now },
        isVerified: { type: Boolean, default: false },
        resetPasswordToken: String,
        resetPasswordExpiresAt: Number,
        verificationToken: String,
        verificationTokenExpiresAt: Number
    },
    {
        versionKey: false,
        timestamps: true
    }
)

export default mongoose.model<IUserModel>('User', UserSchema)
