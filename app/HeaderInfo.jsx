import { FaBell } from 'react-icons/fa';
import { RiSettings3Fill } from 'react-icons/ri';
import { GiSwordsEmblem } from 'react-icons/gi';

export default function HeaderInfo() {
  return (
    <div className='flex items-center justify-start'>
      <span className='flex items-center justify-center  h-6 w-10 border-r border-blue-400'>
        <FaBell/>
      </span>
      <div className='flex mx-4 justify-start items-center'>
        <figure className='h-8 w-8 mr-4 rounded-full overflow-hidden bg-blue-500'>
          <img 
            src="https://api.dicebear.com/5.x/miniavs/svg" 
            alt="" 
            className='w-full'
          />
        </figure>
        <div className='flex justify-start items-center'>
          <span className='text-slate-800'>
            <GiSwordsEmblem/>
          </span>
          <div className='w-20 h-1 ml-2 rounded-md overflow-hidden bg-blue-400'> 
            <div className='h-full w-1/3 bg-blue-100 rounded-md'></div>
          </div>
        </div>
      </div>
      <span className='flex justify-center items-center h-6 w-10 border-l border-blue-400 '>
        <RiSettings3Fill className='animate-spin'/>
      </span>
    </div>
  );
}