import React, { ComponentType, useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { UserRole } from '@/types/roles'
import Modal from '../Modal'
import { AuthContext } from '@/component/context/AuthContext'

function RoleBasedAccess<P>(
  Component: ComponentType<P>,
  allowedRoles: UserRole[]
) {
  const WithRoleAccess = (props: React.PropsWithChildren<P>) => {
    //props: React.PropsWithChildren<P>: avoids Type 'P' is not assignable to type 'IntrinsicAttributes & P'.
    //Type 'P' is not assignable to type 'IntrinsicAttributes'.ts(2322) (parameter) Component: React.ComponentType<P>
    //This error typically arises when TypeScript struggles to reconcile the types of props in the generic
    //ComponentType<P>. The P extends React.ComponentProps<any> means your P type extends the props of any component,
    //but when you try to use P directly, TypeScript expects P to also include React's IntrinsicAttributes (like key).
    //using children props allow the implicitly include instricticatrribute

    const { state } = useContext(AuthContext)

    const [showModal, setShowModal] = useState(false)

    if (!state.isAuthenticated || !allowedRoles.includes(state.role)) {
      if (!showModal) setShowModal(true)
      return createPortal(
        <Modal onClose={() => setShowModal(false)} />,
        document.body
      )
    }

    return <Component {...props} />
  }

  //For Debugging Purposes
  const componentName = Component.displayName || Component.name || 'Component'
  WithRoleAccess.displayName = `RoleBasedAccess(${componentName})`
  return WithRoleAccess
}
export default RoleBasedAccess
