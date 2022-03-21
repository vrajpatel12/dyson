import React,{useState} from 'react'
import Image from 'next/image'
import Label from './Label';

const Galaary = () => {
    const [image,setImage] = useState(1);
  return (
    <div role="banner" className='gallary'>
        {
            image===1?<div role={"figure"} className="main-img">
        <img src="/hero-01.png" ></img>
        <Label></Label>
        </div>:image==2?
        <div role={"figure"} className="main-img">
          <Label></Label>
        <img src="/hero-02.png" ></img>
        </div>:image==3?
        <div role={"figure"} className="main-img">
          <Label></Label>
        <img src="/hero-03.png" ></img>
        </div>:
        <div role={"figure"} className="main-img">
          <Label></Label>
        <img src="/hero-04.png" ></img>
        </div>
        }
        <div role={"slider"} className="list-img">
        <div onClick={()=>setImage(1)} role={"figure"} className={`img ${image===1?"active":null}`}>
        <img src="/hero-01.png" ></img>
        </div>
        <div onClick={()=>setImage(2)} role={"figure"} className={`img ${image===2?"active":null}`}>
        <img src="/hero-02.png" ></img>
        </div>
        <div onClick={()=>setImage(3)} role={"figure"} className={`img ${image===3?"active":null}`}>
        <img src="/hero-03.png" ></img>
        </div>
        <div onClick={()=>setImage(4)} role={"figure"} className={`img ${image===4?"active":null}`}>
        <img src="/hero-04.png" ></img>
        </div>
        </div>
    </div>
  )
}

export default Galaary