import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchRes } from './Api/Api';
const Res = () => {
    const [list,setList] = useState();
const {id} = useParams();

const getResData = async ()=>{
    try{
        const res = await fetchRes();
        console.log(res)
        setList(res.data.data.cards)
    }catch(e){
        console.log('getResData error:', e)
    }
}

useEffect(()=>{
getResData()
})


  return (
    <div>
        
    </div>
  )
}

export default Res