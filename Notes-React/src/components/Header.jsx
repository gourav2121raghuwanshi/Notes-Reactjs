import React from 'react'

 const Header = ({handletoggleDarkMode}) => {
  return (
    <div className='flex items-center justify-between m-4 '>
    <h1 className='font-bold text-3xl'>Notes</h1>
    <button onClick={()=>handletoggleDarkMode((prevDarkMode)=>!prevDarkMode)}
         
          className='save bg-[#e1e1e1] border-none rounded-[15px] px-[10px] py-[5px] hover:cursor-pointer hover:bg-[#ededed]'
        >
          Toggle Mode
        </button>
    </div>
  )
}
export default Header;
