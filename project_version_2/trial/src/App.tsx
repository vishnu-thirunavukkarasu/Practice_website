import { useState, useEffect } from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import { pageHeadings } from './types/pageHeadings';

function Trial() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => setIsLoading(true);
  const heading = pageHeadings.find(h => h.id === 'first');

  // loader + navigate
  useEffect(() => {
    if (!isLoading) return;
    const id = setTimeout(() => navigate('/Info'), 500);
    return () => clearTimeout(id);
  }, [isLoading, navigate]);

  return (
    <div className="page-container">

      <Header title={heading?.title || 'Untitle Page'} />
      {/* Button stays fixed in the viewport center */}
      <button className="mainbtn" onClick={handleClick}>click me</button>

      {/* Just to make page scrollable for demo */}
      <div style={{ minHeight: '200vh' }} />

      {isLoading && (
        <div className="loader-container visible">
          <div className="loader" />
        </div>
      )}
    </div>
  );
}

export default Trial;
