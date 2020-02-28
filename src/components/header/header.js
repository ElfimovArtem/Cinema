import * as React from 'react';
import cn from 'classnames';
import bgImg from '../../assets/bg.jpg';
import './header-styles.css';

export const Header = () => (
  <div className={cn('header')}>
    <img className={cn('header__background')} src={bgImg} alt="" />
    <div className={cn('header__shadow')} />
    <h1 className={cn('header__title')}>Онлайн кинотеатр</h1>
    <p className={cn('header__description')}>
      Смотрите где угодно: кино и сериалы в отличном качестве, без рекламы, на любом устройстве.
    </p>
  </div>
);
