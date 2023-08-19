import { Link, NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className=' bg-sky-500 min-h-[100vh]  h-full  px-10 py-10'>
      <nav className='text-white py-4 block font-bold'>
        <p className='py-3 border-t'>
          <NavLink  to='/' >
            CONTACTS
          </NavLink>
        </p>
        <p className='py-3 border-t border-b'>
          <NavLink to='/dashboard' >
            CHARTS & MAPS
          </NavLink>
        </p>
      </nav>
    </div>
  )
}
export default Sidebar