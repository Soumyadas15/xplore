import React from 'react';
import '../styles/SearchResults.css';
function SearchResults({ searchResults }) {
  return (
    <div>
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <div className='responsive-div' key={result.id}>{result.title}</div>
        ))
      ) : (
        <div className='r-div'>You zoomed in too much!</div>
      )}
    </div>
  );
}

export default SearchResults;
