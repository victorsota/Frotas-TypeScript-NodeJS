import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUser";
import { FindAllUsers } from "./controllers/user/FindAllUsers";
import { FindUserById } from "./controllers/user/FindByIdUser";
import { LoginUser } from "./controllers/user/LoginUser";

export const routes = Router();

routes.post("/users", new CreateUserController().create);
routes.get("/users", new FindAllUsers().list);
routes.get("/users/:id", new FindUserById().findById);
routes.get("/login", new LoginUser().login);
