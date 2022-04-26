import { useLoaderData } from "@remix-run/react"
import { prisma } from "~/db.server";

export const loader = async ({params}: any) => {
    const entry = await prisma.backTest.findUnique({
        where: {id: params.id}
    })

    if(!entry) throw new Error('Entry not found')

    const data = entry

    // const testData = [
    //     {
    //       id: 'cl29lzffr0000i9mfx6xgguoh',
    //       createdAt: '2022-04-21T23:02:11.174Z',
    //       frequency: 'Daily',
    //       amount: '100',
    //       startDate: '2021-01-01',
    //       endData: '2021-01-31'
    //     },
    //     [
    //       {
    //         date: '2021-01-04',
    //         open: 133.52,
    //         high: 133.61,
    //         low: 126.76,
    //         close: 129.41,
    //         volume: 143302000,
    //         currency: 'USD'
    //       },
    //       {
    //         date: '2021-01-05',
    //         open: 128.89,
    //         high: 131.74,
    //         low: 128.43,
    //         close: 131.01,
    //         volume: 97665000,
    //         currency: 'USD'
    //       },
    //       {
    //         date: '2021-01-06',
    //         open: 127.72,
    //         high: 131.05,
    //         low: 126.38,
    //         close: 126.6,
    //         volume: 155088000,
    //         currency: 'USD'
    //       },
    //       {
    //         date: '2021-01-07',
    //         open: 128.36,
    //         high: 131.63,
    //         low: 127.86,
    //         close: 130.92,
    //         volume: 109578000,
    //         currency: 'USD'
    //       },
    //       {
    //         date: '2021-01-08',
    //         open: 132.43,
    //         high: 132.63,
    //         low: 130.23,
    //         close: 132.05,
    //         volume: 105158000,
    //         currency: 'USD'
    //       },
    //       {
    //         date: '2021-01-11',
    //         open: 129.19,
    //         high: 130.17,
    //         low: 128.5,
    //         close: 128.98,
    //         volume: 100621000,
    //         currency: 'USD'
    //       },
    //       {
    //         date: '2021-01-12',
    //         open: 128.5,
    //         high: 129.69,
    //         low: 126.86,
    //         close: 128.8,
    //         volume: 91951000,
    //         currency: 'USD'
    //       },
    //       {
    //         date: '2021-01-13',
    //         open: 128.76,
    //         high: 131.45,
    //         low: 128.49,
    //         close: 130.89,
    //         volume: 88637000,
    //         currency: 'USD'
    //       },
    //       {
    //         date: '2021-01-14',
    //         open: 130.8,
    //         high: 131,
    //         low: 128.76,
    //         close: 128.91,
    //         volume: 90222000,
    //         currency: 'USD'
    //       },
    //       {
    //         date: '2021-01-15',
    //         open: 128.78,
    //         high: 130.22,
    //         low: 127,
    //         close: 127.14,
    //         volume: 111599000,
    //         currency: 'USD'
    //       },
    //       {
    //         date: '2021-01-19',
    //         open: 127.78,
    //         high: 128.71,
    //         low: 126.94,
    //         close: 127.83,
    //         volume: 90757000,
    //         currency: 'USD'
    //       },
    //       {
    //         date: '2021-01-20',
    //         open: 128.66,
    //         high: 132.49,
    //         low: 128.55,
    //         close: 132.03,
    //         volume: 104319000,
    //         currency: 'USD'
    //       },
    //       {
    //         date: '2021-01-21',
    //         open: 133.8,
    //         high: 139.67,
    //         low: 133.59,
    //         close: 136.87,
    //         volume: 120530000,
    //         currency: 'USD'
    //       },
    //       {
    //         date: '2021-01-22',
    //         open: 136.28,
    //         high: 139.85,
    //         low: 135.02,
    //         close: 139.07,
    //         volume: 114459000,
    //         currency: 'USD'
    //       },
    //       {
    //         date: '2021-01-25',
    //         open: 143.07,
    //         high: 145.09,
    //         low: 136.54,
    //         close: 142.92,
    //         volume: 157612000,
    //         currency: 'USD'
    //       },
    //       {
    //         date: '2021-01-26',
    //         open: 143.6,
    //         high: 144.3,
    //         low: 141.37,
    //         close: 143.16,
    //         volume: 98391000,
    //         currency: 'USD'
    //       },
    //       {
    //         date: '2021-01-27',
    //         open: 143.43,
    //         high: 144.3,
    //         low: 140.41,
    //         close: 142.06,
    //         volume: 140844000,
    //         currency: 'USD'
    //       },
    //       {
    //         date: '2021-01-28',
    //         open: 139.52,
    //         high: 141.99,
    //         low: 136.7,
    //         close: 137.09,
    //         volume: 142620992,
    //         currency: 'USD'
    //       },
    //       {
    //         date: '2021-01-29',
    //         open: 135.83,
    //         high: 136.74,
    //         low: 130.21,
    //         close: 131.96,
    //         volume: 177524000,
    //         currency: 'USD'
    //       }
    //     ],
    //     'https://global-market-data.p.rapidapi.com/stock/historical_data?from_date=2021-01-01&stock=AAPL&country=united%20states&to_date=2021-01-31&interval=Daily'
    //   ]

    const newUrl = `https://global-market-data.p.rapidapi.com/stock/historical_data?from_date=${data.startDate}&stock=${data.asset}&country=united%20states&to_date=${data.endData}&interval=${data.frequency}`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'global-market-data.p.rapidapi.com',
            'X-RapidAPI-Key': '4413f618e1mshd0f0456944bd00cp1f9e71jsn6c817e07fc6c'
        }
    };

    const fetchData = async () => {
        const res = await fetch(newUrl, options)
        const result = res.json()
        return result
    }
    const dcaData = await fetchData()


    const recentUrl = `https://global-market-data.p.rapidapi.com/stock/info?stock=${data.asset}&country=united%20states`
    const recentOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'global-market-data.p.rapidapi.com',
            'X-RapidAPI-Key': '4413f618e1mshd0f0456944bd00cp1f9e71jsn6c817e07fc6c'
        }
    };

    const fetchRecentData = async () => {
        const res = await fetch(recentUrl, recentOptions)
        const result = res.json()
        return result
    }
    const recentData = await fetchRecentData()

    
    return [data, dcaData, recentData]
} 

