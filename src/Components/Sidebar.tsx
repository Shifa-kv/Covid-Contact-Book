import { Link, NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className=' bg-sky-500 md:min-h-[100vh] h-full px-10 md:py-10'>
      <nav className='text-white py-4 md:block max-md:flex max-md:space-x-3 font-bold'>
        <p className='py-3 md:border-t max-md:border-r max-md:pr-3'>
          <NavLink to='/' >
            CONTACTS
          </NavLink>
        </p>
        <p className='py-3 md:border-t md:border-b'>
          <NavLink to='/dashboard' >
            COVID OVERVIEW
          </NavLink>
        </p>
      </nav>
    </div>
  )
}
export default Sidebar