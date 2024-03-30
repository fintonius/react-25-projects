// single selection accordian
// multiple selection accordian

import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {

  const [selected, setSelected] = useState(null);
  
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <div className="wrapper">
      <div className="accordian">
        {/* checks to make sure data is being received */}
        {data && data.length > 0 ? 
        data.map(item => <div className="item"> 
          <div onClick={() => handleSingleSelection(item.id)} className="title">
            <h3>{item.question}</h3>
            <span>+</span>
          </div>
          {
            selected === item.id ? 
            <div className="">{item.answer}</div>
            : null
          }
        </div>)
        : <div>No data found</div> }
      </div>
    </div>
  )
}