import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from './coffee.entity';

@Entity()
export class Flavor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // eslint-disable-next-line prettier/prettier
  @ManyToMany(
    (type) => Coffee,
    (coffee) => coffee.flavors
  )
  coffees: Coffee[];
}
