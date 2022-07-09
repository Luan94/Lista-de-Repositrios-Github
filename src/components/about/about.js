import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const About = () =>{

    return (
        <div className="col-md-12 about-this-project-wrapper">
        <div className="col-md-12 about-this-project">Lista dos Repositórios dos projetos de Luan Vilas Boas de Oliveira</div>
        <div className="col-md-12 git-link-wrapper">Github &nbsp;
        <a href="https://github.com/Luan94" target="_blank" rel="noopener noreferrer" className="git-link">
          <div className="col-md-12 git-icon"><FontAwesomeIcon icon={ faGithub }/></div>
          Luan94
        </a> 
        </div>
      </div>
    );
};

export default About;