import css from "./SearchBar.module.css";
import  { useState } from 'react';
// import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import  notifySettings  from '../fetch';


const SearchBar = () => {


const [query, setQuery] = useState('');

  const onInputChange = event => {
    
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {

    event.preventDefault();

    if (query.trim() === '') {
      return Notiflix.Notify.warning(
        'Please enter key words for search.',
        notifySettings
      );
    }
    
    // onSubmit({query});
    setQuery('');
  };


    return (
        <>
    
        <form onSubmit={handleSubmit}>
          
            <input
                value={query}
                name="query"
                type="text"
                autoComplete="off"
                autoFocus
                required
                placeholder="Search films"
                onChange={onInputChange}/>
            
            <button type="submit">Search</button>
        </form>
    
    </>
    )
};

export default SearchBar;

  

    
        
   