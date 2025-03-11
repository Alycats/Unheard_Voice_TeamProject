import React from 'react';
import DropdownSection from './DropdownSection'; // Assuming DropdownSection is in the same folder

function Lesson({ lessons }) {
  return (
    <div className="lesson-container">
      {lessons.map((lesson, index) => (
        <DropdownSection 
          key={index} 
          title={lesson.title} 
          content={lesson.content} 
        />
      ))}
    </div>
  );
}

export default Lesson;
