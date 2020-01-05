import React from 'react'
import ProjectItem from './ProjectItem'
import projectZedImage from './images/project-zed.png'
import coachSamImage from './images/coach-sam.jpg'
import penguinSaver from './images/penguin-saver.png'
import saveALife from './images/save-a-life.jpg'

const Projects = () => {
  return (
    <div className="projects-container">
      <p className="heading">Projects</p>
      <div className="project-item-list">
        <ProjectItem
          img={projectZedImage}
          title="Project Zed"
          description="Platform to showcase projects built by developers from Zambia, both open and closed
          source. Once users log in, they can submit new projects as well as like other projects."
          link="https://github.com/WillzMu/project-zed"
        />
        <ProjectItem
          img={coachSamImage}
          title="Coach Sam"
          description="A educative and fun messenger chatbot that reminds people of road safety rules based in Zambia. It has a quiz that tests your
          knowledge of road safety and also sends periodic tips."
          link="https://zazuafrica.com/"
        />
        <ProjectItem
          img={penguinSaver}
          title="Penguin Saver"
          description="An AR game built with Spark AR where you play as a penguin stuck on a beach whose
          objective is to avoid plastic debris. This game was built to remind people of pollution caused by plastic."
          link="https://zazuafrica.com/"
        />
        <ProjectItem
          img={saveALife}
          title="Save a life"
          description="'Save a life' is an application that teaches you CPR in a modern way, and empowers you to
           help save someone’s life! This project was built during the FACEBOOK global hackathon."
          link="https://devpost.com/software/save-a-life-3ui4yt"
        />
      </div>
    </div>
  )
}

export default Projects
