import { Request, Response, Router } from 'express';
import Controller from '../../../shared/interfaces/controller.interface';
import TimeLogService from '../services/timeLog.service';

class TimeLogsController implements Controller {
  path = '/time_logs';

  route = Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes(): void {
    this.route.post('/', this.addTimeLog);
  }

  async addTimeLog(req: Request, res: Response) {
    const { AddTimeLogtDTO } = req.body;

    await TimeLogService.addTimeLog(AddTimeLogtDTO);
  }
}
export default TimeLogsController;
