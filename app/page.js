import { headers } from 'next/dist/client/components/headers'
import Image from 'next/image'
import Link from 'next/link'
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
    console.log(gitHubLink)
    <div className={styles.backCard}>
      <p className={styles.projectDesc}>{ desc }</p>
      <Link className={styles.gitHubLogo}> href=""//href={gitHubLink? gitHubLink : "/"}
        <a>
        <Image
        src="/github-mark.svg"
        width={25}
        height={25}
        />
        </a>
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

