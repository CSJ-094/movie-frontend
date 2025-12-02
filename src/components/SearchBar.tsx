import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // 1. <Link> 컴포넌트를 import 합니다.

const SearchBar: React.FC = () => {
  // 사용자가 입력한 검색어를 저장하기 위한 state
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // input의 내용이 변경될 때마다 실행되는 함수
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // '검색' 버튼을 클릭했을 때 실행되는 함수
  const handleSearchClick = () => {
    // 검색어가 비어있지 않을 때만 /search 경로로 페이지를 이동시킵니다.
    // URL에 쿼리 파라미터(?q=...)로 검색어를 함께 전달합니다.
    if (searchTerm.trim() !== '') {
      navigate(`/search?q=${searchTerm}`);
    }
  };

  return (
    <header style={{ padding: '20px', backgroundColor: '#282c34', textAlign: 'center', color: 'white' }}>
      {/* 2. <h1> 태그를 <Link>로 감싸줍니다. to="/"는 클릭 시 메인 페이지로 이동하라는 의미입니다. */}
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <h1>My Movie App</h1>
      </Link>
      <div>
        <input
          type="text"
          placeholder="영화 제목을 검색하세요..."
          style={{ padding: '10px', width: '40%', marginRight: '10px', fontSize: '16px', borderRadius: '4px', border: 'none' }}
          value={searchTerm}
          onChange={handleInputChange}
        />
        {/* 버튼에 onClick 이벤트를 추가합니다. */}
        <button onClick={handleSearchClick} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', borderRadius: '4px', border: 'none', backgroundColor: '#61dafb' }}>
          검색
        </button>
      </div>
    </header>
  );
};

export default SearchBar;