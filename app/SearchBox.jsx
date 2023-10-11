import { MdSearch } from 'react-icons/md';

export default function SearchBox(){

  return (
    <div className="inline-flex rounded-md w-80 h-8 m-1 bg-blue-600 text-blue-300 overflow-hidden">
      <input
        type="text" 
        placeholder='Search'
        className={`
          flex-1 h-full bg-transparent outline-none p-4 text-sm
          placeholder:text-sm placeholder:text-blue-300
        `}
      />
      <span className='flex-none flex justify-center items-center w-8 h-8'>
        <MdSearch/>
      </span>
    </div>
  )

}