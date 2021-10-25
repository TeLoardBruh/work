import { Field, ID, InputType } from '@nestjs/graphql';
import { IsDateString, IsUUID, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @MinLength(4)
  @MaxLength(12)
  @Field()
  name: string;
  @IsDateString()
  @Field()
  startDate: string;
  @IsDateString()
  @Field()
  endDate: string;
  @IsUUID('4', { each: true })
  @Field(() => [ID], { defaultValue: [] })
  students: string[];
}
