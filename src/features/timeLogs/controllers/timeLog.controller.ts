import { Request, Response, Router } from 'express';
import validationMiddleware from '../../../middlewares/dataValidator';
import Controller from '../../../shared/interfaces/controller.interface';
import AddTimeLogDTO from '../dtos/addTimeLog';
import TimeLogService from '../services/timeLog.service';

class TimeLogsController implements Controller {
  path = '/time_logs';

  route = Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes(): void {
    this.route.post('/', validationMiddleware(AddTimeLogDTO), this.addTimeLog);
  }

  async addTimeLog(req: Request, res: Response) {
    const addTimeLogDTO: AddTimeLogDTO = req.body;

    if (addTimeLogDTO.startTime <= addTimeLogDTO.endTime) {
      return res
        .status(400)
        .json({ error: { message: 'endTime must be greater than startTime' } });
    }

    await TimeLogService.addTimeLog(addTimeLogDTO);

    res.sendStatus(201);
  }
}
export default TimeLogsController;
