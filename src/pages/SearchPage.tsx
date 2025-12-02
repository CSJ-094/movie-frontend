import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

// MainPage와 동일한 Movie 타입을 사용합니다.
interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect의 의존성 배열에 'query'를 추가합니다.
  // 이렇게 하면 URL의 검색어가 바뀔 때마다 API 호출이 다시 실행됩니다.
  useEffect(() => {
    if (!query) return; // 검색어가 없으면 아무것도 하지 않습니다.

    const fetchMovies = async () => {
      setLoading(true); // 새로운 검색이 시작되면 로딩 상태로 설정
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${query}`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Failed to fetch search results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]); // 'query'가 변경될 때마다 이 useEffect가 다시 실행됩니다.

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px', fontSize: '24px' }}>'{query}' 검색 중...</div>;
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><h1>My Movie App</h1></Link>
      <h1>'{query}'에 대한 검색 결과</h1>
      {movies.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {movies.map(movie => (
            <MovieCard key={movie.id} title={movie.title} posterUrl={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/200x300?text=No+Image'} />
          ))}
        </div>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default SearchPage;