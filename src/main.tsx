import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import SearchPage from './pages/SearchPage.tsx';
import MovieDetailPage from './pages/MovieDetailPage.tsx';
import MainPage from './pages/MainPage.tsx';

// 라우터(길잡이) 설정을 만듭니다.
const router = createBrowserRouter([
  {
    path: "/", // 기본 주소('/')로 접속하면 App 컴포넌트(메인 페이지)를 보여줍니다.
    element: <App />,
  },
  {
    path: "/search", // '/search' 주소로 접속하면 SearchPage 컴포넌트를 보여줍니다.
    element: <SearchPage />,
  },
  {
    path: "/movie/:movieId", // '/movie/영화ID' 형태의 주소로 접속하면 MovieDetailPage를 보여줍니다.
    element: <MovieDetailPage />,
    children: [{
      index: true, // 부모 경로('/')와 동일할 때 MainPage를 보여줍니다.
      element: <MainPage />,
    },
    {
      path: "search", // '/search' 경로
      element: <SearchPage />,
    },
    {
      path: "movie/:movieId", // '/movie/:movieId' 경로
      element: <MovieDetailPage />,
    },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)