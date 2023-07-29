import MoleContainer from '../molehill.png'
import { useEffect } from 'react'

const EmptySlot = (props) => {
    useEffect(() => {
      let interval = Math.ceil(Math.random() * 5000);
      let timer = setTimeout(() => {props.toggle(true);}, interval);
      return () => clearTimeout(timer);
    });
  
    return (
      <div>
        <img style={{'width': '30vw'}} src={MoleContainer} alt="mole hill"/>
      </div>
    );
  }

  export default EmptySlot;