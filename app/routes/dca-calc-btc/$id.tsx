import { useLoaderData } from "@remix-run/react"
import { prisma } from "~/db.server";

export const loader = async ({params}: any) => {
    const entry = await prisma.backTest.findUnique({
        where: {id: params.id}
    })

    if(!entry) throw new Error('Entry not found')

    const data = entry

    // const testData = await [
    //     {
    //       date: '2021-01-01',
    //       open: 28951.7,
    //       high: 29627.1,
    //       low: 28712.4,
    //       close: 29359.9,
    //       volume: 100902,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-02',
    //       open: 29359.7,
    //       high: 33233.5,
    //       low: 29008,
    //       close: 32193.3,
    //       volume: 240865,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-03',
    //       open: 32192.9,
    //       high: 34755.9,
    //       low: 32029.6,
    //       close: 32958.9,
    //       volume: 155210,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-04',
    //       open: 33016.6,
    //       high: 33587.5,
    //       low: 28204.5,
    //       close: 32022.6,
    //       volume: 255269,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-05',
    //       open: 32015.4,
    //       high: 34414.7,
    //       low: 30010.5,
    //       close: 33991.5,
    //       volume: 202128,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-06',
    //       open: 33999.3,
    //       high: 36934.8,
    //       low: 33408.3,
    //       close: 36793.2,
    //       volume: 227557,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-07',
    //       open: 36798.5,
    //       high: 40340.9,
    //       low: 36361.2,
    //       close: 39460.2,
    //       volume: 249603,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-08',
    //       open: 39466.4,
    //       high: 41921.7,
    //       low: 36613.4,
    //       close: 40599.3,
    //       volume: 251285,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-09',
    //       open: 40607.2,
    //       high: 41363.5,
    //       low: 38775.1,
    //       close: 40151.9,
    //       volume: 128422,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-10',
    //       open: 40149.7,
    //       high: 41362.4,
    //       low: 35141.6,
    //       close: 38192.2,
    //       volume: 215784,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-11',
    //       open: 38195.3,
    //       high: 38217.2,
    //       low: 30411.6,
    //       close: 35544.3,
    //       volume: 251044,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-12',
    //       open: 35426,
    //       high: 36598.7,
    //       low: 32572.7,
    //       close: 34076.1,
    //       volume: 241927,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-13',
    //       open: 34061.2,
    //       high: 37764.6,
    //       low: 32451.9,
    //       close: 37382.2,
    //       volume: 209930,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-14',
    //       open: 37383.4,
    //       high: 40054.3,
    //       low: 36772.1,
    //       close: 39175.7,
    //       volume: 172395,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-15',
    //       open: 39175.7,
    //       high: 39715,
    //       low: 34488.7,
    //       close: 36845.8,
    //       volume: 118423,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-16',
    //       open: 36751.8,
    //       high: 37931.7,
    //       low: 35408.4,
    //       close: 36019.5,
    //       volume: 137020,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-17',
    //       open: 36020.1,
    //       high: 36801.3,
    //       low: 33883.5,
    //       close: 35839.6,
    //       volume: 126824,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-18',
    //       open: 35838.2,
    //       high: 37436.8,
    //       low: 34801,
    //       close: 36613.2,
    //       volume: 111519,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-19',
    //       open: 36630.6,
    //       high: 37821,
    //       low: 36001.4,
    //       close: 36002.9,
    //       volume: 79110,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-20',
    //       open: 35862.1,
    //       high: 36384.4,
    //       low: 33444.5,
    //       close: 35476.3,
    //       volume: 153609,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-21',
    //       open: 35472.3,
    //       high: 35591.1,
    //       low: 30101.8,
    //       close: 30842.1,
    //       volume: 253273,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-22',
    //       open: 30838.7,
    //       high: 33821.2,
    //       low: 28871.2,
    //       close: 33000.5,
    //       volume: 243087,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-23',
    //       open: 32994.1,
    //       high: 33441.4,
    //       low: 31418.2,
    //       close: 32088.9,
    //       volume: 100702,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-24',
    //       open: 32088.5,
    //       high: 33034.8,
    //       low: 30982.9,
    //       close: 32241.3,
    //       volume: 88207,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-25',
    //       open: 32244.3,
    //       high: 34854.3,
    //       low: 31967.4,
    //       close: 32252.3,
    //       volume: 142434,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-26',
    //       open: 32244.1,
    //       high: 32917.7,
    //       low: 30850,
    //       close: 32502.1,
    //       volume: 139836,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-27',
    //       open: 32499.6,
    //       high: 32545.4,
    //       low: 29290.4,
    //       close: 30404,
    //       volume: 194350,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-28',
    //       open: 30408.9,
    //       high: 33790.8,
    //       low: 29911.9,
    //       close: 33374.8,
    //       volume: 167385,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-29',
    //       open: 33381.7,
    //       high: 38546,
    //       low: 31953.3,
    //       close: 34301.8,
    //       volume: 297730,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-30',
    //       open: 34300,
    //       high: 34920.9,
    //       low: 32908.5,
    //       close: 34283.1,
    //       volume: 128567,
    //       currency: 'USD'
    //     },
    //     {
    //       date: '2021-01-31',
    //       open: 34281.6,
    //       high: 34348.3,
    //       low: 32189.9,
    //       close: 33108.1,
    //       volume: 101918,
    //       currency: 'USD'
    //     },
    // ]

    const newUrl = `https://global-market-data.p.rapidapi.com/crypto/historical_data?to_date=${data.endData}&crypto=Bitcoin&from_date=${data.startDate}&interval=${data.frequency}`
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
    const testData = await fetchData()

    const recentUrl = `https://global-market-data.p.rapidapi.com/crypto/recent_data?crypto=Bitcoin&interval=Daily`
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

    
    return [data, testData, recentData]
} 

export default function DcaDetailPage({params}: any) {
    const data = useLoaderData()
    const recentDataLength = data[2].length
    const recentData = data[2][recentDataLength - 1]['low']
    // const totalIntervals = data[1].length
    const satsData = data[1].map((interval: any) => ((100000000 / interval.low) * data[0].amount))
    const totalSats = satsData.reduce((a: any, v: any) => a + v, 0)
    const displayTotalSats = Number(totalSats).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})
    const totalInvestment = satsData.length * data[0].amount
    const displayTotalInvestment = Number(totalInvestment).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})
    const currentUSD: any = ((recentData / 100000000) * totalSats).toFixed(2)
    const displayCurrentValue = Number(currentUSD).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2})
    const gainLoss = (currentUSD - totalInvestment)
    const roundedGainLoss = Number(gainLoss.toFixed(2)).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2})
    const percentageGainLoss = ((currentUSD / totalInvestment) - 1) * 100
    
    console.log(data, recentDataLength, recentData)
    return (
        <div className="grid grid-cols-1 gap-4">
            <h1>{`${data[0]['asset']} ${data[0].frequency} DCA`}</h1>
            <div className="bg-white shadow-md p-4 rounded-lg text-neutral-400 flex flex-col">
                <p className="font-bold text-2xl">{displayTotalSats}</p>
                <p className="font-light">Total Satoshis</p>
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
                <p className="font-bold text-2xl">${roundedGainLoss}</p>
                <p className="font-light">{`Total ${gainLoss > 0 ? 'Gain' : 'Loss'}`}</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg text-neutral-400 flex flex-col">
                <p className="font-bold text-2xl">${displayTotalInvestment}</p>
                <p className="font-light">Total Investment</p>
            </div>
        </div>
    )
}