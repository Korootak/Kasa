import { useState } from 'react';
import './collapse.css'
function Collapse({title}) {
  const [isOpen , setIsOpen] = useState(false);
    return (
      <div className='collapse'>
       <div className="collapse-header" onClick={() => {
          setIsOpen(!isOpen);
        }}>
        <div>Collapse Title</div>
        <div>
          {
            !isOpen ? (
            <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.66344 0.859489L0.530518 3.00462L12.4604 14.9233L24.3903 2.99257L22.2574 0.859489L12.4604 10.6572L2.66344 0.859489Z" fill="white"/>
            </svg>
            ) : (
              <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white"/>
              </svg>
            )
          }
        </div>
       </div>
       {
         isOpen ? 
         (
         <div className="collapse-body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident unde doloribus, ut magnam quam doloremque deleniti soluta non dolorem mollitia.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae culpa consequuntur ad quidem pariatur deserunt officiis, aperiam praesentium, soluta itaque sequi fugiat in accusamus excepturi accusantium blanditiis adipisci architecto. Nam animi optio impedit voluptates saepe nostrum ad iusto laudantium expedita quas corrupti tempora autem, rem blanditiis hic amet architecto voluptas rerum consectetur labore? Vitae quos eaque sed nisi? Nam, quaerat doloremque eveniet optio tenetur dicta nulla ullam perspiciatis ducimus voluptatem. Placeat tempore non quas, error, sit ex pariatur ad, hic dolore mollitia autem illo ab rem voluptates minima. Natus nemo rem voluptatem esse. Quas consectetur recusandae quia voluptatum similique!
        </div>
        ) 
        :
        null
       }
      </div>
    );
  }
  
  export default Collapse;
  