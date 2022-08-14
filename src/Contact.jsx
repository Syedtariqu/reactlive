import React, { useState } from 'react'

const Contact = () => {
  const [data, setData] = useState(
    {
      name: "",
      phone: "",
      email: "",
      msg: "",

    }
  )
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      }
    })
  }
  const fromSubmit = (e) => {
    e.preventDefault();
    alert(`My Name is ${data.name} , My Phone Number is ${data.phone}, My Email Id is ${data.email} & My msg for u "${data.msg}"`)
  }
  return (
    <>
      <div className='my-3'>
        <h1 className=' text-center'>Contact Us</h1>
      </div>
      <div className=' container contact_div'>
        <div className='row'>
          <div className=' col-md-6 col-10 mx-auto'>
            <form onSubmit={fromSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="text" name='name' value={data.name} onChange={inputEvent} class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Full Name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone No</label>
                <input type="number" name='phone' value={data.phone} onChange={inputEvent} class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone Number" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" name='email' value={data.email} onChange={inputEvent} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" name='msg' value={data.msg} onChange={inputEvent} id="exampleFormControlTextarea1" placeholder='Write a msg for Us...' rows="3"></textarea>
              </div>
              <div className='mb-3'>
              <button type="submit" class="btn btn-outline-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact