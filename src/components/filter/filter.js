import React, { useState } from "react";
import './filter.css';

  const Filter = ({ FilterItemsList, FilteredGitRepoApi, setFilteredGitRepoApi, GitRepoApi}) => {  

    const [buttonState, ChangeActiveButton] = useState({
      activeBtnIndex: null
    });  // Active State for buttons

    const filterFunction = (selected) => {
      const newItem = FilteredGitRepoApi.filter((newVal) => {
        return newVal.language === selected; 
      });
      setFilteredGitRepoApi(newItem);
    }; // filter function


    function toggleActivebtn (index){
      ChangeActiveButton({...buttonState, activeBtnIndex: index})
    } // Toggle active button function

    function untoggleSelectedButtons (){
      ChangeActiveButton({...buttonState, activeBtnIndex: null})
    } // Untoggle all buttons

    function toggleActiveBtnStyle(buttonID){     
      if(buttonID === parseInt(buttonState.activeBtnIndex)){
        return "activeBtn"
      }
    } // Change style of active button

    return (

      <div className="col-md-12">     
        <div className="filter-label">Filtar por Linguagem de Programação:</div>      
        <div className="row filter-btn-wrapper">
          <button 
            type="button"
            className={`button-type ${buttonState.activeBtnIndex === null? 'activeBtn' : ""}`}
            id="allBtn"
            onClick={(e) => {
              setFilteredGitRepoApi(GitRepoApi);
              untoggleSelectedButtons();
              
            }}>
              Todos
          </button>
        {FilterItemsList?.map((repobuttons, id) => (
            <button 
              type="button"
              className={`button-type ${toggleActiveBtnStyle(id)}`}
              onClick={(e) => {
                filterFunction(repobuttons);             
                toggleActivebtn(id);
                               
              }}
              key={id}
              > 
                {repobuttons} 
            </button>
          ))}
        </div>
      </div>      
    );

  };

 
export default Filter;



