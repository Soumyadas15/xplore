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
      { id: 1, title: 'Result 1' },
      { id: 2, title: 'Result 2' },
      { id: 3, title: 'Result 3' },
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
