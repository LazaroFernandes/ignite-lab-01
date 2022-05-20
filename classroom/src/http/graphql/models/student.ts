import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Enrollment } from "./enrollment";

@ObjectType('user')
@Directive('@extendes')
@Directive('@key(fields: "authUserId")')
export class Student{
  id: string;

  @Field(() => ID)
  @Directive('@external')
  authUserId: string

  @Field(() => [Enrollment])
  enrollments: Enrollment[];
}