import React from 'react';

const SkillFigure = ({skill}) => {
  const {imgURL, caption} = skill;
  return (
    <div className="text-center">
      <img src={imgURL} alt="" style={{width:'40px'}}/>
      <figcaption>{caption}</figcaption>
    </div>
  );
};

export default SkillFigure;