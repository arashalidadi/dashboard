import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import avatar from '../data/avatar.jpg'
import { MdKeyboardArrowDown } from "react-icons/md";
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full
          p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex
          rounded-full h-2 w-2 right-2 top-2"
      >
        {icon}
      </span>
    </button>
  </TooltipComponent>
);
const handlClick = () => {};
const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  return (
    <div
      className="flex justify-between p-2
    md:mx-6 relative"
    >
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handlClick("cart")}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor='#03C9D7'
          customFunc={() => handlClick("chat")}
          color="blue"
          icon={<BsChatLeft />}
        />
         <NavButton
          title="Notification"
          dotColor='#03C9D7'
          customFunc={() => handlClick("notification")}
          color="blue"
          icon={<RiNotification3Line />}
        />
         <TooltipComponent
         content="Profile"
         position="BottomCenter"
         >
          <div className="flex items-center
          gap-2 cursor-pointer p-1 
          hover:bg-light-gray rounded-lg"
          onClick={() => handlClick('userProfile')}
          >
            <img className="rounded-full w-8 h-8" 
            src={avatar} />
             <p>
              <span className="text-gray-400 text-40">Hi,</span>{' '}
              <span className="text-gray-400 font-bold
              ml-1 text-14">Michael</span>
             </p>
             <MdKeyboardArrowDown 
             className="text-gray-400 text-40"
             />
          </div>

         </TooltipComponent>
      </div>
    </div>
  );
};

export default Navbar;
