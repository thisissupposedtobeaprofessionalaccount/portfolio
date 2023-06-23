import { headers } from 'next/dist/client/components/headers'
import Image from 'next/image'
import { projectList } from './projects'

export default function Home() {
  return (
  <>
  <Header/>
  <Intro/>
  <Projects/>

  </>
  )
}


function Header() {
  return (
    <header id='header'>
      <h1>Hugo Marin</h1>
    </header>
  )
}

function Intro() {
  return(
  <div id='intro'>
    <p>Lorem ipsum etc c'est juste pour avoir un text qui remplit tout cela</p>
  </div>
  )
}

function ProjectElt({ projectId, name = "default project", desc="default description", imgLink = "", gitHubLink = "" }){
  return (
  <div class='project-elt' id={ 'project-' + projectId }>
    <h4>{ name }</h4>
    <Image
      src={ imgLink }
      width={500}
      height={500}
      alt={ 'project-' + projectId + ' image'}
    />
    <p class='project-desc'>{ desc }</p>
  </div>
  )
}

function Projects(){
  const allProjectsDiv = projectList.map((project, index) => 
    <ProjectElt projectId={ index+1 }
    name={ project.name } 
    desc={project.desc} 
    imgLink={ project.imgLink } 
    gitHubLink={ project.gitHubLink }
    />
  )
  return (
  <div>
    <h2>Projects</h2>
    <p></p>
    <div id='projects-container'>
    {allProjectsDiv}
    </div>
  </div>
  )
}

