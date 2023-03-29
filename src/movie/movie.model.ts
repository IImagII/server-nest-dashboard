import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { ReviewModel } from 'src/review/review.model';

@Table({ tableName: 'Movie', deletedAt: false, version: false }) // это декоратор имя даем сами deletedAt: false, version: false- мы убераем поля которые есть по умолчанию
export class MovieModel extends Model {
  @Column({ unique: true })
  name: string;

  @Column({ allowNull: true })
  rating: number;

  @Column({ defaultValue: '' })
  poster: string;

  @HasMany(() => ReviewModel) // так мы настраиваем связь между таблицами базы данных
  reviews: ReviewModel[];

  @Column({ defaultValue: 0 })
  fees: number;
}
