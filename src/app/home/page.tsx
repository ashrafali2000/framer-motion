import Image from 'next/image'
import { MyComponent } from '../components/animation/myComponent';
import HumBurger from '../components/animation/amBurger';
import Slideshow from '../components/animation/slider';


 function Home() {
  return (
<div>
    <HumBurger />
    <h4 style={{backgroundColor:"red"}}>Home Page</h4>
    <Slideshow />
    {/* <MyComponent /> */}
</div>
  )
}
export default Home;  