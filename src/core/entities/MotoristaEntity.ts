import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MotoristaVeiculoEntity } from "./MotoristaVeiculoEntity";

@Entity("motoristas")
export class MotoristaEntity {
  @PrimaryGeneratedColumn()
  id: string;

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

  @OneToMany(
    () => MotoristaVeiculoEntity,
    (motoristaVeiculo) => motoristaVeiculo.motorista
  )
  motoristaVeiculos: MotoristaVeiculoEntity[];
}
