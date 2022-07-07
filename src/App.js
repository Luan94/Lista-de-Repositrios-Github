import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './git-list.css';


const GitApiConfig = {
  baseUrl: "https://api.github.com",
  client_id: "Iv1.70e6fb28727f5fac",
  secret: "302d94f3c76a06f03b5f2a70fcefa90dcae88c9e"
}



const Axios = () => {

  const [clicked, setClicked] = useState('');

  const handleClick = event => {

    const type = event.currentTarget.value;
    var php = true;
    var Javascript = true;
    
    switch (type) {

      case 'type-all':
      console.log('é todos')
      var PHP = true;
      var JavaScript = true;
      break;

      case 'type-PHP':
      console.log('é php')
      var PHP = true;
      var JavaScript = false;
      break;

      case 'type-Javascript':
        console.log('é javascript')
      var PHP = false;
      var JavaScript = true;
      break;
      
      default:
        
    }

        
  };
  
  const [GitRepoApi, setGitRepoApi] = useState([]);
  useEffect(() => {
    axios.get(GitApiConfig.baseUrl+"/users/luan94/repos")
    .then(res => {
      const GitRepoApi = res.data;
      
      setGitRepoApi(GitRepoApi);
      console.log(GitRepoApi)
    });
  }, []);
  

  return (
    <div className="container">
      <div className="col-md-12 about-this-project-wrapper">
        <div className="col-md-12 about-this-project">Lista dos Repositórios dos projetos de Luan Vilas Boas de Oliveira</div>
        <div className="col-md-12 git-link-wrapper">Github &nbsp;
        <a href="https://github.com/Luan94" target="_blank" rel="noopener noreferrer" className="git-link">
          <div className="col-md-12 git-icon"><FontAwesomeIcon icon={ faGithub }/></div>
          Luan94
        </a>
          
        </div>
      </div>

      
        
      <div className="col-md-12">
        <div className="row search-projetc-wrapper">               
            <input className="search-repo-input"/>
            <button type="button" className="btn-repo-search button-type">Pesquisar</button>
        </div>
      </div>
      <div className="col-md-12">
        <div className="filter-label">Filtar por Linguagem de Programação:</div>
        <div className="row filter-btn-wrapper">
          <button type="button" className="button-type" id="allBtn" value="type-all" onClick={handleClick} >Todos</button>
          <button type="button" className="button-type" id="PHP-btn" value="type-PHP" onClick={handleClick}>PHP</button>          
          <button type="button" className="button-type" id="Javascript-btn" value="type-Javascript" onClick={handleClick}>Javascript</button>
        </div>
      </div>
      

      
      <div className="row">
        {GitRepoApi.map(repo => (
          <div className={'col-md-4 all-cards' + repo.language } key={repo.id}>
            
              <div className="repo-card-wrapper">
                <div className="col-md-12"><p className="repo-name-label">Nome do Projeto:</p></div>
                <div className="col-md-12"><p className="repo-name">{repo.name}</p></div>
                <div className="col-md-12"><p className="repo-language-label">Principal Linguagem de Programação:</p></div>
                <div className="col-md-12"><p className="repo-language">{repo.language}</p></div>
                <div className="col-md-12"><p className="repo-description-label">Sobre o projeto:</p></div>
                <div className="col-md-12"><p className="repo-description">{repo.description.substring(0,120)}</p></div>
                <div className="col-md-12 card-link-wrapper">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-card-link">
                    <button type="button" className="button-type">Ir para o Repositório</button>
                  </a>
                </div>
              </div>
            
          </div>
          ))
        }
        </div>
    </div>
     
  );
};

export default Axios;