import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <style>
        {`
          .skills {
            background-color: #f5f5f5;
            padding: 20px;
            border-radius: 10px;
            max-width: 600px;
            margin: auto;
            text-align: center;
          }

          .skills h2 {
            font-family: 'Arial', sans-serif;
            font-size: 2em;
            margin-bottom: 20px;
            color: #333;
          }

          .skills ul {
            list-style-type: none;
            padding: 0;
          }

          .skills li {
            font-size: 1.2em;
            margin: 10px 0;
            color: #555;
            opacity: 0;
            transform: translateX(-20px);
            animation: fadeIn 0.8s forwards;
          }

          .skills li:nth-child(2) {
            animation-delay: 0.2s;
          }

          .skills li:nth-child(3) {
            animation-delay: 0.4s;
          }

          .skills li:nth-child(4) {
            animation-delay: 0.6s;
          }

          .skills li:nth-child(5) {
            animation-delay: 0.8s;
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
      <h2>Skills</h2>
      <ul>
        <li>Java</li>
        <li>Android Development</li>
        <li>Web Development</li>
        <li>Azure</li>
        <li>MySQL</li>
      </ul>
    </section>
  );
}

export default Skills;
