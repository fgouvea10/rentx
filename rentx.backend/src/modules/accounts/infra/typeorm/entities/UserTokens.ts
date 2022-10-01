import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";

import { User } from "./User";

@Entity("users_tokens")
export class UserTokens {
  @PrimaryColumn()
  id: string;

  @Column()
  refreshToken: string;

  @Column()
  userId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "userId" })
  user: User;

  @Column()
  expiresDate: Date;

  @CreateDateColumn()
  createdAt: Date;
}
