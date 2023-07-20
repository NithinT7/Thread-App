import React from 'react'
import Review from './Review'
import stock2 from '../stock-2.jpg'
const CustomerReviews = () => {
    return (
        <div className="CustomerReviews">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={stock2} alt="placeholder" className='image' style={{width: "95%", height: "85%"}}/>
                    </div>
                    <div className="col-md-6">
                        <h1>Customer Reviews</h1>
                        <div className="contents">
                            <Review />
                            <Review />
                            <Review />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerReviews