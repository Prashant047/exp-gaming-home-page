import { AiFillHome } from 'react-icons/ai';
import { BsFillGridFill } from 'react-icons/bs';
import { BsFillTrophyFill } from 'react-icons/bs';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { HiDocumentText } from 'react-icons/hi';
import { SiCounterstrike } from 'react-icons/si';

export default function SideNav(){
  return (
    <ul className='flex flex-col justify-start items-center my-2 text-slate-400'>
      <SideNavItem icon={<AiFillHome />} active={true} />
      <SideNavItem icon={<BsFillGridFill />}/>
      <SideNavItem icon={<BsFillTrophyFill />} notificationDot={true} />
      <SideNavItem icon={<HiDocumentText />}/>
      <SideNavDivider/>
      <SideNavItem icon={<SiCounterstrike />}/>
      <SideNavItem icon={<BsFillPlusSquareFill />} className='bg-slate-900' />
    </ul>
  );
}

function SideNavDivider() {
  return (
    <div className='border border-b border-slate-700 w-1/3 mb-2'></div>
  );
}

function SideNavItem({ icon, notificationDot = false, className = '',  active = false }){
  return (
    <li className={`
      relative transition flex justify-center items-center mb-2 h-10 w-10 rounded-lg bg-slate-700 cursor-pointer
      ${!active?'hover:bg-slate-600':''} 
      ${active?'border-2 border-blue-500 text-blue-500': ''} 
      ${className}
      `
    }>
      { icon }
      {notificationDot && <NotificationDot/> }
    </li>
  );
}

function NotificationDot(){
  return (
    <div className='absolute top-0 right-0 w-2 h-2 translate-x-[2.5px] -translate-y-[2.5px] '>
     <div className='h-full w-full bg-red-500 rounded-full absolute'></div>
     <div className='h-full w-full bg-red-500 rounded-full animate-ping'></div>
    </div>
  )
}