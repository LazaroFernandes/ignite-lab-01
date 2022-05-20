import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CoursesService } from '../http/services/courses.service';
import { EnrollmentsService } from '../http/services/enrolments.service';
import { StudentsService } from '../http/services/students.service';
import { PruchaseController } from './controllers/purchases.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PruchaseController,],
  providers: [
    StudentsService,
    CoursesService,
    EnrollmentsService,
  ]
})
export class MessagingModule { }
