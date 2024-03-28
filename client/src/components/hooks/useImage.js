import { useEffect, useState } from 'react';

const useImage = (fileName) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  useEffect(() => {
    const fetchImage = async () => {
      try {
        if (!fileName) {
          throw new Error('File name is missing.');
        }
        const response = await import(`../../../public/resources/${fileName}`);
        setImage(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchImage();
  }, [fileName]);
  return { loading, error, image };
}

export default useImage;
