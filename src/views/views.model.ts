//описываем самостоятельно наши модели в даннмо случае это user
import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { MovieModel } from 'src/movie/movie.model';
import { ReviewModel } from 'src/review/review.model';

@Table({ tableName: 'Views', deletedAt: false, version: false }) // это декоратор имя даем сами deletedAt: false, version: false- мы убераем поля которые есть по умолчанию
export class ViewsModel extends Model {
  @ForeignKey(() => MovieModel)
  @Column
  movieId: number;

  @Column({ defaultValue: 0 })
  views: number;
}
