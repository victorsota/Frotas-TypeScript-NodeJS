import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { VeiculoEntity } from "./VeiculoEntity";
import { ModeloEntity } from "./ModeloEntity";
import { MotoristaEntity } from "./MotoristaEntity";

@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: "varchar", length: 255 })
  name: string;

  @Column({ type: "varchar" })
  email: string;

  @Column({ type: "varchar", length: 30 })
  password: string;

  @OneToMany(() => VeiculoEntity, (veiculo) => veiculo.user)
  veiculos: VeiculoEntity[];

  @OneToMany(() => ModeloEntity, (modelo) => modelo.user)
  modelos: ModeloEntity[];

  @OneToMany(() => MotoristaEntity, (motorista) => motorista.user)
  motoristas: MotoristaEntity[];
}
