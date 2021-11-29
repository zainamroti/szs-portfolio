import React from 'react'
import Project from '../layouts/Project'
import { projects, miscellaneous } from '../../profile'

const Works = () => {
    return (
        <>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <center>
                    <div className="pp-head-line">
                        <h1 id="Projects" className="red-line pp-head">Past Projects</h1>
                    </div>
                </center>
                <div className="row">
                    {projects && projects.map((x, ind) =>
                        <Project key={ind} id={x.id} url={x.url} name={x.name} skills={x.skills} />
                    )}
                </div>
            </div>

            <div className="third">
                <center>
                    <div className="pp-head-line">
                        <h1 id="Projects" className="red-line pp-head">Miscellaneous</h1>
                    </div>
                </center>
                <div className="row">
                    {miscellaneous && miscellaneous.map((x, ind) =>
                        <Project key={ind} id={x.id} url={x.url} name={x.name} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Works
