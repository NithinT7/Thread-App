import React from 'react'
import stock1 from '../stock-1.jpg'
const Bio = () => {
  return (
    <div className='Bio'>
        <div className="container">
            <div className="row">
                <div className="col-md-6 text">
                    <h1>Bio</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero esse ipsa quo quos quasi consectetur veritatis nobis expedita, sequi optio itaque in sunt neque voluptates? Aut non repudiandae nemo cumque? Et sed quam temporibus sit veniam doloremque rerum illum unde. Quia aliquid aliquam magni officia vero corporis velit nemo maxime enim nisi hic, perferendis ratione ullam? Similique veritatis provident voluptas asperiores, ab nam temporibus eos esse voluptatibus dolorem, nulla unde.
                    </p>
                </div>
                <div className="col-md-6">
                    <img src={stock1} alt="placeholder" className='image'style={{width: "90%", height: "90%"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bio