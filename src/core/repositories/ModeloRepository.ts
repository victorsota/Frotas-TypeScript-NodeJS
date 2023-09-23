import { AppDataSource } from "../data-source";
import { ModeloEntity } from "../entities/ModeloEntity";

export const ModeloRepository = AppDataSource.getRepository(ModeloEntity);
