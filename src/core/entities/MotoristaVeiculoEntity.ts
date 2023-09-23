import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MotoristaEntity } from "./MotoristaEntity";
import { VeiculoEntity } from "./VeiculoEntity";

@Entity("motorista_veiculos")
export class MotoristaVeiculoEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => MotoristaEntity, (motorista) => motorista.motoristaVeiculos)
  @JoinColumn({ name: "motorista_id" })
  motorista: MotoristaEntity;

  @ManyToOne(() => VeiculoEntity, (veiculo) => veiculo.motoristaVeiculos)
  @JoinColumn({ name: "veiculo_id" })
  veiculo: VeiculoEntity;
}
