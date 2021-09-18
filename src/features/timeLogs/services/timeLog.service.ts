import AddTimeLogtDTO from '../dtos/addTimeLog';
import TimeLog from '../models/timeLog.model';

export default class TimeLogService {
  static getAllTimeLogs = async (take: number, skip: number) => {
    const [timeLogs, total] = await TimeLog.createQueryBuilder('timeLog')
      .select([
        'timeLog.id',
        'timeLog.startTime',
        'timeLog.endTime',
        'timeLog.description',
      ])
      .take(take)
      .skip(skip)
      .orderBy('timeLog.startTime', 'DESC')
      .getManyAndCount();

    const nextCursor = skip + take;

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
