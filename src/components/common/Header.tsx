import { useState, useEffect } from 'react';
import MenuSvg from "../icons/MenuSvg";

const Menu: React.FC = () => {
  return (
    <div className="z-10 inset-0 bg-white">
      <p className='text-9xl'>test</p>
    </div>
  )
}

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  console.log(open);

  return (
    <div className="bg-red-400 h-20 flex items-center justify-between px-6">
      <h1 className="font-bold text-2xl">THRHYPER BLOG</h1>
        <button onClick={() => setOpen(!open)}>
          <MenuSvg />
        </button>
        open: {open.toString()}
        
      {open &&
        <>
          Helloaaaaaaaaaaaaaaaa
        </>
      }
      
    </div>
  )
}
