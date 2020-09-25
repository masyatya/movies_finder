import React from 'react';
import { MoviesList } from './components/MoviesList';
import { DetailsMovie } from './components/DetailsMovie';
import { SearchForm } from './components/SearchForm';

export const App = () => {
  return (
    <div className="page">
      <div className="page-content">
        <SearchForm />
        <MoviesList />
      </div>
      <div className={`details`}>
        <DetailsMovie />
      </div>
    </div>
  );
};

//  ${isLoading ? 'hidden' : ''}