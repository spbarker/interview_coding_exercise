import {
  PostsController,
  CommentsController,
  UsersController,
  ViewsController
} from '../controllers'

export function setup (app) {
  app.get('/', ViewsController.index)
  app.get('/api/users', UsersController.index)
  app.get('/api/users/:id', UsersController.show)
  app.get('/api/posts', PostsController.index)
  app.get('/api/comments', CommentsController.index)
}
