import React from 'react'

const Navbar = () => {
  return (
<>
  <nav className='bg-slate-500 text-white flex justify-between items-center px-10 h-10'
  >
    <div className="logo font-bold">PassCode</div>
  <ul>
<li className='flex gap-4'>
    <a className='hover:bg-green-300 font-bold' href='/'>Home</a>
    <a className='hover:bg-green-300 font-bold' href='#'>About</a>
    <a className='hover:bg-green-300 font-bold' href='#'>FeedBack</a>
</li>
  </ul>
  </nav> 
</>
  )
}

export default Navbar
