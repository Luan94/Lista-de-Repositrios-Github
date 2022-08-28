import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './git-list.css';
import About  from './components/about/about';
import Search from './components/search/search';
import Cards from './components/cards/cards';
import Filter from './components/filter/filter';
import { LoadAPI } from './components/utils/useAPI';

const App = () => {

  useEffect(() => {
    LoadAPI()
    .then(res => {
      const GitRepoApi = res;
      const FilteredGitRepoApi = res;
      const FilterItemsList = [...new Set(res?.map(
        (repobuttons) => repobuttons.language,
      ))];     
      setGitRepoApi(GitRepoApi); 
      setFilterItemsList(FilterItemsList); 
      setFilteredGitRepoApi(FilteredGitRepoApi); 

    });
  }, []);

  const [GitRepoApi, setGitRepoApi] = useState(); // Complete API for reset
  const [FilteredGitRepoApi, setFilteredGitRepoApi] = useState(); // Complete API for buttons
  const [FilterItemsList, setFilterItemsList] = useState() // Api for filtering cards and search function
  ; 

  return (
    <div className="container">      
      <About/>

      <Search
        GitRepoApi = {GitRepoApi} 
        FilterItemsList={FilterItemsList}
        setFilterItemsList={setFilterItemsList}
        FilteredGitRepoApi={FilteredGitRepoApi}
        setFilteredGitRepoApi={setFilteredGitRepoApi}
      />

      <Filter
        GitRepoApi = {GitRepoApi} 
        FilterItemsList={FilterItemsList}
        FilteredGitRepoApi={GitRepoApi}
        setFilteredGitRepoApi={setFilteredGitRepoApi}
      />  

      <Cards FilteredGitRepoApi={FilteredGitRepoApi}/>

    </div>
     
  );
};

export default App;