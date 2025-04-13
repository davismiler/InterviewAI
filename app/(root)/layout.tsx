import React, { ReactNode } from 'react'
import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import HomeLoginbtn from '@/components/HomeLoginbtn';
const Rootlayout = async ({children} : {children: ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();
      if (isUserAuthenticated) redirect('/dashboard');
  return (
    <div className='root-layout'>
      <nav className='flex items-center justify-between   shadow'>
        <Link href="/dashboard" className='flex items-center gap-2' >
        <Image src="/logo.svg" alt="Logo" width={38} height={32}/>
        <h2 className='text-primary-100'>IntervueAI</h2>
        </Link>
        
       <Link href="/sign-in">
        <HomeLoginbtn /></Link>
      </nav>
      {children}
    </div>
  )
}

export default Rootlayout