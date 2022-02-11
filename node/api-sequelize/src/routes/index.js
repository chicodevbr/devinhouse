import { Router } from 'express';
import CategoryControllers from '../app/controllers/CategoryControllers';
import PostsControllers from '../app/controllers/PostsControllers';
import UserControllers from '../app/controllers/UserControllers';

const routes = new Router();

//users routes
routes.get('/users', UserControllers.index);
routes.post('/users', UserControllers.store);
routes.get('/users/:id', UserControllers.show);
routes.put('/users/:id', UserControllers.update);
routes.delete('/users/:id', UserControllers.destroy);

//category routes
routes.get('/category', CategoryControllers.index);
routes.get('/category/:id', CategoryControllers.show);
routes.post('/category', CategoryControllers.store);

// posts routes

routes.post('/posts', PostsControllers.store);
routes.get('/users/:id/posts', PostsControllers.index);

export default routes;
