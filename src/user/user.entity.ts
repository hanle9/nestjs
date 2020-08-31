import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 }) 
  first_name: string;

  @Column({ length: 500 })
  last_name: string;

  @Column()
  email: string;  

  @Column()
  avatar: string;  

  constructor(id: number, first_name: string, last_name: string, email: string, avatar: string){
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.avatar = avatar;
  }
  
  
}