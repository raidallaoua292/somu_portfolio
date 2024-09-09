'use client'

import React from 'react'
import Titel from './ui/titel'
import ProjectCrad from './ui/projectCrad'

import data from '@/data/data.json'

const projects = data.lastProject; // Replace with actual project data

const Projects = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const projectsPerPage = 4; // Number of projects to display per page

  // Logic for displaying current projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Logic for calculating total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);
  return (
    <section className='px-6 sm:px-16 bg-primary py-20 w-full min-h-screen flex flex-col items-center justify-around'>
      <Titel> آخر أعمالي</Titel>
      {/* Projects */}
      <div className='grid gap-8 md:grid-cols-2 '>
        {currentProjects.map((project,index) => (
          <ProjectCrad key={index} project={project} />
        ))}
      </div>

      <div className='mt-8 flex justify-center items-center'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 w-3 h-3 rounded-full ${
              currentPage === index + 1
                ? 'bg-secondary'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Page ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects