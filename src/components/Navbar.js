import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import allSuggestions from '../constantes/Suggestions';

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const searchInputRef = useRef(null);//permite que o React realize eventos de acordo com os eventos do usuário

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    const filteredSuggestions = allSuggestions.filter(suggestion =>
      suggestion.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setShowSuggestions(false);
    setSearchTerm('');
    navigate(`/search?query=${searchTerm}`);
  };

  const handleSuggestionClick = (suggestion) => {
    setShowSuggestions(false);
    setSearchTerm(''); // Limpa o campo de pesquisa
    if (suggestion.category) {
      navigate(`/produtos?category=${suggestion.category}`);
    } else {
      navigate(suggestion.link);
    }
  };

  const handleClickOutside = (event) => {
    if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
      setShowSuggestions(false);
      setSearchTerm('');
    }
  };

  const handleKeyDown = (event) => {//
    if (event.key === 'Tab') {
      setShowSuggestions(false);
      setSearchTerm('');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">E-Commerce</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/produtos">Produtos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/sobre">Sobre</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
        </ul>
        <form className="form-inline ml-auto my-2 my-lg-0" onSubmit={handleSearchSubmit} ref={searchInputRef}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Pesquise"
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={() => setShowSuggestions(true)}
          />
          {showSuggestions && suggestions.length > 0 && (
            <ul className="list-group position-absolute mt-2" style={{ zIndex: 1000 }}>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="list-group-item"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
        </form>
        
      </div>
    </nav>
  );
};

export default NavBar;
