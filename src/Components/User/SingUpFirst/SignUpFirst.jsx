import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignUpFirst() {

    const navigate=useNavigate();
    const handleClick=(()=>{
        navigate('/signup')
    })

  return (
    <>
    {/* <!-- Button trigger modal --> */}
<button type="button" class="btn_class text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Apply Now
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Registration</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Do Sign-up First</h5>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button onClick={handleClick} type="button" data-bs-dismiss="modal" class="btn_class">Sign-up</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default SignUpFirst
