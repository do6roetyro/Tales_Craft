import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

// Определение интерфейса для документа пользователя
export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    comaprePassword: (candidatePassword: string) => Promise<boolean>; 
}

// Создание схемы для пользователя
const userSchema: Schema<IUser> = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

// Pre-save middleware для хэширования пароля
userSchema.pre<IUser>('save', async function(next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(12);
        this.password = await bcrypt.hash(this.password, salt)
    }
    next();
})

// Метод для сравнения паролей (необязательно)
userSchema.methods.comaprePassword = async function(candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
};

// Создание модели пользователя
const User = mongoose.model<IUser>('User', userSchema);

export default User;