import Sidebar, { SidebarItem } from "./Sidebar"
import { LuHome, LuUser, LuMail, LuClipboardList, LuSettings } from "react-icons/lu"

export default function Sidebars() {
return (
  <Sidebar>
    <SidebarItem 
      icon={<LuHome size={20} />} 
      text="Home" 
      active={true} 
    />
    <SidebarItem 
      icon={<LuUser size={20} />} 
      text="Profile" 
    />
    <SidebarItem 
      icon={<LuMail size={20} />} 
      text="Messages" 
      alert={true} 
    />
    <SidebarItem 
      icon={<LuClipboardList size={20} />} 
      text="Tasks" 
    />
    <SidebarItem 
      icon={<LuSettings size={20} />} 
      text="Settings" 
    />
   </Sidebar>
  )
}