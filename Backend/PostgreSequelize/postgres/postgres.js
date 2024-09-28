import { Sequelize } from "sequelize";
import { createUserModel } from "../models/userSchema.js";

const sequelize = new Sequelize("postgres", "postgres", "158224", {
  host: "localhost",
  dialect: "postgres",
});

const UserModel = createUserModel(sequelize);

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync();
    console.log("Database synced.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { connection, UserModel };
