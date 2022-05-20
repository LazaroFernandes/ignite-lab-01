import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Purchase } from "./purchase";

@ObjectType('user')
@Directive('@key(fields: "authUserId")')
export class Customer{
  id:string;
  
  @Field(() => ID)
  authUserId:string;

  @Field(() => [Purchase])
  purchases: Purchase[];
}