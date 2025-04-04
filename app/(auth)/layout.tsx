import React, { ReactNode } from 'react'

const Authlayout = ({children}: { children:ReactNode}) => {
  return (
    <div className="auth-layout">{children}</div>
  )
}
export default Authlayout