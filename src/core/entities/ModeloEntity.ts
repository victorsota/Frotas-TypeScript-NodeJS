import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { VeiculoEntity } from "./VeiculoEntity";

@Entity("modelos")
export class ModeloEntity {
  @PrimaryGeneratedColumn()
  id: string;

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

  @OneToMany(() => VeiculoEntity, (veiculo) => veiculo.modelo)
  veiculos: VeiculoEntity[];
}
