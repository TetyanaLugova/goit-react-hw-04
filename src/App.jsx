import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { getImeges } from './components/ImegeGallery-Api';
import ImegeGallery from './components/ImageGallery/ImageGallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

function App() {
  const [imeges, setImeges] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      return;
    }

    async function fetchImages() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getImeges(searchQuery, page);
        setImeges(prevState => [...prevState, ...data]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [page, searchQuery]);

  const handleSubmit = async topic => {
    setSearchQuery(topic);
    setPage(1);
    setImeges([]);
  };
  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isError && <ErrorMessage />}
      {imeges.length > 0 && <ImegeGallery items={imeges} />}
      {isLoading && <Loader />}
      {imeges.length > 0 && !isLoading && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
    </>
  );
}

export default App;
