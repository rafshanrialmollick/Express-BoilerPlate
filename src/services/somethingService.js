import StudentRepository from "../repository/SomethingRepository.js";
import ApiError from "../utils/ApiError.js";

const createStudent = (studentInfo) => StudentRepository.create(studentInfo);

const getAllStudents = () => StudentRepository.findAll();

const getStudentById = async (id) => {
  const student = await StudentRepository.findById(id);
  if (!student) throw new ApiError(404, "Student not found");
  return student;
};

const updateStudent = async (id, data) => {
  const student = await StudentRepository.updateById(id, data);
  if (!student) throw new ApiError(404, "Student not found");
  return student;
};

const deleteStudent = async (id) => {
  const student = await StudentRepository.deleteById(id);
  if (!student) throw new ApiError(404, "Student not found");
  return student;
};

export default {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
