import { Request } from 'express'
import multer, { FileFilterCallback } from 'multer'

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

const fileStorage = multer.diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb: DestinationCallback) {
    cb(null, "./src/public/images");
  },
  filename: function (req: Request, file: Express.Multer.File, cb: FileNameCallback) {
    const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "_" + uniqueSuffix + "." + file.mimetype.split("/")[1]);
  },
});

const fileFilter = (
  request: Request,
  file: Express.Multer.File,
  callback: FileFilterCallback
): void => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    callback(null, true)
  } else {
    callback(null, false)
  }
}
const limit = {
  fileSize: 5 * 1024 * 1024,
};
export {
  fileStorage, fileFilter, limit
}