import { fetchAllReports } from '@/actions/reports'
import {ReportsDataTable} from '@/components/admin/reports-data-table'
import React from 'react'

type Props = {}

const Reports = async (props: Props) => {
  const findAllReports = await fetchAllReports();
  return (
    <main className="flex w-full min-w-0">
            <div className="w-full min-w-0  bg-[#f9fbfc]">
                
                Reports Page
                <ReportsDataTable reports={findAllReports}/>
                
            </div>
            
            

        </main>
  )
}

export default Reports