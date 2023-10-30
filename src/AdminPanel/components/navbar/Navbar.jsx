import { useContext } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";


import "./navbar.scss";
/////////////////////////////
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="relative bg-[#c0c9e4] h-[52px] border-b-2">
      <div className="absolute flex justify-around w-full top-1/2 -translate-y-[50%]">
        <div className="flex items-center gap-2">
          <input type="text" placeholder="Search..." className="rounded-lg px-1" />
          <SearchOutlinedIcon />
        </div>
        <div className="flex items-center gap-7">
          <div className="flex items-center gap-1">
            <LanguageOutlinedIcon />
            English
          </div>
          <div className="flex items-center">
            <DarkModeOutlinedIcon onClick={() => dispatch({ type: "TOGGLE" })} />
          </div>
          <div className="flex items-center">
            <FullscreenExitOutlinedIcon />
          </div>
          <div className="flex items-center">
            <NotificationsNoneOutlinedIcon />
            {/* <div className="counter">1</div> */}
          </div>
          <div className="flex items-center">
            <ChatBubbleOutlineOutlinedIcon />
            {/* <div className="counter">2</div> */}
          </div>
          <div className="flex items-center">
            <ListOutlinedIcon />
          </div>
          <div className="flex items-center">
            <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="" className="w-[30px] h-[30px] rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
