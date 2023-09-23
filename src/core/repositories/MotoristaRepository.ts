import { AppDataSource } from "../data-source";
import { MotoristaEntity } from "../entities/MotoristaEntity";

export const MotoristaRepository = AppDataSource.getRepository(MotoristaEntity);
