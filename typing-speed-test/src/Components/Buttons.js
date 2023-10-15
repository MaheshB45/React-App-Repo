import React from 'react'
import "../index.css";
import refresh from "../Assets/refreshs.svg";


const Buttons = () => {
  return (
    <div className="buttons">

       <div className="btnGr">
          <button className='refreshBtn'><img src={refresh} alt="refresh" /></button>
       </div>
        
        <div className='btnGr1'>
          <button>esc</button><span>- reset</span>
        </div>
        
        <div className='btnGr2'>
            <button>10</button>
            <button>50</button>
            <button>80</button>
            <button>100</button>
            <span>- no. of words</span>
        </div>
    </div>
  )
}

export default Buttons