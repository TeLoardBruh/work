import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { StudentService } from '../student/student.service';
import { AssignStudentToLessonInput } from './assign-student-to-lesson.input';
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
  ) {}
  @Query((returns) => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }
  @Query((returns) => [LessonType])
  lessons() {
    return this.lessonService.getAllLessons();
  }

  @Mutation((returns) => LessonType)
  createLesson(@Args('createInput') createInput: CreateLessonInput) {
    return this.lessonService.createLesson(createInput);
  }

  @Mutation((returns) => LessonType)
  assignStudentToLesson(
    @Args('assignStudentToLessonInput')
    assignStudentToLessonInput: AssignStudentToLessonInput,
  ) {
    const { lessonId, studentId } = assignStudentToLessonInput;
    return this.lessonService.assignStudentsToLesson(lessonId, studentId);
  }

  @ResolveField()
  async students(@Parent() lesson: Lesson) {
    return this.studentService.getManyStudents(lesson.students);
  }
}
