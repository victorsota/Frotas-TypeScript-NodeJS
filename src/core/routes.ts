import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUser";
import { FindAllUsers } from "./controllers/user/FindAllUsers";
import { FindUserById } from "./controllers/user/FindByIdUser";
import { LoginUser } from "./controllers/auth/LoginUser";
import { RotaAuth } from "./controllers/user/RotaAuth";
import { CreateModelo } from "./controllers/modelo/createModelo";

export const routes = Router();

routes.post("/users", new CreateUserController().create);
routes.get("/users", new FindAllUsers().list);
routes.get("/users/:id", new FindUserById().findById);
routes.post("/login", new LoginUser().login);
routes.get("/login", new LoginUser().login);
routes.post(
  "/RotaAuth",
  new LoginUser().verifyToken,
  new RotaAuth().autentication
);
routes.post("/modelo", new CreateModelo().create);
