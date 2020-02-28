import * as React from 'react';
import cn from 'classnames';
import './movie-styles.css';
import movieImage from '../../assets/titanic.jpg';

export const Movie = () => (
  <div className={cn('movie')}>
    <div className={cn('movie__image')}>
      <img className={cn('movie__image-poster')} src={movieImage} alt='' />
    </div>
    <div className={cn('movie__description')}>
      <h2 className={cn('movie__description-title')}>Titanic</h2>
      <span className={cn('movie__description-text')}>
        1997 American catastrophe film, which shows the death of the legendary Titanic ship.
        The heroes of the film, being members of various social strata, fell in love with each other on board the liner,
        which made its first and last voyage across the Atlantic Ocean in 1912.
      </span>
    </div>
  </div>
);
