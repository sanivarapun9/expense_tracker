// src/services/authService.js

const bcrypt = require("bcryptjs");
const userRepository = require("../repositories/userRepository");
const { generateToken } = require("../../../shared/utils/jwt");

const register = async (data) => {
    const existingUser =
        await userRepository.findByEmail(data.email);

    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword =
        await bcrypt.hash(data.password, 10);

    const user =
        await userRepository.createUser({
            fullName: data.fullName,
            email: data.email,
            password: hashedPassword
        });

    return {
        id: user.id,
        fullName: user.fullName,
        email: user.email
    };
};


const login = async (
    email,
    password
) => {

    const user =
        await userRepository.findByEmail(
            email
        );

    if (!user) {
        throw new Error(
            "Invalid Credentials"
        );
    }

    const isValid =
        await bcrypt.compare(
            password,
            user.password
        );

    if (!isValid) {
        throw new Error(
            "Invalid Credentials"
        );
    }

    const token =
        generateToken(user);

    return {
        token
    };
};

module.exports = {
    register,
    login
};
