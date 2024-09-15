import { TrackerChart } from '@/app/tracker/expense/tracker-chart'
import TrackerProgress from '@/app/tracker/expense/tracker-progress'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import React from 'react'
import { columns, Expense } from './columns'
import { DataTable } from './data-table'
import { Separator } from '@/components/ui/separator'

async function getData(): Promise<Expense[]> {
  return  [
    {
        id: "1",
        expectedAmount: 1000,
        actualAmount: 950,
        category: "Bank",
        date: new Date("2024-09-01"),
        description: "Monthly savings deposit",
        completed: true,
    },
    {
        id: "2",
        expectedAmount: 200,
        actualAmount: 250,
        category: "Emergency Fund",
        date: new Date("2024-09-02"),
        description: "Emergency car repair",
        completed: true,
    },
    {
        id: "3",
        expectedAmount: 300,
        actualAmount: 300,
        category: "Opportunity Fund",
        date: new Date("2024-09-03"),
        description: "Investment opportunity",
        completed: true,
    },
    {
        id: "4",
        expectedAmount: 75,
        actualAmount: 75,
        category: "Subscription",
        date: new Date("2024-09-04"),
        description: "Streaming service subscription",
        completed: true,
    },
    {
        id: "5",
        expectedAmount: 150,
        actualAmount: 100,
        category: "Membership",
        date: new Date("2024-09-05"),
        description: "Gym membership",
        completed: true,
    },
    {
        id: "6",
        expectedAmount: 120,
        actualAmount: 130,
        category: "Utility",
        date: new Date("2024-09-06"),
        description: "Electricity bill",
        completed: true,
    },
    {
        id: "7",
        expectedAmount: 50,
        actualAmount: 70,
        category: "Shopping",
        date: new Date("2024-09-07"),
        description: "Groceries",
        completed: true,
    },
    {
        id: "8",
        expectedAmount: 200,
        actualAmount: 180,
        category: "Travel",
        date: new Date("2024-09-08"),
        description: "Weekend getaway",
        completed: true,
    },
    {
        id: "9",
        expectedAmount: 30,
        actualAmount: 25,
        category: "Eating Out",
        date: new Date("2024-09-09"),
        description: "Dinner at a restaurant",
        completed: true,
    },
    {
        id: "10",
        expectedAmount: 60,
        actualAmount: 60,
        category: "Entertainment",
        date: new Date("2024-09-10"),
        description: "Movie tickets",
        completed: true,
    },
    {
        id: "11",
        expectedAmount: 60,
        actualAmount: 60,
        category: "Entertainment",
        date: new Date("2024-09-10"),
        description: "Movie tickets",
        completed: false,
    }
];

}

const ExpenseTrackerPage = async () => {

  const data = await getData();

  return (
    <div className='flex px-8 gap-8'>
      <div className="h-full flex flex-col gap-4 sticky left-0 top-[4.5rem] float-left w-[35%]">
        <TrackerChart />
        <TrackerProgress />
      </div>
      <div className="p-4 pt-0 flex flex-col gap-4 w-full h-full">
        <ToggleGroup type='multiple' className='flex gap-2 items-center justify-start'>
          <ToggleGroupItem value='savings'>Savings</ToggleGroupItem>
          <ToggleGroupItem value='bills'>Bills</ToggleGroupItem>
          <ToggleGroupItem value='daily'>Daily</ToggleGroupItem>
          <ToggleGroupItem value='variable'>Variable</ToggleGroupItem>
          <ToggleGroupItem value='debts'>Debts</ToggleGroupItem>
        </ToggleGroup>
        <div className='flex w-full flex-col gap-2'>
          <DataTable columns={columns} data={data} title={"Savings"} />
          <Separator />
          <DataTable columns={columns} data={data} title={"Bills"} />
          <Separator />
          <DataTable columns={columns} data={data} title={"Bills"} />
          <Separator />
          <DataTable columns={columns} data={data} title={"Bills"} />
          <Separator />
          <DataTable columns={columns} data={data} title={"Bills"} />
          <Separator />
        </div>
      </div>
    </div>
  )
}

export default ExpenseTrackerPage