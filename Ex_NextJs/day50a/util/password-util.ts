import bcrypt from 'bcryptjs';

const saltRounds = process.env.PASSWORD_SALT
export const hashPassword = async (password: string) => {
    return await bcrypt.hash(password, Number(saltRounds))
}

export const comparePassword = async (password: string, hashedPassword: string) => {
    return await bcrypt.compare(password, hashedPassword)
}