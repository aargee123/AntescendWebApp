import React from 'react';
import Covid19 from './Covid19.jpg';
import './Projects.css';

const Projects = () => {
    return(
        <div>
            <p className = 'f2 b underline'>Our Projects</p>
            <article className="fl br3 pa3 pa4-ns mv3 ba b--black-10 shadow-4">
                    <div className = 'des w-50' >
                        <p className = 'f3 pointer white '>COVID-19 App</p>
                        <p className = 'f4 white'>
                            This is an android app in which their is database of all the possible symptoms and on the basis of a quiz it
                            will detect if anyone is affected or not.As well as it will create all the database of all the nearest test
                            centres,doctors and hospitals etc.
                        </p>
                    </div>
                    <div className = 'de w-50'>
                        <a href = 'https://github.com/rashhh1411/COVID-19-Application'>
                            <img className = 'grow pointer' alt = 'Covid19' src = {Covid19}/>
                        </a>
                    </div>
                </article>

        </div>
    );
}

export default Projects;