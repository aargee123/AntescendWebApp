import React from 'react';
import Covid19 from './Covid19.jpg';
import './Projects.css';

const Projects = () => {
    return(
        <div>
            <p className = 'f2 b underline'>Our Projects</p>
                <article className="br3 mv4 w-100 w-50-m w-25-l mw5 center grow pointer shadow-5">
                            <img alt = 'Covid19' src = {Covid19}/>
                    <div className="pa2 ph3-ns pb3-ns">
                        <div className="dt w-100 mt1">
                        <div className="center">
                            <a href = 'https://github.com/rashhh1411/COVID-19-Application'>
                                <h1 className="f5 f4-ns mv0">Covid-19 Android App</h1>
                            </a>
                        </div>
                        </div>
                        <p className="f6 lh-copy measure mt2 black">
                            This is an android app in which their is database of all the possible symptoms and on the basis of a quiz it
                            will detect if anyone is affected or not.As well as it will create all the database of all the nearest test
                            centres,doctors and hospitals etc.
                        </p>
                    </div>
                </article>
        </div>
    );
}

export default Projects;