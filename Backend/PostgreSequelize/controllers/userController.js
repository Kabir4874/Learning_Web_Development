import { UserModel } from "../postgres/postgres.js";

export const getAllEmp = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    if (users.length === 0) {
      return res.status(404).json({ error: "Users not found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const addEmp = async (req, res) => {
  const { name, email, designation, empId } = req.body;

  if (!name || !email || !designation || !empId) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const emp = await UserModel.findOne({ where: { empId } });
    if (emp) {
      return res.status(409).json({ message: "Employee already exists" });
    } else {
      await UserModel.create({
        name,
        email,
        designation,
        empId,
      });
      return res.status(201).json({ message: "Employee added successfully" });
    }
  } catch (error) {
    console.error("Error adding employee:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateEmp = async (req, res) => {
  const { empId } = req.params;
  const { name, email, designation } = req.body;
  try {
    const emp = await UserModel.findOne({ where: { empId } });

    if (!emp) {
      return res.status(404).json({ message: "Employee not found" });
    }
    const [updated] = await UserModel.update(
      { name, email, designation },
      { where: { empId } }
    );
    if (updated) {
      const updatedEmp = await UserModel.findOne({ where: { empId } });
      return res
        .status(200)
        .json({ message: "Employee updated successfully", updatedEmp });
    } else {
      return res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    console.error("Error updating employee:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteEmp = async (req, res) => {
  const { empId } = req.params;
  try {
    const emp = await UserModel.findOne({ where: { empId } });

    if (!emp) {
      return res.status(404).json({ message: "Employee not found" });
    }
    await UserModel.destroy({ where: { empId } });
    return res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.error("Error deleting employee:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
