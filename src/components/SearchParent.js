import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function SearchParent() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (searchText === '') {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    // Simulating a search with dummy data
    const dummyData = [
      { id: 1, title: 'Kolkata, India' },
      { id: 2, title: 'Shanghai, China' },
      { id: 3, title: 'Santorini, Greece' },
      { id: 4, title: 'Bucharest, Romania' },
      { id: 5, title: 'Munich, Germnay' },
      { id: 6, title: 'Cairo, Egypt' },
      { id: 7, title: 'New York, USA' },
      { id: 8, title: 'Los Angeles, USA' },
      { id: 9, title: 'Goa, India' },
      { id: 10, title: 'Sydney, Australia' },
      { id: 11, title: 'Melbourne, Australia' },
      { id: 12, title: 'Queenstown, New Zealand' },
      { id: 13, title: 'Helsinki, Finlad' },
      { id: 14, title: 'Warsaw, Poland' },
      { id: 15, title: 'Ho Chi Minh City, Vietnam' },
    ];

    const filteredResults = dummyData.filter((result) =>
      result.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setSearchResults(filteredResults);
    setShowResults(true); // Show search results
  }, [searchText]);

  const handleSearch = () => {
    // This function can be removed since the search is now triggered automatically
  };

  // const handleInputChange = (event) => {
  //   setSearchText(event.target.value);
  // };

  return (
    <div>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
      />
      {showResults && <SearchResults searchResults={searchResults} />}
    </div>
  );
}

export default SearchParent;