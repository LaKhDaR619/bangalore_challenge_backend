import { Router } from 'express';
import Controller from '../../../shared/interfaces/controller.interface';

class TimeLogsController implements Controller {
  path = '/time_logs';

  route = Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes(): void {}
}
export default TimeLogsController;
