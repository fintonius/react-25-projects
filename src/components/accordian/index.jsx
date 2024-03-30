// single selection accordian
// multiple selection accordian

import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {

  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setenableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    // create a copy of multiple to avoid mutating the state
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    
    if(findIndexOfCurrentId === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(copyMultiple);
  }

  console.log('this is selected: ', selected, 'this is multiple ', multiple);
  return (
    <div className="wrapper">
      {/* when user clicks button it will set enableMultiSelection to true or false depending on prev state */}
      <button onClick={() => setenableMultiSelection(!enableMultiSelection)}>Enable Multiselection</button>
      <div className="accordian">
        {/* checks to make sure data is being received */}
        {data && data.length > 0 ? 
        data.map((item) => (
          <div className="item"> 
            <div 
              onClick={ enableMultiSelection ? 
                () => handleMultiSelection(item.id) 
              : () => handleSingleSelection(item.id)
            } 
              className="title" 
            >
              <h3>{item.question}</h3>
              <span>+</span>
          </div>
          {selected === item.id || multiple.indexOf(item.id) !== -1 ? 
            (<div className="">{item.answer}</div>)
            : null
          }
        </div>
        ))
        : <div>No data found</div> 
        }
      </div>
    </div>
  )
}