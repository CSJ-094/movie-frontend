// c:/dev/work_springboot/movie-frontend/src/pages/MainPage.tsx
import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

// API로부터 받아올 영화 데이터의 타입을 정의합니다.
interface Movie {
  id: number;
  title: string;
  poster_path: string; // API 명세에 따라 posterUrl 대신 poster_path를 사용할 수 있습니다.
}

const MainPage: React.FC = () => {
  // 영화 목록을 저장할 state
  const [movies, setMovies] = useState<Movie[]>([]);
  // 로딩 상태를 저장할 state
  const [loading, setLoading] = useState(true);

  // 컴포넌트가 처음 렌더링될 때 한 번만 실행됩니다.
  useEffect(() => {
    // API 호출 함수
    const fetchMovies = async () => {
      try {
        // 실제 API 엔드포인트로 교체해야 합니다. (예: /api/movies/popular)
        // 지금은 fetch가 동작하는 것을 보여주기 위해 가상 API를 사용합니다.
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb');
        const data = await response.json();
        setMovies(data.results); // API 응답 구조에 맞게 results를 사용
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    fetchMovies();
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 합니다.

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px', fontSize: '24px' }}>로딩 중...</div>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>주간 인기 영화</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {movies.map(movie => (
          <MovieCard key={movie.id} title={movie.title} posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
