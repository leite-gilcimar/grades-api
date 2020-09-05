import mongoose from "mongoose";
import gradeSchema from "./gradeModel.js";

const db = {};
db.url = process.env.MONGODB;
db.mongoose = mongoose;
db.grade = gradeSchema(mongoose);

export { db };
