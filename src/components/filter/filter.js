import React, { useState, useEffect } from "react";

  
  const Filter = () => {


    return (
      <div className="col-md-12">
        <div className="filter-label">Filtar por Linguagem de Programação:</div>
        <div className="row filter-btn-wrapper">
          <button type="button" className="button-type" id="allBtn" value="type-all" >Todos</button>
          <button type="button" className="button-type" id="PHP-btn" value="type-PHP">PHP</button>          
          <button type="button" className="button-type" id="Javascript-btn" value="type-Javascript">Javascript</button>
        </div>
      </div>      
    );
  };

 
export default Filter;



