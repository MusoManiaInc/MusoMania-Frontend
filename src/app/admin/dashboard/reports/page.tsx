import { fetchAllReports } from '@/actions/reports'
import {ReportsDataTable} from '@/components/admin/reports-data-table'
import React from 'react'

type Props = {}

const Reports = async (props: Props) => {
  const findAllReports = await fetchAllReports();
  return (
    <main className="flex w-full min-w-0">
            <div className="w-full min-w-0  bg-[#f9fbfc]">
              <div className="mt-10 ml-10 pb-6">
                <h1 className='text-4xl font-semibold'>Reports Page</h1> 
                <span className='text-gray-600'>Configure all your reports</span>
              </div>
                <ReportsDataTable reports={findAllReports}/>
            </div>
        </main>
  )
}

export default Reports