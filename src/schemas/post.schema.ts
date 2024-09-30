import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class Post extends Document {
  @Field(() => ID, { description: 'Example field (placeholder)' })
  _id: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  @Prop({ required: true, maxlength: 128 })
  title: string;

  @Field(() => String)
  @Prop()
  content: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);
