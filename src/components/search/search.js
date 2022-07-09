import React from 'react';

const Search = () =>{

    return (
        <div className="col-md-12">
        <div className="row search-projetc-wrapper">               
            <input className="search-repo-input"/>
            <button type="button" className="btn-repo-search button-type">Pesquisar</button>
        </div>
      </div>
    );
};

export default Search;