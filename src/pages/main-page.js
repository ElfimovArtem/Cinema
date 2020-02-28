import * as React from 'react';
import { Header } from '../components/header';
import { Movies } from '../modules/movies';
import { Footer } from '../components/footer';

export const MainPage = () => (
  <div>
    <Header />
    <Movies />
    <Footer />
  </div>
);
