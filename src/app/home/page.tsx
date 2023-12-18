import Image from 'next/image'
import { MyComponent } from '../components/animation/myComponent';
import HumBurger from '../components/animation/amBurger';
import Slideshow from '../components/animation/slider';
import HeroSection from '../components/heroSection';
import Example1 from '../components/animation/example';
import DefaulHomeHeroSecton from '../components/defaultHome';


 function Home() {
  return (
<div className='flex flex-col justify-center items-center'>
    {/* <HumBurger /> */}
    {/* <h4 className="font-bold text-2xl lg:text-5xl p-5">Home Page</h4> */}
    {/* <Slideshow /> */}
    {/* <MyComponent /> */}
{/* <Example1> */}
    {/* <HeroSection />
    </Example1> */}

    {/* Default Hoem Section */}
    <DefaulHomeHeroSecton/>
</div>
  )
}
export default Home;  