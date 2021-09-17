import { IsNumber, IsString, IsDate } from 'class-validator';

class AddTimeLogDTO {
  @IsDate()
  startTime: Date;

  @IsDate()
  endTime: Date;

  @IsString()
  description: string;
}

export default AddTimeLogDTO;
