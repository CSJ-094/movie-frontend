// c:/dev/work_springboot/movie-frontend/src/components/MovieCard.tsx
import React from 'react';

// MovieCard 컴포넌트가 받을 데이터의 타입을 정의합니다. (TypeScript)
interface MovieCardProps {
  title: string;
  posterUrl: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, posterUrl }) => {
  return (
    <div style={{ border: '1px solid #eee', margin: '10px', width: '200px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <img src={posterUrl} alt={`${title} poster`} style={{ width: '100%' }} />
      <h4 style={{ padding: '0 10px', textAlign: 'center' }}>{title}</h4>
    </div>
  );
};

export default MovieCard;
