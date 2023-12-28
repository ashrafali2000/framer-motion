"use client"
import Image from 'next/image'
import { MyComponent } from '../components/animation/myComponent';
import HumBurger from '../components/animation/amBurger';
import Slideshow from '../components/animation/slider';
import HeroSection from '../components/heroSection';
import Example1 from '../components/animation/example';
import DefaulHomeHeroSecton from '../components/defaultHome';
import SliderVideo from '../components/sliderVideos';
import PalestinBannerSection from '../components/palestinEmergency/palestionBanner';
import GhazaUnderTakDocs from '../components/palestinEmergency/gazaUnderTack';


function Home() {
  return (
    <div className='max-w-7xl mx-auto'>
      {/* <HumBurger /> */}
      {/* <h4 className="font-bold text-2xl lg:text-5xl p-5">Home Page</h4> */}
      {/* <Slideshow /> */}
      {/* <MyComponent /> */}
      {/* <Example1> */}
      {/* <HeroSection />
    </Example1> */}

      {/* Default Hoem Section */}

      {/* <DefaulHomeHeroSecton />
      <SliderVideo /> */}

      {/* Today Task 28-12-2023 */}
      {/* Palestine Emergency */}
      <PalestinBannerSection />
      <GhazaUnderTakDocs />
    </div>
  )
}
export default Home;  