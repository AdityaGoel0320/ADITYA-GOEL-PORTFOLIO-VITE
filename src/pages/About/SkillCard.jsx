import React from 'react'
const SkillCard = (props) => {
  let { name, img } = props;
  return (
    <>
      <div className='skill_box'  >
        <img className='skill_img' src={img} alt={name} />
        <h5 className='skill_name'>
          {name}
        </h5>
      </div>




    </>
  )
}

export default SkillCard