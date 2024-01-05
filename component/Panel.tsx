type PanelProps = {
    activePanel: string;
};

function Panel({activePanel}: PanelProps) {
    switch (activePanel.toLowerCase()) {
      case 'revenue':
        return <RevenuePanel />
      case 'sales':
        return <SalesPanel />
      case 'productivity':
        return <ProductivityPanel />
      case 'equipment analysis':
        return <EquipmentAnalysisPanel />
      case 'employee management':
        return <EmployeeManagementPanel />
      case 'payroll':
        return <PayrollPanel />
      case 'inventory':
        return <InventoryPanel />
      case 'market Analysis':
        return <MarketAnalysisPanel />
      case 'orders':
        return <OrdersPanels />
      default:
        return <section></section>
    }
}
export default Panel