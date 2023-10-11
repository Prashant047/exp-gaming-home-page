import { FaUser } from 'react-icons/fa';
import { FaStopwatch } from 'react-icons/fa';
import { FaTrophy } from 'react-icons/fa';

export default function EventCard({ img, name }){
  return (
    <article className="text-slate-200 bg-slate-800 rounded-md overflow-hidden">
      <div className="flex flex-col justify-start p-3">
        <figure className="bg-slate-700 aspect-[5/3] rounded-md overflow-hidden mb-3">
          <img 
            src={img} 
            alt="" 
            className=" w-full h-full object-cover object-center"
          />
        </figure>
        <h4 className="text-xs text-slate-500 font-semibold">
          <span className="uppercase">sep 02 &#x2022; </span>
          <span >Starging at 6:00 AM</span>
        </h4>
        <h2 className="text-md font-bold">
          { name }
        </h2>
        <TagContainer> 
          <Tag>COD Warzone</Tag>
          <Tag>PC</Tag>
          <Tag>Invitational</Tag>
        </TagContainer>
        <DetailsContainer>
          <Detail icon={<FaTrophy/>} info={"Prize Pool"} value={"$400"} /> 
          <Detail icon={<FaUser/>} info={"Team Size"} value={"3VS3"}  /> 
          <Detail icon={<FaStopwatch/>} info={"Participants"} value={"13/256"}  /> 
        </DetailsContainer>
      </div>
      <footer className='flex gap-2 bg-slate-700 border-t border-slate-500 p-3'>
        <div className='flex flex-1 gap-2 justify-start items-center'>
          <figure className='bg-slate-800 h-10 w-10 rounded-full overflow-hidden '>
            <img src="https://api.dicebear.com/5.x/adventurer/svg" alt="" />
          </figure>
          <div className='flex flex-col'>
            <small className='leading-none text-xs text-slate-500'>Organized by</small>
            <strong>Alex</strong>
          </div>
        </div>
        <button className='transition flex-1 bg-blue-500 hover:bg-blue-600 rounded-md'>Event Details</button>
      </footer>
    </article>
  )
}

function DetailsContainer({ children }){
  return (
    <ul className='flex justify-start pt-3 border-t border-slate-500'>
      { children }
    </ul>
  );
}

function Detail({ info, value, icon }){
  return (
    <li className='flex flex-col justify-start items-start mr-4'>
      <small className='text-slate-500'>{info}</small>
      <span className='flex justify-start items-center'>
        <i>{ icon }</i>
        <b className='ml-1'>{ value }</b>
      </span>
    </li>
  );
}

function TagContainer({ children }){
  return (
    <ul className="flex flex-wrap justify-start my-3">
      { children }
    </ul>
  );
}

function Tag({ children }){
  return (
    <li className="m-1 ml-0 text-xs font-semibold text-slate-500 bg-slate-700 rounded-md p-2 border border-slate-500">{ children }</li>
  );
}