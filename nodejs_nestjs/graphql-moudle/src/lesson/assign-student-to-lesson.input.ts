import { Field, ID, InputType } from '@nestjs/graphql';
import { IsDateString, IsUUID, MaxLength, MinLength } from 'class-validator';

@InputType()
export class AssignStudentToLessonInput {
  @IsUUID()
  @Field((type) => ID)
  lessonId: string;
  @IsUUID('4', { each: true })
  @Field((type) => [ID])
  studentId: string[];
}
