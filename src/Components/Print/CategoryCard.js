import React from 'react'

const CategoryCard = () => {
  return (
    <div className='container'>
         <div className='polygon'>
            <img src='../Print/Union.jpg' alt='hello'/>
        </div>
        <div className='mid_section'>
            <p className='first_word'>PAPER PRINTS</p>
            <p className='second_word'>Top quality paper prints in Qatar</p>
        </div>
        <div className='last_section'>
            <button>VIEW ALL</button>
            <div className='left_and_right'>
                <span className='left_arrow'> {"<"}</span>
                <span className='right_arrow'>{">"}</span>
            </div>
        </div>
    </div>
  )
}

export default CategoryCard