import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// 영화 상세 정보에 대한 타입을 정의합니다.
interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genres: { id: number; name: string }[];
}

const MovieDetailPage: React.FC = () => {
  // 1. useParams를 사용해 URL의 :movieId 값을 가져옵니다.
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        // 2. 가져온 movieId로 상세 정보 API를 호출합니다. (한국어 정보 요청)
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&language=ko-KR`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]); // movieId가 바뀔 때마다 API를 다시 호출합니다.

  if (loading) {
    return <div className="text-center p-12 text-2xl">상세 정보 로딩 중...</div>;
  }

  if (!movie) {
    return <div className="text-center p-12 text-2xl">영화 정보를 찾을 수 없습니다.</div>;
  }

  // 3. 받아온 데이터를 사용해 상세 페이지 UI를 그립니다.
  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <Link to="/" className="text-blue-500 hover:underline">&laquo; 뒤로가기</Link>
      <div className="flex flex-col md:flex-row mt-5">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full md:w-1/3 rounded-lg shadow-lg" />
        <div className="md:ml-8 mt-5 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-bold">{movie.title}</h1>
          <p className="mt-2"><strong>평점:</strong> <span className="text-yellow-500">{movie.vote_average.toFixed(1)}</span></p>
          <p className="mt-2"><strong>개봉일:</strong> {movie.release_date}</p>
          <p className="mt-2"><strong>장르:</strong> {movie.genres.map(g => g.name).join(', ')}</p>
          <h3 className="text-2xl font-bold mt-6">줄거리</h3>
          <p className="mt-2 text-gray-700">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;