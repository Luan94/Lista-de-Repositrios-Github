import React, { useState } from "react";
import './search.css';


const Search = ({GitRepoApi, FilterItemsList, setFilterItemsList, FilteredGitRepoApi, setFilteredGitRepoApi}) =>{


    const [search, setSearch ] = useState(''); // state for input



    // search function
    const loadSearch = () => {
        if(search.length > 1){

            // reset api fetch to original fetch
            FilteredGitRepoApi = GitRepoApi;
        }
        const newItem = FilteredGitRepoApi.filter((newVal) => {
          return newVal.name.toLowerCase().includes(search.toLowerCase()); 
        });      
        FilterItemsList = [...new Set(newItem?.map(
            (repobuttons) => repobuttons.language,
        ))];
        setFilterItemsList(FilterItemsList);       
        setFilteredGitRepoApi(newItem);
      }; 

    return (
        <div className="col-md-12">
        <div className="row search-projetc-wrapper">               
            <input className="search-repo-input"
                onChange = {(ev) => {setSearch(ev.target.value)}}
            />
            <button type="button" className="btn-repo-search button-type" 
                onClick={() => {loadSearch()}}                          
            >
                Pesquisar
            </button>
        </div>
      </div>
    );
};

export default Search;