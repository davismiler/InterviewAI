import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation';
const Rootlayout = async ({children} : {children: ReactNode}) => {
 const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect('/');
  return (
    <div className='root-layout'>
      <nav>
        <Link href="/dashboard" className='flex items-center gap-2' >
        <Image src="/logo.svg" alt="Logo" width={38} height={32}/>
        <h2 className='text-primary-100'>IntervueAI</h2>
        </Link>
      </nav>
      {children}
    </div>
  )
}

export default Rootlayout