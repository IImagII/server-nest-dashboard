//описываем самостоятельно наши модели в даннмо случае это user
import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { ReviewModel } from 'src/review/review.model';

@Table({ tableName: 'User', deletedAt: false, version: false }) // это декоратор имя даем сами deletedAt: false, version: false- мы убераем поля которые есть по умолчанию
export class UserModel extends Model {
  @Column
  name: string; // это те поля которые мы описывали на фронтенде

  @Column({ unique: true }) //жедаем уникальным email
  email: string;

  @Column({ field: 'avatar_path' }) // тут мы конкретно указываем имя которое будет заноиться в базу данных
  avatarPath: string;

  @HasMany(() => ReviewModel) //настраиваем связь с review.model.ts
  reviews: ReviewModel;
}