export default function DcaStockDetailPage({params}: any) {
    const data = useLoaderData()
    const totalIntervals = data[1].length
    const recentData = data[2]
    const sharesData = data[1].map((interval: any) => ((data[0].amount / interval.low)))
    const totalShares = sharesData.reduce((a: any, v: any) => a + v, 0)
    const displayTotalShares = Number(totalShares).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 1})
    const totalInvestment = sharesData.length * data[0].amount
    const displayTotalInvestment = Number(totalInvestment).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})
    const currentUSD: any = (data[2]['open'] * totalShares).toFixed(2)
    const displayCurrentValue = Number(currentUSD).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2})
    const gainLoss = (currentUSD - totalInvestment)
    const roundedGainLoss = Number(gainLoss.toFixed(2)).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2})
    const gainLossString = roundedGainLoss.toString()
    const percentageGainLoss = ((currentUSD / totalInvestment) - 1) * 100
    
    console.log(data, totalIntervals, sharesData, totalShares, totalInvestment, currentUSD, recentData)
    return (
        <div className="grid grid-cols-1 gap-4">
            <h1>{`${data[0]['asset']} ${data[0].frequency} DCA`}</h1>
            <div className="bg-white shadow-md p-4 rounded-lg text-neutral-400 flex flex-col">
                <p className="font-bold text-2xl">{displayTotalShares}</p>
                <p className="font-light">Total Shares</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg text-neutral-400 flex flex-col">
                <p className="font-bold text-2xl">${displayCurrentValue}</p>
                <p className="font-light">Current Value</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg text-neutral-400 flex flex-col">
                <p className="font-bold text-2xl">{percentageGainLoss.toFixed(1)}%</p>
                <p className="font-light">{`${gainLoss > 0 ? 'Increase' : 'Decrease'}`}</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg text-neutral-400 flex flex-col">
                <p className="font-bold text-2xl">${gainLoss > 0 ? gainLoss.toFixed(2) : gainLossString.slice(1)}</p>
                <p className="font-light">{`Total ${gainLoss > 0 ? 'Gain' : 'Loss'}`}</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg text-neutral-400 flex flex-col">
                <p className="font-bold text-2xl">${displayTotalInvestment}</p>
                <p className="font-light">Total Investment</p>
            </div>
        </div>
    )
}