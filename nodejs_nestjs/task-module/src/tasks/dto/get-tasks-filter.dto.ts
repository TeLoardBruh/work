import { IsString, IsEnum, IsOptional } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class GetTaskDTOFilter {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
  @IsOptional()
  @IsString()
  search?: string;
}
