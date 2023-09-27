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
import { FindVeiculoById } from "./controllers/veiculo/FindVeiculoById";
import { CreateMotorista } from "./controllers/motorista/CreateMotorista";
import { FindByIdMotorista } from "./controllers/motorista/FindMotoristaById";
import { FindAllMotoristas } from "./controllers/motorista/FindAllMotoristas";
import { CreateMotoristaVeiculo } from "./controllers/motorista_veiculo/CreateMotoristaVeciulo";
import { FindByIdMotoristaVeiculo } from "./controllers/motorista_veiculo/FindMotoristaVeiculoById";
import { FindAllMotoristaVeiculos } from "./controllers/motorista_veiculo/FindAllMotoristaVeiculos";
import { UserController } from "./controllers/user/FindByTokenUser";

export const routes = Router();
const loginUser = new LoginUser();
// rotas de usuario
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
routes.get("/user", loginUser.verifyToken, new UserController().getUserByToken);
routes.get("/profile", new LoginUser().getProfile);

// rotas de modelo
routes.post("/modelo", new CreateModelo().create);
routes.get("/modelo", new FindAllModelos().list);
routes.get("/modelo/:id", new FindByIdModelo().findById);

// rotas de veiculo
routes.post("/veiculo", loginUser.verifyToken, new CreateVeiculo().create);
routes.get("/veiculo/:id", new FindVeiculoById().findById);
routes.get("/veiculos", new FindAllVeiculos().list);

// rotas de motorista
routes.post("/motorista", new CreateMotorista().create);
routes.get("/motorista/:id", new FindByIdMotorista().findById);
routes.get("/motoristas", new FindAllMotoristas().list);

// rotas de motorista_veiculo
routes.post("/motorista_veiculo", new CreateMotoristaVeiculo().create);
routes.get("/motorista_veiculo/:id", new FindByIdMotoristaVeiculo().findById);
routes.get("/motorista_veiculos", new FindAllMotoristaVeiculos().list);
