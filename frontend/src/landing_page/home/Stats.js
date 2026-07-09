import React from 'react';

function Stats() {
    return (
        <div className="container p-3">
            <div className="row  p-5">
                <div className='col-6  p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Trust with confidence </h2>
                    <p className='text-muted'>Trust with confidence with heading two Trust with confidence with heading two heading two Trust with confidence with heading two</p>
                    <h2 className='fs-4'>Trust with confidence</h2>
                    <p className='text-muted'>Trust with confidence with heading two Trust with confidence with heading two heading two Trust with confidence with heading two</p>
                    <h2 className='fs-4'>Trust with confidence</h2>
                    <p className='text-muted'>Trust with confidence with heading two Trust with confidence with heading two heading two Trust with confidence with heading two</p>
                    <h2 className='fs-4'>Trust with confidence</h2>
                    <p className='text-muted'>Trust with confidence with heading two Trust with confidence with heading two heading two Trust with confidence with heading two</p>
                </div>
                <div className='col-6 '>
                    <img src="media/images/ecosystem.png" alt="img" style={{width:"90%"}}/>
                    <div className="text-center ">
                        <a href="" className='mx-4' style={{textDecoration:"none"}}>Explore our products <i class="fa fa-long-arrow-right"></i></a>
                        <a href="" style={{textDecoration:"none"}}>Try kite demo <i class="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;