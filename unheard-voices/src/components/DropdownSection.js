import React from 'react';

function DropdownSection({ title, content }) {
  return (
    <details className="dropdown-section">
      <summary className="dropdown-summary">{title}</summary>
      <p>{content}</p>
    </details>
  );
}

export default DropdownSection;
