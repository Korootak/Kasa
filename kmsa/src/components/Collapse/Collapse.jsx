import { useState } from 'react';
import ArrowDown from '../UI-Elements/icons/ArrowDown';
import ArrowUp from '../UI-Elements/icons/ArrowUp';
import './collapse.css'
function Collapse({title , body}) {
  const [isOpen , setIsOpen] = useState(false);
    return (
      <div className='collapse'>
       <div className="collapse-header" onClick={() => {
          setIsOpen(!isOpen);
        }}>
        <div>{title}</div>
        <div>
          {
            !isOpen ? (
              <ArrowUp />
              ) : (
              <ArrowDown />
              
            )
          }
        </div>
       </div>
       {
         isOpen ? 
         (
         <div className="collapse-body">
              {body}
        </div>
        ) 
        :
        null
       }
      </div>
    );
  }
  
  export default Collapse;
  