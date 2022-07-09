import React, { useState, useEffect } from "react";
import { LoadAPI } from '../utils/useAPI';

const Cards = () =>{

const [GitRepoApi, setGitRepoApi] = useState();

  useEffect(() => {
    LoadAPI()
    .then(res => {
      const GitRepoApi = res;      
      setGitRepoApi(GitRepoApi);
    });
  }, []);

    

    return (
        <div className="row">
            {GitRepoApi?.map(repo => (
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
            ))}
        </div>
    );
};

export default Cards;