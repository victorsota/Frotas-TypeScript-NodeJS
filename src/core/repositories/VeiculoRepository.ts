import { AppDataSource } from "../data-source";
import { VeiculoEntity } from "../entities/VeiculoEntity";

export const VeiculoRepository = AppDataSource.getRepository(VeiculoEntity);
