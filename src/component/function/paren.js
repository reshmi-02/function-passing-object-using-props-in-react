import React from 'react'
import Child from './child.js'
const Parent=()=>{
    const name="reshmi";
    const object={
        name:"passing object using prop",
        age:21
    }   
    return(
        <div>
            <Child name={name} obj={object}/>
        </div>
    )
}

export default Parent 