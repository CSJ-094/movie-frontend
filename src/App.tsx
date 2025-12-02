// c:/dev/work_springboot/movie-frontend/src/App.tsx
import React from 'react';
import MainPage from './pages/MainPage';
import SearchBar from './components/SearchBar';
import './App.css'; // 기본 스타일을 위해 App.css를 유지합니다.

function App() {
  return (
    <div className="App">
      <SearchBar />
      <MainPage />
    </div>
  );
}

export default App;
