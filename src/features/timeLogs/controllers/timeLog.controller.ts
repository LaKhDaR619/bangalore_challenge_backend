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
    const { AddTimeLogtDTO } = req.body;

    await TimeLogService.addTimeLog(AddTimeLogtDTO);

    res.sendStatus(201);
  }
}
export default TimeLogsController;
