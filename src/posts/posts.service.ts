import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from '../schemas/post.schema';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}
  create(createPostInput: CreatePostInput) {
    return this.postModel.create(createPostInput);
  }

  async findAll(): Promise<Post[]> {
    return await this.postModel.find().exec();
  }

  async findOne(id: string): Promise<Post> {
    return await this.postModel.findById(id).exec();
  }

  async update(id: string, updatePostInput: UpdatePostInput): Promise<Post> {
    console.log(updatePostInput, id);
    return await this.postModel.findByIdAndUpdate(id, updatePostInput).exec();
  }

  async remove(id: string) {
    return await this.postModel.findByIdAndDelete(id).exec();
  }
}
