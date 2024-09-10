
import { Link } from 'react-router-dom';
// type Props = {}

const MenuCategories = () => {
  return (
    <ul className='border p-4 rounded-lg text-red-700 font-semibold'>
    <li className='hover:bg-red-700 hover:text-white rounded-md'>
      <Link className='block p-2' to="/">Category 01</Link>
    </li>
    <li className='hover:bg-red-700 hover:text-white rounded-md'>
      <Link className='block p-2' to="/">Category 02</Link>
    </li>
    <li className='hover:bg-red-700 hover:text-white rounded-md'>
      <Link className='block p-2' to="/">Category 03</Link>
    </li>
    <li className='hover:bg-red-700 hover:text-white rounded-md'>
      <Link className='block p-2' to="/">Category 04</Link>
    </li>
    <li className='hover:bg-red-700 hover:text-white rounded-md'>
      <Link className='block p-2' to="/">Category 05</Link>
    </li>
  </ul>
  
  )
}

export default MenuCategories