"use client"

import * as React from "react"
import { TrendingDown, TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue,
  SelectGroup
} from '@/components/ui/select'

export const description = "A donut chart with text"

const chartData = [
  { expenses: "savings", amount: 2000, fill: "var(--color-savings)" },
  { expenses: "debts", amount: 57, fill: "var(--color-debts)" },
  { expenses: "daily expenses", amount: 1520, fill: "var(--color-daily)" },
  { expenses: "variable expenses", amount: 173, fill: "var(--color-variable)" },
  { expenses: "bills", amount: 190, fill: "var(--color-bills)" },
]

const chartConfig = {
  amount: {
    label: "Expenses",
  },
  savings: {
    label: "Savings",
    color: "hsl(var(--chart-1))",
  },
  debts: {
    label: "Debts",
    color: "hsl(var(--chart-2))",
  },
  daily: {
    label: "Daily Expenses",
    color: "hsl(var(--chart-3))",
  },
  variable: {
    label: "Variable Expenses",
    color: "hsl(var(--chart-4))",
  },
  bills: {
    label: "Bills",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function TrackerChart() {

  const handleChartFilterChange = () => {
    console.log("hello");
  };

  const lastExpenses = 3000;

  const totalExpenses = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.amount, 0)
  }, [])

  const trend = {
    diff_percentage: ((Math.abs(totalExpenses - lastExpenses)) / lastExpenses) * 100,
    icon: (totalExpenses - lastExpenses) / lastExpenses > 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />,
    direction: (totalExpenses - lastExpenses) / lastExpenses > 0 ? "increased" : "decreased",
  }

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>All Expenses</CardTitle>
        <CardDescription>September 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <div className="p-4 pb-0">
          <Select onValueChange={handleChartFilterChange}>
            <SelectTrigger>
              <SelectValue placeholder="All Expenses" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Daily">Daily Expenses</SelectItem>
                <SelectItem value="Variable">Variable Expenses</SelectItem>
                <SelectItem value="Debts">Debts</SelectItem>
                <SelectItem value="Savings">Savings</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="expenses"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 4}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalExpenses.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 20}
                          className="fill-muted-foreground"
                        >
                          PHP
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Expenses {trend.direction} by {trend.diff_percentage.toFixed(2)}% this month {trend.icon}
        </div>
        <div className="leading-none text-muted-foreground">
          total expenses of PHP {lastExpenses} last month
        </div>
      </CardFooter>
    </Card>
  )
}
