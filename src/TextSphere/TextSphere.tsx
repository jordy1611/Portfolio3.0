import { useEffect } from "react";

const TextSphere = () => {

  const texts = ['ReactJS', 'Hooks', 'Angular', 'JavaScript',
    'Typescript', 'Redux', 'ASP.NET', 'Node', 'Jest',
    'Linq', 'EF Core', 'SQL', 'Unit Testing', 'GraphQL', 'ES5/ES6',
    'REST', 'AWS', 'CI/CD'
  ];

  useEffect(() => {
    const tagCloud = document.querySelector('.tagcloud');
    if (!tagCloud) {
      const TagCloud = require("TagCloud");
      const container = ".content";
      TagCloud(container, texts, {
        radius: 280,
        maxSpeed: 'fast',
        initSpeed: 'fast',
        direction: 135,
        keep: true
      });
    }
  }, [])
  return (
    <span className="content"></span>
  )
}

export default TextSphere