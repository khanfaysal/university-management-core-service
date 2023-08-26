import { AcademicSemester } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemesterService } from './academicSemester.service';
import pick from '../../../shared/pick';

const insertionIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterService.insertIntoDB(req.body);
  sendResponse<AcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester Created!',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {

    // filter and pagination data will be separated 

    const filters = pick(req.query, ['searchTerm', 'code', 'startMonth', 'endMonth']);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);


    const result = await AcademicSemesterService.getAllFromDB(filters, options);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic Semester data fetched!',
        meta: result.meta,
        data: result.data,
      });
})

export const AcademicSemesterController = {
  insertionIntoDB,
  getAllFromDB
};


