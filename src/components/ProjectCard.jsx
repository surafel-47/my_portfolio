export default function ProjectCard({ project }) {
  return (<div className='project-card'>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <a href={project.link} target='_blank'>View</a>
  </div>);
}
