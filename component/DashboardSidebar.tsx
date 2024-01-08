import { UserRole } from '@/types/roles'
import {
  AdminAccess,
  EngineerAccess,
  HRAccess,
  MaintenanceAccess,
  SalesAccess,
} from './DashboardSidebarItems'
import RoleBasedAccess from './hoc/RoleBasedAccess'
import { useAuth } from './hooks/context/AuthContext'

export interface DashboardSidebarProps {
  changeActivePanel: (panel: string) => void
}

function DashboardSidebar({ changeActivePanel }: DashboardSidebarProps) {
  const { state } = useAuth()
  switch (state.role) {
    case UserRole.ADMIN:
      return <AdminAccess changeActivePanel={changeActivePanel} />
    case UserRole.ENGINEER:
      return <EngineerAccess changeActivePanel={changeActivePanel} />
    case UserRole.SALES:
      return <SalesAccess changeActivePanel={changeActivePanel} />
    case UserRole.HR:
      return <HRAccess changeActivePanel={changeActivePanel} />
    case UserRole.MAINTENANCE:
      return <MaintenanceAccess changeActivePanel={changeActivePanel} />
    default:
      break
  }
}

export const DashboardSidebarWithRoleAccess = RoleBasedAccess(
  DashboardSidebar,
  [
    UserRole.ADMIN,
    UserRole.HR,
    UserRole.ENGINEER,
    UserRole.MAINTENANCE,
    UserRole.SALES,
  ]
)
