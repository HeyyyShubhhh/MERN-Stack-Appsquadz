import React from 'react'

const Add = () => {
  return (
    <>
    <div className="container">
        <form>
            <h2 className='fw-bold fst-italic text-center my-3'>Add task here</h2>
            <div className="d-flex justify-content-around gap-3">
                <div className="mb-3 w-100">
                    <input type="text" className='form-control'/>
                </div>
                <div className="mb-3">
                    <input type="submit" value="Add" className='btn btn-dark'/>
                </div>
            </div>
            
        </form>
    </div>
    </>
  )
}

export default Add