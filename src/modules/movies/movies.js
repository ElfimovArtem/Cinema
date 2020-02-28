import * as React from 'react';
import cn from 'classnames';
import './movies-styles.css';
import { Movie } from '../../components/movie';

export const Movies = () => (
  <div className={cn('movies')}>
    <Movie />
    <Movie />
    <Movie />
    <Movie />
    <Movie />
    <Movie />
  </div>
);
