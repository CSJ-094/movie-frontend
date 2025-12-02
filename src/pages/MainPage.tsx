// c:/dev/work_springboot/movie-frontend/src/pages/MainPage.tsx
import React from 'react';
import MovieCard from '../components/MovieCard';

// API 연동 전에 사용할 임시 영화 데이터
const mockMovies = [
  { id: 1, title: '영화 제목 1', posterUrl: 'https://via.placeholder.com/200x300?text=Movie+1' },
  { id: 2, title: '영화 제목 2', posterUrl: 'https://via.placeholder.com/200x300?text=Movie+2' },
  { id: 3, title: '영화 제목 3', posterUrl: 'https://via.placeholder.com/200x300?text=Movie+3' },
  { id: 4, title: '영화 제목 4', posterUrl: 'https://via.placeholder.com/200x300?text=Movie+4' },
  { id: 5, title: '영화 제목 5', posterUrl: 'https://via.placeholder.com/200x300?text=Movie+5' },
];

const MainPage: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>주간 인기 영화</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {mockMovies.map(movie => (
          <MovieCard key={movie.id} title={movie.title} posterUrl={movie.posterUrl} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
