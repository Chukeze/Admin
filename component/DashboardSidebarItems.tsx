import { UserRole } from '@/types/roles';
import RoleBasedAccess from './hoc/RoleBasedAccess';
import { DashboardSidebarProps } from './DashboardSidebar';

const AdminSideBarItems = ({ changeActivePanel }: DashboardSidebarProps) => {
  function handleDisplayRevenuePanel(
    event: React.MouseEvent<HTMLButtonElement>
  ): void {
    changeActivePanel('revenue')
  }

  function handleDisplaySalesPanel(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    changeActivePanel('sales')
  }

  function handleDisplayProductivityPanel(): void {
    changeActivePanel('productivity')
  }

  function handleDisplayInventoryPanel(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    changeActivePanel('inventory')
  }

  function handleDisplayEquipmentAnalysisPanel(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    changeActivePanel('equipment analysis')
  }

  return (
    <ul>
      <li>
        <button onClick={handleDisplayRevenuePanel}> Revenue</button>
      </li>
      <li>
        <button onClick={handleDisplaySalesPanel}>Sales</button>
      </li>
      <li>
        <button onClick={handleDisplayProductivityPanel}>Productivity</button>
      </li>
      <li>
        <button onClick={handleDisplayInventoryPanel}>Inventory</button>
      </li>
      <li>
        <button onClick={handleDisplayEquipmentAnalysisPanel}>
          Equipment Analysis
        </button>
      </li>
    </ul>
  )
}

const  HRSideBarItems = ({changeActivePanel}:DashboardSidebarProps) => {
    function handleDisplayRevenuePanel(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        changeActivePanel('');
    }

    function handleDisplayPayrollPanel() {
        changeActivePanel('payroll');
    }

    function handleDisplayEmployeeManagementPanel(): void {
        changeActivePanel('');
    }

        return(
        <ul>
            <li><button onClick={handleDisplayRevenuePanel}>revenue</button></li>
            <li><button onClick={handleDisplayPayrollPanel}>Payroll</button></li>
            <li><button onClick={handleDisplayEmployeeManagementPanel}>Employee Management</button></li>
        </ul>
    )
}

const SalesSideBarItems = ({ changeActivePanel }: DashboardSidebarProps) => {
  function handleDisplayRevenuePanel(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    changeActivePanel('')
  }

  function handleDisplayPayrollPanel() {
    changeActivePanel('payroll')
  }

  function handleDisplayEmployeeManagementPanel(): void {
    changeActivePanel('')
  }

  return (
    <ul>
      <li>
        <button onClick={handleDisplayRevenuePanel}>revenue</button>
      </li>
      <li>
        <button onClick={handleDisplayPayrollPanel}>Payroll</button>
      </li>
      <li>
        <button onClick={handleDisplayEmployeeManagementPanel}>
          Employee Management
        </button>
      </li>
    </ul>
  )
}

const MaintenanceSideBarItems = ({ changeActivePanel }: DashboardSidebarProps) => {
  function handleDisplayRevenuePanel(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    changeActivePanel('')
  }

  function handleDisplayPayrollPanel() {
    changeActivePanel('payroll')
  }

  function handleDisplayEmployeeManagementPanel(): void {
    changeActivePanel('')
  }

  return (
    <ul>
      <li>
        <button onClick={handleDisplayRevenuePanel}>revenue</button>
      </li>
      <li>
        <button onClick={handleDisplayPayrollPanel}>Payroll</button>
      </li>
      <li>
        <button onClick={handleDisplayEmployeeManagementPanel}>
          Employee Management
        </button>
      </li>
    </ul>
  )
}

const EngineerSideBarItems = ({ changeActivePanel }: DashboardSidebarProps) => {
  function handleDisplayRevenuePanel(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    changeActivePanel('')
  }

  function handleDisplayPayrollPanel() {
    changeActivePanel('payroll')
  }

  function handleDisplayEmployeeManagementPanel(): void {
    changeActivePanel('')
  }

  return (
    <ul>
      <li>
        <button onClick={handleDisplayRevenuePanel}>revenue</button>
      </li>
      <li>
        <button onClick={handleDisplayPayrollPanel}>Payroll</button>
      </li>
      <li>
        <button onClick={handleDisplayEmployeeManagementPanel}>
          Employee Management
        </button>
      </li>
    </ul>
  )
}

export const AdminAccess = RoleBasedAccess(AdminSideBarItems, [
  UserRole.ADMIN
])

export const HRAccess = RoleBasedAccess(HRSideBarItems, [
  UserRole.HR
])

export const SalesAccess = RoleBasedAccess(SalesSideBarItems, [
  UserRole.SALES
])

export const MaintenanceAccess = RoleBasedAccess(MaintenanceSideBarItems, [
  UserRole.MAINTENANCE
])

export const EngineerAccess = RoleBasedAccess(EngineerSideBarItems, [
  UserRole.ENGINEER
])

