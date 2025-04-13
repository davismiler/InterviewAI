'use client'

import { signOut } from '@/lib/actions/auth.action'
import Image from 'next/image';


const SignOutButton = () => {
  const handleSignOut = () => {
    signOut()
  }

  return (
    <>
      <button onClick={handleSignOut} title='Logout' className="flex items-center cursor-pointer gap-2 ">
      <Image src="/logout.png" alt="Logout Icon" width={38} height={32} />
     
    </button>
      </>
  );
}

export default SignOutButton
