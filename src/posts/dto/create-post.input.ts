import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  title: string;

  @Field(() => String)
  content: string;
}
