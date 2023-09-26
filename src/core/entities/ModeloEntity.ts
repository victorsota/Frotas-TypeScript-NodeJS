import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { VeiculoEntity } from "./VeiculoEntity";
import { UserEntity } from "./UserEntity";

@Entity("modelos")
export class ModeloEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => UserEntity, (user) => user.motoristas)
  @JoinColumn({ name: "user_id" })
  user: UserEntity;

  @Column({ type: "varchar", length: 255 })
  modelo: string;

  @Column({ type: "varchar", length: 255 })
  marca: string;

  @Column({ type: "varchar", length: 255 })
  ano: string;

  @Column({ type: "varchar", length: 255 })
  cor: string;

  @Column({ type: "varchar", length: 255 })
  combustivel: string;

  @Column({ type: "int" })
  status: number;

  @OneToMany(() => VeiculoEntity, (veiculo) => veiculo.modelo)
  veiculos: VeiculoEntity[];
}
