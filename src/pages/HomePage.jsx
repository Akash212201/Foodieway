import React, { useEffect, useMemo,useState } from "react";
import HeroContainer from "../components/HeroContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "../components/MenuContainer";
import CartContainer from "../components/CartContainer";
import { foodItemsData } from "../utils/data";
import SliderContainer from "../components/SliderContainer";

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
      <MenuContainer />

      {/* {cartShow && <CartContainer />} */}
    </div>
  );
};

export default HomePage;
