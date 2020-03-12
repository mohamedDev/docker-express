import User from './user.model';
import { Request, Response } from 'express';

import { UploadFile } from '../uploadFile';

export class UsersController {

  public create(req: Request, res: Response) {
    let newUser = new User(req.body);

    newUser.save((err: Error, UserSaved) => {
      if (err) {
        res.send(err)
      }
      res.json(UserSaved)
    })
  }

  public index(req: Request, res: Response) {
    User.find({}, (err: Error, Users) => {
      if (err) {
        res.send(err);
      }
      res.json(Users);
    });
  }

  public show(req: Request, res: Response) {
    User.findById(req.params.id, (err: Error, Users) => {
      if (err) {
        res.send(err);
      }
      res.json(Users);
    });
  }

  public update(req: Request, res: Response) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, User) => {
      if (err) {
        res.send(err);
      }
      res.json(User);
    });
  }

  public delete(req: Request, res: Response): void {
    User.remove({ _id: req.params.id }, (err: Error) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Successfully deleted User!' });
    });
  }

  public uploadPhoto(req: Request, res: Response) {

    let upload = new UploadFile('file', 'image/png', 'upload-from-app', 'test.png', 520);
    upload.savefiles(req, res);

  }
}
