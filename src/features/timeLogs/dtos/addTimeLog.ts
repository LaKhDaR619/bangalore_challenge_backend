import { IsString, IsDateString, MinDate } from 'class-validator';

class AddTimeLogDTO {
  @IsDateString()
  startTime: Date;

  @IsDateString()
  endTime: Date;

  @IsString()
  description: string;
}

export default AddTimeLogDTO;
