import Student from "../model/some.js";

const create = (studentInfo) => Student.create(studentInfo);
const findAll = (filter = {}) => Student.find(filter);
const findById = (id) => Student.findById(id);
const updateById = (id, data) =>
  Student.findByIdAndUpdate(id, data, { new: true, runValidators: true });
const deleteById = (id) => Student.findByIdAndDelete(id);

export default {
  create,
  findAll,
  findById,
  updateById,
  deleteById,
};
