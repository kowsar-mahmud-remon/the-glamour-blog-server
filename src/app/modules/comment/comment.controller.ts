import { Request, Response } from 'express';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IComment } from './comment.interface';
import { CommentService } from './comment.service';

const createComment = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await CommentService.createComment(data);

  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: true,
    message: 'Comment created successfully!',
    data: result,
  });
});

const getAllComments = catchAsync(async (req: Request, res: Response) => {
  const allComments = await CommentService.getAllComments();

  if (!allComments) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to get Comments');
  }

  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: true,
    message: 'Comments fetched successfully !',
    data: allComments,
  });
});

const getSingleComment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const singleComment = await CommentService.getSingleComment(id);

  if (!singleComment) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to get Comment');
  }

  sendResponse<IComment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Comment fetched successfully !',
    data: singleComment,
  });
});

const updateComment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const updatedComment = await CommentService.updateComment(id, updatedData);

  if (!updatedComment) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to Update Comment');
  }

  sendResponse<IComment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Comment updated successfully !',
    data: updatedComment,
  });
});

const deleteComment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const deletedComment = await CommentService.deleteComment(id);

  if (!deletedComment) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to delete Comment');
  }

  sendResponse<IComment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Comment deleted successfully !',
    data: deletedComment,
  });
});

export const CommentController = {
  createComment,
  getAllComments,
  getSingleComment,
  updateComment,
  deleteComment,
};
