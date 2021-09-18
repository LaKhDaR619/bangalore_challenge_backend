import { Express } from 'express';
import TimeLogsController from '../features/timeLogs/controllers/timeLog.controller';

import Controller from '../shared/interfaces/controller.interface';

export default (app: Express): void => {
  const controllers: Controller[] = [new TimeLogsController()];

  controllers.forEach((controller) => {
    app.use(controller.path, controller.route);
  });
};
