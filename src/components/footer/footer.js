import * as React from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faVk,
} from '@fortawesome/free-brands-svg-icons';
import './footer-styles.css';

export const Footer = () => (
  <div className={cn('footer')}>
    <div className={cn('footer__layout')}>
      <div className={cn('footer__description')}>
        <span>Cinema 2020.</span>
      </div>
      <div className={cn('footer__social')}>
        <a className={cn('footer__social-link')} href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className={cn('footer__social-link')} href="https://www.instagram.com/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className={cn('footer__social-link')} href="https://vk.com">
          <FontAwesomeIcon icon={faVk} />
        </a>
        <a className={cn('footer__social-link')} href="https://youtube.com">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </div>
  </div>
);
