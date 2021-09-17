import { IsNumber, IsString, IsDate } from 'class-validator';

class AddAppointmentDTO {
  @IsDate()
  startTime: Date;

  @IsDate()
  endTime: number;

  @IsString()
  description: string;
}

export default AddAppointmentDTO;
