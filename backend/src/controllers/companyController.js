import Company from "../models/Company.js";

export const getCompanies = async (req, res) => {
  try {
    const filters = {};

    if (req.query.industry) {
      filters.industry = { $regex: new RegExp(req.query.industry, "i") };
    }
    if (req.query.location) {
      filters.location = { $regex: new RegExp(req.query.location, "i") };
    }
    if (req.query.tech) {
      filters.techStack = { $regex: new RegExp(req.query.tech, "i") };
    }

    const companies = await Company.find(filters).sort({ name: 1 }).limit(150);
    res.status(200).json(companies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
export const getCompanyById = async (req, res) => {};
export const createCompany = async (req, res) => {};
export const updateCompany = async (req, res) => {};
export const deleteCompany = async (req, res) => {};
