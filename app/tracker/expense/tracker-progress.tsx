import React from 'react'
import { Progress } from '../../../components/ui/progress';
import { Label } from '../../../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';

const TrackerProgress = () => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Expenses Limit</CardTitle>
            <CardDescription>Track if your expenses limit per category is reached</CardDescription>
        </CardHeader>
        <CardContent className='p-8 pt-0'>
        <div className="flex flex-col w-full h-full gap-2">
            <div className="w-full grid grid-rows-2 items-center gap-2">
                <p className='font-bold'>Savings</p>
                <div className='flex flex-col gap-1 w-full'>
                    <Progress value={10} id='progress-1' />
                    <Label htmlFor='progress-1' className='justify-self-end text-right opacity-50 font-light text-sm'>2,000/10,000</Label>
                </div>
            </div>
            <div className="w-full grid grid-rows-2 items-center gap-2">
                <p className='font-bold'>Bills</p>
                <div className='flex flex-col gap-1 w-full'>
                    <Progress value={100} id='progress-2' />
                    <Label htmlFor='progress-2' className='justify-self-end text-right opacity-50 font-light text-sm'>2,000/10,000</Label>
                </div>
            </div>
            <div className="w-full grid grid-rows-2 items-center gap-2">
                <p className='font-bold'>Daily Expenses</p>
                <div className='flex flex-col gap-1 w-full'>
                    <Progress value={60} id='progress-3' />
                    <Label htmlFor='progress-3' className='justify-self-end text-right opacity-50 font-light text-sm'>2,000/10,000</Label>
                </div>
            </div>
            <div className="w-full grid grid-rows-2 items-center gap-2">
                <p className='font-bold'>Variable Expenses</p>
                <div className='flex flex-col gap-1 w-full'>
                    <Progress value={40} id='progress-4' />
                    <Label htmlFor='progress-4' className='justify-self-end text-right opacity-50 font-light text-sm'>2,000/10,000</Label>
                </div>
            </div>
            <div className="w-full grid grid-rows-2 items-center gap-2">
                <p className='font-bold'>Debts</p>
                <div className='flex flex-col gap-1 w-full'>
                    <Progress value={80} id='progress-5' />
                    <Label htmlFor='progress-5' className='justify-self-end text-right opacity-50 font-light text-sm'>2,000/10,000</Label>
                </div>
            </div>

        </div>
        </CardContent>
    </Card>

    )
}

export default TrackerProgress;