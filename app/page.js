'use client'

import { headers } from 'next/dist/client/components/headers'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { projectList } from './projects'

import styles from './page.module.css'

export default function Home() {
  const [mode, setMode] = useState(true);

  document.addEventListener("togglemode", ()=>{
    setMode(!mode);
    
  })

  return (
  <body className={ mode ?`${styles.bodyLightMode} ${styles.body}`: `${styles.bodyDarkMode} ${styles.body}`} >
  <Header/>
  <Main/>
  </body>
  )
}
function Main(){
  const [clicked, setClicked] = useState(true);
  let iconSize = clicked ? 20 : 25;
  return (
    <main id={styles.main}>

      <button className={styles.modeBtn}
      onClick={() => {
        setClicked(!clicked);
        document.dispatchEvent(new CustomEvent("togglemode"));
      }}>
      <Image
        key={"modebtn"}
        src={clicked ? "/moon-icon.png" : "/sun-icon.png"}
        width={iconSize}
        height={iconSize}
        style={{objectFit: "cover"}}
        alt='icon of a sun or a moon for switching modes'
      />
      </button>
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
  <div id={styles.intro}>
    <h2>About me</h2>
    <p>
      Currently studying at <Link href="https://iut.univ-lyon1.fr/formation/offre-de-formations/informatique-bourg-en-bresse/dut-informatique" className={styles.outLink}>IUT Informatique Lyon 1</Link> (3rd year).
    </p>
    <p>
      I thrive in discovering new technologies and learning to use them.
    </p>
    <p>
      I mostly code in C++ and JavaScript, but I like to use other languages.
    </p>
    <p> 
      Server side application is something that passionate me.
    </p>
  </div>
  )
}

function ProjectElt({ projectId, name = "default project", desc="default description", imgLink = "", gitHubLink = "", status=-1 }){
  let statusContent;
  switch(status){
    case 0:
      statusContent = "🟠 In progress";
      break;
    case 1:
      statusContent = "🟢 Done";
      break;
    default:
    statusContent = "🔴 Not started";
    break;
  }

  return (
  <div className={styles.projectElt} id={ 'project' + projectId }>
    <div className={styles.frontCard}>
      <div className={styles.projectStatus}>
        {statusContent}
      </div>
      <h4 className={styles.projectName}>{ name }</h4>
      <Image
        key={"pjtImage"+projectId}
        src={ imgLink }
        alt={ 'project-' + projectId + ' image'}
        width={400}
        height={400}
        style={{objectFit: "cover"}}
        className={styles.projectImg}
      />
    </div>
    <div className={styles.backCard}>
      <p className={styles.projectDesc}>{ desc }</p>
      <Link href={gitHubLink.length > 0 ? gitHubLink : "/"} className={styles.gitHubLogo}>
        <Image
        src="/github-mark.svg"
        width={25}
        height={25}
        alt='github logo'
        />
      </Link>
      
    </div>
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
    status={ project.status }
    />
  )
  return (
  <div id={styles.projects}>
    <h2>Projects</h2>
    <div id={styles.projectsContainer}>
    {allProjectsDiv}
    </div>
  </div>
  )
}

