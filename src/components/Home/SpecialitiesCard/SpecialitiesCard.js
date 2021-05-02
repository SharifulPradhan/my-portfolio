import React from 'react';

const SpecialitiesCard = ({speciality}) => {
  const {icon, title, description} = speciality;
  return (
    <div className="col-md-4">
      <img src={icon} alt="" style={{width:'70px'}}/>
      <div className="mt-3">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SpecialitiesCard;