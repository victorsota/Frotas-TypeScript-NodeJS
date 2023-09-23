import { AppDataSource } from "../data-source";
import { MotoristaVeiculoEntity } from "../entities/MotoristaVeiculoEntity";

export const MotoristaVeiculoRepository = AppDataSource.getRepository(
  MotoristaVeiculoEntity
);
