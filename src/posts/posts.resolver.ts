import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from '../schemas/post.schema';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Mutation(() => Post)
  createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    console.log(createPostInput);
    return this.postsService.create(createPostInput);
  }

  @Query(() => [Post], { name: 'posts' })
  findAll() {
    return this.postsService.findAll();
  }

  @Query(() => Post, { name: 'post' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.postsService.findOne(id);
  }

  @Mutation(() => Post)
  updatePost(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
    this.postsService.update(updatePostInput.id, updatePostInput);
    return this.postsService.findOne(updatePostInput.id);
  }

  @Mutation(() => Post)
  removePost(@Args('id', { type: () => ID }) id: string) {
    return this.postsService.remove(id);
  }
}
