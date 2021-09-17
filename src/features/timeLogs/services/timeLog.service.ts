import AddTimeLogtDTO from '../dtos/addTimeLog';
import TimeLog from '../models/timeLog.model';

export default class TimeLogService {
  static getAllTimeLogs = async (take: number, skip: number) => {
    const [timeLogs, total] = await TimeLog.createQueryBuilder('timeLog')
      .select(['timeLog.id', 'timeLog.startTime', 'timeLog.endTime'])
      .take(take)
      .skip(skip)
      .getManyAndCount();

    const nextCursor =
      parseInt(skip.toString(), 10) + parseInt(take.toString(), 10);

    console.log(take);
    console.log(skip);

    return {
      total,
      data: timeLogs,
      nextCursor,
    };
  };

  static addTimeLog = async (addTimeLogDTO: AddTimeLogtDTO) => {
    const newTimeLog = new TimeLog();

    newTimeLog.startTime = addTimeLogDTO.startTime;
    newTimeLog.endTime = addTimeLogDTO.endTime;
    newTimeLog.description = addTimeLogDTO.description;

    await newTimeLog.save();
  };
}
