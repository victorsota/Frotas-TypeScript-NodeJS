import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MotoristaVeiculoEntity } from "./MotoristaVeiculoEntity";
import { UserEntity } from "./UserEntity";

@Entity("motoristas")
export class MotoristaEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => UserEntity, (user) => user.motoristas)
  @JoinColumn({ name: "user_id" })
  user: UserEntity;

  @Column({ type: "varchar", length: 255 })
  nome: string;

  @Column({ type: "varchar", length: 255 })
  cpf: string;

  @Column({ type: "varchar", length: 255 })
  telefone: string;

  @Column({ type: "varchar", length: 255 })
  email: string;

  @Column({ type: "varchar", length: 255 })
  endereco: string;

  @Column({ type: "varchar", length: 255 })
  cnh: string;

  @Column({ type: "int" })
  status: number;

  @OneToMany(
    () => MotoristaVeiculoEntity,
    (motoristaVeiculo) => motoristaVeiculo.motorista
  )
  motoristaVeiculos: MotoristaVeiculoEntity[];
}
