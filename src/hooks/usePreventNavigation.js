// src/hooks/usePreventBackNavigation.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function usePreventBackNavigation() {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = (event) => {
      event.preventDefault();
      if (window.location.pathname === '/') {
        navigate('/regular');
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);
}

export default usePreventBackNavigation;
