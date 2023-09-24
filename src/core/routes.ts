import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUser";
import { FindAllUsers } from "./controllers/user/FindAllUsers";
import { FindUserById } from "./controllers/user/FindByIdUser";
import { LoginUser } from "./controllers/auth/LoginUser";
import { RotaAuth } from "./controllers/user/RotaAuth";
import { CreateModelo } from "./controllers/modelo/createModelo";
import { FindAllModelos } from "./controllers/modelo/FindAllModelos";
import { FindByIdModelo } from "./controllers/modelo/FindByIdModelo";
import { CreateVeiculo } from "./controllers/veiculo/CreateVeiculo";
import { FindAllVeiculos } from "./controllers/veiculo/FindAllVeiculos";

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
routes.get("/modelo", new FindAllModelos().list);
routes.get("/modelo/:id", new FindByIdModelo().findById);

routes.post("/veiculo", new CreateVeiculo().create);
routes.get("/veiculos", new FindAllVeiculos().list);
