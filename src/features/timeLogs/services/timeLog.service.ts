import AddTimeLogtDTO from '../dtos/addTimeLog';
import TimeLog from '../models/timeLog.model';

export default class TimeLogService {
  static addTimeLog = async (addTimeLogDTO: AddTimeLogtDTO) => {
    const newTimeLog = new TimeLog();

    newTimeLog.startTime = addTimeLogDTO.startTime;
    newTimeLog.endTime = addTimeLogDTO.endTime;
    newTimeLog.description = addTimeLogDTO.description;

    await newTimeLog.save();
  };
}
