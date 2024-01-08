'use client'

import { DashboardSidebarWithRoleAccess } from "@/component/DashboardSidebar"
import Panel from "@/component/Panel"
import { useState } from "react"



function Dashboard() {
    const [activePanel, setActivePanel] = useState<string>('defaultPanel')

  return (
    <section className="flex h-screen flex-row p-24">
        <aside>
            <DashboardSidebarWithRoleAccess changeActivePanel={setActivePanel} />
            </aside>
        <main className="flex-grow p-6 bg-blue-400">
            <Panel activePanel={activePanel} />
        </main>
    </section>
  )
}
export default Dashboard

