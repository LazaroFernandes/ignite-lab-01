import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../database/prisma/prisma.service";

interface getByCourseAndStudentId {
  courseId: string;
  studentId: string;
}

@Injectable()
export class EnrollmentsService {
  constructor(private prisma: PrismaService) { }

  getByCourseAndStudentId({ courseId, studentId }: getByCourseAndStudentId) {
    return this.prisma.enrollment.findFirst({
      where: {
        courseId,
        studentId,
        cancledAt: null
      },
    });
  }

  listAllEnrollments() {
    return this.prisma.enrollment.findMany({
      where: {
        cancledAt: null,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  listEnrollmentsByStudent(studentId: string) {
    return this.prisma.enrollment.findMany({
      where: {
        studentId,
        cancledAt: null,
      },
      orderBy: {
        createdAt: 'desc'
      },
    });
  }
}