import { RxDotsHorizontal } from 'react-icons/rx';

export default function HeaderNav(){
  return (
    <ul className='flex justify-start items-center mx-4'>
      <HeaderNavItems>Leaderboard</HeaderNavItems>
      <HeaderNavItems>Shop</HeaderNavItems>
      <HeaderNavItems>Support</HeaderNavItems>
      <HeaderNavItems className={'mx-4 text-lg text-blue-400'}>
        <RxDotsHorizontal/>
      </HeaderNavItems>
    </ul>
  )
}

function HeaderNavItems({ children, className = '' }){
  return (
    <li className={`mx-1 px-2 py-1 transition cursor-pointer hover:bg-blue-600 rounded-md text-xs font-semibold text-blue-100 ${className}`}>
      { children }
    </li>
  )
}