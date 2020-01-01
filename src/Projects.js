import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div className="projects-container">
      <p className="heading">Projects</p>
      <div className="project-item-list">
        <ProjectItem
          title="Zazu mobile app"
          description="A digital wallet that helps you send money to your friends, pay bills and save money.
        It can be paired to a debit card powered by MasterCard."
          link="https://zazuafrica.com/"
        />
        <ProjectItem
          title="Zazu website"
          description="Official website for Zazu Africa Limited, A fintech startup that is helping people in
        Zambia learn about financial literary and improve they way they save and spend money."
          link="https://zazuafrica.com/"
        />
        <ProjectItem
          title="Project Zed"
          description="Platform to showcase projects built by developers from Zambia, both open and closed
          source. Once users log in, they can submit new projects as well as like other projects."
          link="https://github.com/WillzMu/project-zed"
        />
        <ProjectItem
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
