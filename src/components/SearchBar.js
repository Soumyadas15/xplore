// import { Form, FormControl, Button, InputGroup, Container } from 'react-bootstrap';
import '../styles/Search.css';
import { BsSearch } from 'react-icons/bs';

function SearchBar({ searchText, setSearchText, handleSearch }) {
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="search-bar"> {/* Update the attribute from class to className */}
      <input
        type="text"
        style={{color: 'white'}}
        placeholder="Magnify the amazing deals we offer"
        value={searchText}
        onChange={handleInputChange}
        className="search-input"
      />
      <button className="search-button" onClick={handleSearch}><BsSearch /></button>
    </div>
  );
}

export default SearchBar;