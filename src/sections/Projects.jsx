import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (<section id='projects'>
    <h2>Projects</h2>
    <div className='projects-grid'>
      {projects.map((p, i) => <ProjectCard key={i} project={p} />)} 
    </div>
  </section>);
}
