import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ModeloEntity } from "./ModeloEntity";
import { MotoristaVeiculoEntity } from "./MotoristaVeiculoEntity";
import { UserEntity } from "./UserEntity";

@Entity("veiculos")
export class VeiculoEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => ModeloEntity, (modelo) => modelo.veiculos)
  @JoinColumn({ name: "modelo_id" })
  modelo: ModeloEntity;

  @JoinColumn({ name: "user_id" })
  user: UserEntity;

  @Column({ type: "varchar", length: 255 })
  placa: string;

  @Column({ type: "varchar", length: 255 })
  chassi: string;

  @Column({ type: "varchar", length: 255 })
  renavam: string;

  @Column({ type: "int" })
  status: number;

  @OneToMany(
    () => MotoristaVeiculoEntity,
    (motoristaVeiculo) => motoristaVeiculo.veiculo
  )
  motoristaVeiculos: MotoristaVeiculoEntity[];
}
