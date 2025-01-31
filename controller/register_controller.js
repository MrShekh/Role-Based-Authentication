import bcrypt from 'bcrypt'
import user from '../models/user_models.js'

const register = async (req, res) => {
    const { name, email, password, role } = req.body
    const userExists = await user.findOne({ email })
    if (userExists) {
        
        res.status(400).json({message:"user already exists"})
        throw new Error('User already exists')
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await user.create({
        name,
        email,
        password: hashedPassword,
        role
    })
    await newUser.save()
    res.status(201).json({ message: 'User created successfully' })
}

export default register;

// sabka password 12345 hi hai chahe vo user ho ya admin 