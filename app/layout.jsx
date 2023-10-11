import './globals.css';

import { GiGamepadCross } from 'react-icons/gi';

import SearchBox from './SearchBox';
import HeaderNav from './HeaderNav';
import HeaderInfo from './HeaderInfo';
import SideNav from './SideNav';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
          <div className='flex flex-col h-screen w-full'>
            <header className='flex items-center text-blue-100 justify-between bg-gradient-to-r from-blue-500 to-blue-600 h-14 drop-shadow-md'>
              <div className='flex justify-start items-center'>
                <span className='flex justify-center w-16'>
                  <GiGamepadCross size={35}/>
                </span>
                <HeaderNav/>
              </div>
              <SearchBox/>
              <HeaderInfo/>
            </header>
            <main className='grid grid-cols-[64px_1fr] h-[calc(100vh-56px)] w-full'>
              <aside className='flex flex-col justify-start w-16 bg-slate-800'>
                <SideNav/>
                <div className='flex flex-col justify-start items-center mt-auto mb-4'>
                  <span className='text-xs mb-2 text-slate-400'>EN</span>
                  <figure className='h-7 w-7 rounded-full overflow-hidden bg-slate-200'>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/2560px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png" 
                      alt="" 
                      className='w-full h-full'
                    />
                  </figure>
                </div>
              </aside>
              <section className='flex-1 p-4 bg-slate-900 overflow-y-scroll'>
                { children }
              </section>
            </main>
          </div>
      </body>
    </html>
  );
}

