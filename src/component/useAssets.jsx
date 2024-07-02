// useAssetLoader.js
import { useState, useEffect } from 'react';

const useAssetLoader = (assets) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promises = assets.map((asset) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = asset;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(promises)
      .then(() => setLoading(false))
      .catch((err) => console.error('Failed to load assets', err));
  }, [assets]);

  return loading;
};

export default useAssetLoader;
