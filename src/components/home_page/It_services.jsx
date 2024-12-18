import React from 'react'
import { service } from "../../It_service";


const It_services = () => {
  return (
    <div>
        <h2>{service.itname}</h2>
        <h2>{service.name}</h2>
      <h1 className='bg-red-400'> hello</h1>

    </div>
  )
}

export default It_services
