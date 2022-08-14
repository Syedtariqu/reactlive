import React from 'react'
import Card from './Card'
import Sdata from "./Sdata";

const Service=()=> {
  return (
   <>
               <div className='my-4'>
                    <h1 className=' text-center'>
                         Our Service
                    </h1>
                    <div className=' container-fluid mb-5 '>
                         <div className='row'>
                              <div className=' col-10 mx-auto'>
                                   <div className='row gy-4 my-1'>
                       
                       {
                        Sdata.map((val,index)=>{
                         return <Card 
                         key={index}
                          imgsrc={val.imgsrc}
                          title ={val.title}
                         />
                        })
                       }
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
   </>
  )
}

export default Service