import { IsNumber, IsString, IsDate } from 'class-validator';

class AddTimeLogDTO {
  @IsDate()
  startTime: Date;

  @IsDate()
  endTime: number;

  @IsString()
  description: string;
}

export default AddTimeLogDTO;
