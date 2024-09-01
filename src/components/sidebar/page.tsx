import Link from 'next/link';
import { FaList } from 'react-icons/fa';
import { IoHomeOutline, IoPower } from 'react-icons/io5';
import {
  MdOutlineIncompleteCircle,
  MdOutlinePadding,
  MdOutlinePerson,
} from 'react-icons/md';
import { TbUser } from 'react-icons/tb';

const Sidebar = () => {
  return (
    <div className='h-[100vh] shadow-xl'>
      <h3 className='flex justify-center font-semibold m-2 text-2xl'>
        DashBoard
      </h3>
      <ul className='flex flex-col items-center text-[15px] text-left space-y-10 mt-10'>
        <li className='flex items-center text-left hover:text-slate-300 cursor-pointer font-semibold'>
          <IoHomeOutline className=' text-2xl mr-2' />
          Home
        </li>
        <Link href='/admin/users'>
        <li className='flex items-center text-left hover:text-slate-300 cursor-pointer font-semibold'>
          <TbUser className=' text-2xl mr-2' />
          Users
        </li>
        </Link>

        <Link href='/admin/users'>
          <li className='flex items-center text-left hover:text-slate-300 cursor-pointer font-semibold'>
            <IoHomeOutline className=' text-2xl mr-2' />
            Home
          </li>
        </Link>
        <Link href='/Products'>
        <li className='flex items-center text-left hover:text-slate-300 cursor-pointer font-semibold'>
          <FaList className=' text-2xl mr-2' />
          Products
        </li>
        </Link>
        <Link href='/Completed'>
        
        <li className='flex items-center text-left hover:text-slate-300 cursor-pointer font-semibold'>
          <MdOutlineIncompleteCircle className=' text-2xl mr-2' />
          Completed
        </li>
        </Link>
        <li className='flex items-center text-left hover:text-slate-300 cursor-pointer font-semibold'>
          <MdOutlinePadding className=' text-2xl mr-2' />
          Pending
        </li>
        <li className='flex items-center text-left hover:text-slate-300 cursor-pointer font-semibold'>
          <MdOutlinePerson className=' text-2xl mr-2' />
          Profile
        </li>
        <li className='flex items-center text-left hover:text-slate-300 cursor-pointer font-semibold'>
          <IoPower className=' text-2xl mr-2' />
          Logout
        </li>
      </ul>
      <Link href='/'></Link>
    </div>
  );
};
export default Sidebar;
