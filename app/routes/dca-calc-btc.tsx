import {  Form, Outlet, useTransition } from "@remix-run/react";
import { redirect } from "@remix-run/node";
// import { json } from "@remix-run/node";
// import { useEffect, useState, useRef } from "react";
// import { resourceLimits } from "worker_threads";
// import { Result } from "postcss";
import { prisma } from "~/db.server";


export const action = async ({ request }: any) => {
  const formData = await request.formData()
  const amount = formData.get('amount')
  const frequency = formData.get('frequency')
  const startDate = formData.get('startdate')
  const endData = formData.get('enddate')
  const asset = formData.get('asset')

  const entry = await prisma.backTest.create({
    data: {
      frequency,
      amount,
      startDate,
      endData,
      asset
    }
  })

  return redirect(`/dca-calc-btc/${entry.id}`)
}

export default function Home() {
    const transition = useTransition()

    const btnText = 
        transition.state === 'submitting'
        ? "Calculating your DCA"
        : transition.state === 'loading'
        ? "Finished!"
        : "Calculate"
    
    // const data = useLoaderData()
    // const totalIntervals = data[0].length
    // const satsData = data[0].map((interval: any) => ((100000000 / interval.low) * data[1][0].amount))
    // const totalSats = satsData.reduce((a: any, v: any) => a + v, 0)
    // const totalInvestment = satsData.length * data[1][0].amount
    // const currentUSD: any = ((data[0][totalIntervals - 1].low / 100000000) * totalSats).toFixed(2)
    // const gainLoss = (currentUSD - totalInvestment)
    // const roundedGainLoss = gainLoss.toFixed(2)
    // const gainLossString = roundedGainLoss.toString()
    

    // console.log(data, totalIntervals)
    return(
        <div className="grid grid-cols-1 w-11/12 mx-auto gap-4">
            <div className="pt-10">
                <h1 className="text-neutral-700 font-bold text-2xl">Bitcoin DCA Calculator</h1>
            </div>
            
            
            <Outlet />
            <Form  method="post" className="bg-white shadow-md p-4 rounded-lg text-neutral-400 flex flex-col mb-6">
                <div className="mb-4 flex flex-col">
                    <label className="mb-2 font-semibold" >Frequency</label>
                    <select name="frequency" className="rounded px-2 py-1 text-black border border-neutral-200" id="">
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                    </select>
                    
                </div>
                <div className="flex flex-col pb-6">
                    <label className="mb-2 font-semibold">Amount</label>
                    <input type="string" className="rounded px-2 py-1 text-black border border-neutral-200" name="amount" />
                </div>   
                <div className="flex flex-col pb-6">
                    <label className="mb-2 font-semibold">Start Date (yyyy-dd-mm)</label>
                    <input type="string" className="rounded px-2 py-1 text-black border border-neutral-200" name="startdate" />
                </div>
                <div className="flex flex-col pb-6">
                    <label className="mb-2 font-semibold">End Date (yyyy-dd-mm)</label>
                    <input type="string" className="rounded px-2 py-1 text-black border border-neutral-200" name="enddate" />
                </div>
                <div>
                  <input type="hidden" name="asset" value="Bitcoin"/>
                </div>
                     
                <button type="submit" className="bg-neutral-400 border border-neutral-400 p-2 text-center text-white font-bold rounded-lg hover:bg-white hover:text-black  hover:ease-in-out hover: duration-300">{btnText}</button>
            </Form>
            
            
        </div>
    )
}