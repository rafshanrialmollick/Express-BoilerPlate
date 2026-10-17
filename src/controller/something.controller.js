import StudentService from "../services/somethingService.js";
import ApiResponse from "../utils/apiResponse.js";

export const createStudent = async (req, res, next) => {
  try {
    const student = await StudentService.createStudent(req.body);
    res
      .status(201)
      .json(new ApiResponse(201, student, "Student created successfully"));
  } catch (error) {
    next(error);
  }
};

export const getAllStudents = async (req, res, next) => {
  try {
    const students = await StudentService.getAllStudents();
    res
      .status(200)
      .json(new ApiResponse(200, students, "Students fetched successfully"));
  } catch (error) {
    next(error);
  }
};

export const getStudentById = async (req, res, next) => {
  try {
    const student = await StudentService.getStudentById(req.params.id);
    res
      .status(200)
      .json(new ApiResponse(200, student, "Student fetched successfully"));
  } catch (error) {
    next(error);
  }
};

export const updateStudent = async (req, res, next) => {
  try {
    const student = await StudentService.updateStudent(req.params.id, req.body);
    res
      .status(200)
      .json(new ApiResponse(200, student, "Student updated successfully"));
  } catch (error) {
    next(error);
  }
};

export const deleteStudent = async (req, res, next) => {
  try {
    await StudentService.deleteStudent(req.params.id);
    res
      .status(200)
      .json(new ApiResponse(200, null, "Student deleted successfully"));
  } catch (error) {
    next(error);
  }
};
