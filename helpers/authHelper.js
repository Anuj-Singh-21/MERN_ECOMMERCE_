import bcrypt from "bcrypt";
import Color from "colors";

export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashed = await bcrypt.hash(password, saltRounds);
    return hashed;
  } catch (error) {
    console.log(`Error Occured in /helper/authHelper.js ${error}`.bgRed.white);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
