import { headers } from 'next/dist/client/components/headers'
import Image from 'next/image'
import { projectList } from './projects'

import styles from './page.module.css'

export default function Home() {
  return (
  <body className={styles.body}>
  <Header/>
  <Main/>
  </body>
  )
}
function Main(){
  return (
    <main id={styles.main}>
      <Intro/>
      <Projects/>
    </main>
  )
}

function Header() {
  return (
    <header id={styles.header}>
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
  <div className={styles.projectElt} id={ 'project ' + projectId }>
    <h4 id={styles.projectName}>{ name }</h4>
    <Image
      src={ imgLink }
      alt={ 'project-' + projectId + ' image'}
    />
    <p id={styles.projectDesc}>{ desc }</p>
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
  <div id={styles.projects}>
    <h2>Projects</h2>
    <p></p>
    <div id={styles.projectsContainer}>
    {allProjectsDiv}
    </div>
  </div>
  )
}

