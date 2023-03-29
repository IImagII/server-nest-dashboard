//описываем самостоятельно наши модели в даннмо случае это review
import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { MovieModel } from 'src/movie/movie.model';
import { UserModel } from 'src/user/user.model';

@Table({ tableName: 'Review', deletedAt: false, version: false }) // это декоратор имя даем сами deletedAt: false, version: false- мы убераем поля которые есть по умолчанию
export class ReviewModel extends Model {
  @ForeignKey(() => UserModel) // так настраивается взаимная связь - START связь настраивается с user.model.ts
  @Column
  userId: number;
  @BelongsTo(() => UserModel)
  user: UserModel; // так настраивается взаимная связь - END

  @ForeignKey(() => MovieModel) // так настраивается взаимная связь - START
  @Column
  movieId: number;
  @BelongsTo(() => MovieModel)
  movie: MovieModel; // так настраивается взаимная связь - END

  @Column({ defaultValue: '' })
  description: string;
}
