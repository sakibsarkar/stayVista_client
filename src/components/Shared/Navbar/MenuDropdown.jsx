import UseAxios from "../../../hooks/UseAxios";
import avatarImg from "../../../assets/images/placeholder.jpg";
import useAuth from "../../../hooks/useAuth";
import { useContext, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logOut } = useContext(AuthContext)
  const axios = UseAxios()
  const handleLogout = async () => {
    await logOut()
    await axios.get("/logout")

  }

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        {/* Become A Host btn */}
        <div className='hidden md:block'>
          <button className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'>
            Host your home
          </button>
        </div>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block w-[30px] h-[30px] overflow-hidden rounded-full'>
            {/* Avatar */}
            <img
              className='object-cover h-full w-full'
              referrerPolicy='no-referrer'
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt='profile'
              height='30'
              width='30'
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] min-h-[100px] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
          {
            user ?
              <div className='flex flex-col cursor-pointer'>
                <p className="block  px-4 py-3 hover:bg-neutral-100 transition font-semibold" onClick={() => handleLogout()}>LogOut</p>
                <Link className="block px-4 py-3 hover:bg-neutral-100 transition font-semibold"> Profile</Link>

              </div>

              :

              <div className='flex flex-col cursor-pointer'>
                <Link
                  to='/'
                  className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Home
                </Link>

                <Link
                  to='/login'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Login
                </Link>
                <Link
                  to='/signup'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Sign Up
                </Link>
              </div>
          }
        </div>
      )
      }
    </div >
  )
}

export default MenuDropdown
