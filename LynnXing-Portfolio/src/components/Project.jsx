import React from 'react';
import ProjectItem from './ProjectItem';

// Electrolit image
import Electrolit1 from '/src/assets/Electrolit1Project.png';
import Electrolit2 from '/src/assets/Electrolit2Project.png';
import Electrolit3 from '/src/assets/Electrolit3Project.png';
import Electrolit4 from '/src/assets/Electrolit4Project.png';
import Electrolit5 from '/src/assets/Electrolit5Project.png';

// Dell
import Dell1 from '/src/assets/DellSc1Project.jpg';
import Dell2 from '/src/assets/DellSc2Project.jpg';
import Dell3 from '/src/assets/DellSc3Project.jpg';
import Dell4 from '/src/assets/DellSc4Project.jpg';



const Project = () => {
  const projects = [
    {
      images: [Electrolit1, Electrolit2, Electrolit3, Electrolit4, Electrolit5],
      title: 'Electrolit NACS 2024',

    },
    {
      images: [Dell1, Dell2, Dell3, Dell4],
      title: 'Dell SC 2024',

    },
    {
      images: [Electrolit3, Electrolit4, Electrolit5],
      title: 'Portfolio',

    },
    {
      images: [Electrolit4, Electrolit5, Electrolit1],
      title: 'Chess Game',

    },
    {
      images: [Electrolit5, Electrolit1, Electrolit2],
      title: 'Another Project',
    }
  ];

  return (
    <div id='project' className='max-w-[1048px] m-auto md:pl-1 p-1 py-16'>
      <div className='grid sm:grid-cols-1 gap-16'>
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            images={project.images}
            title={project.title}

          />
        ))}
      </div>
    </div>
  );
};

export default Project;