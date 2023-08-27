
import express from 'express';
import { AcademicSemesterController } from './academicSemster.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemster.validation';
const router = express.Router();


router.get("/", AcademicSemesterController.getAllFromDB)
router.get('/:id', AcademicSemesterController.getDataById)
router.post(
    '/', 
    validateRequest(AcademicSemesterValidation.create),
    AcademicSemesterController.insertionIntoDB)

export const AcademicSemesterRoutes = router;