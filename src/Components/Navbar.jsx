import React from 'react'

const Navbar = () => {
  return (
<>
  <nav className='bg-[radial-gradient(#ffffff33_1px,#00091d_1px) text-white flex justify-between items-center px-10 h-10  border-y-4 border-green-700'
  >
    <div className="logo font-bold">PassCode</div>
  <ul>
<li className='flex gap-4'>
    <a className='hover:bg-green-300 font-bold hover:text-black' href='/'>Home</a>
    <a className='hover:bg-green-300 font-bold hover:text-black' href='#'>About</a>
    <a className='hover:bg-green-300 font-bold hover:text-black' href='#'>FeedBack</a>
</li>
  </ul>
  </nav> 
</>
  )
}

export default Navbar
