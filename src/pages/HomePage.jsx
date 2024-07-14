import React, { useEffect, useMemo, useState } from "react";
import HeroContainer from "../components/HeroContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "../components/MenuContainer";
import CartContainer from "../components/CartContainer";
import { foodItemsData } from "../utils/data";
import SliderContainer from "../components/SliderContainer";

import b1 from '../img/b1.jpg'
import b2 from '../img/b2.jpg'
import b3 from '../img/b3.jpg'
import logo from '../img/logo.png'

const HomePage = () => {
  // const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [foodItems, setFoodItems] = useState([])
  const [scrollValue, setScrollValue] = useState(0);
  const data = useMemo(() => foodItemsData, [foodItemsData])
  useEffect(() => {

    setFoodItems(data)
  }, [data])
  useEffect(() => { }, [scrollValue]);
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HeroContainer />
      <SliderContainer />
      <div className="flex lg:flex-row flex-col lg:justify-evenly items-center w-full lg:py-16 gap-10">
        <div className="rotate-45">
          <div className="flex items-center border gap-2 mb-2">
            <div className="rounded-lg w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] relative">
            <img src={logo} className="w-16 object-cover -rotate-45 absolute top-6 left-6" alt="logo" />
            </div>
            <div className="rounded-lg w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] overflow-hidden">
              <div>
              <img src={b1} alt="" className="w-full object-fill"/>
              </div>
             
            </div>
          </div>
          <div className="flex items-center border gap-2">
          <div className="rounded-lg w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] overflow-hidden">
              <div className="">
              <img src={b2} alt="" className="w-full object-fill"/>
              </div>
             
            </div>
            <div className="rounded-lg w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] overflow-hidden">
              <div>
              <img src={b3} alt="" className="w-full object-fill"/>
              </div>
             
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 ps-14">
          <h1 className="text-[2rem] lg:text-[3.5rem] tracking-wide leading-tight">Our Special Service Fresh Meal</h1>
          <p className="my-4 text-lg"><strike>$20.00</strike>  <b> $18.00</b></p>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
          >
            Shop Now
          </button>
        </div>
      </div>
      <MenuContainer />

      {/* {cartShow && <CartContainer />} */}
    </div>
  );
};

export default HomePage;
