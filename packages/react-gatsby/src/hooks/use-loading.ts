import { useState } from 'react';

export function useLoading(defaultLoading) {
  const [isLoading, setLoading] = useState(defaultLoading);

  function hideLoading() {
    setLoading(false);
  }

  function showLoading() {
    setLoading(true);
  }

  function toggleLoading() {
    setLoading(isLoading => !isLoading);
  }

  return {
    hideLoading,
    isLoading,
    showLoading,
    toggleLoading,
  };
}
