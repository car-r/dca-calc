import { useEffect, useState } from "react"

export default function Home() {
    const [data, setData] = useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'global-market-data.p.rapidapi.com',
            'X-RapidAPI-Key': '4413f618e1mshd0f0456944bd00cp1f9e71jsn6c817e07fc6c'
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('https://global-market-data.p.rapidapi.com/crypto/historical_data?to_date=2021-12-31&crypto=Bitcoin&from_date=2021-01-01&interval=Daily', options)
            const json = await result.json()
            // console.log(json)
            setData(json)
        }
        fetchData()
        
    }, [])

 
    const totalIntervals = data.length
    const satsData = data.map((interval: any) => ((100000000 / interval.low) * 25))
    const totalSats = satsData.reduce((a: any, v: any) => a + v, 0)
    const totalInvestment = satsData.length * 25
    const currentUSD: any = ((data[totalIntervals - 1]['low']/ 100000000) * totalSats).toFixed(2)
    const gainLoss = (currentUSD - totalInvestment)
    const roundedGainLoss = gainLoss.toFixed(2)
    const gainLossString = roundedGainLoss.toString()
    
    console.log(data)

    return(
        <div className="grid grid-cols-1 w-11/12 mx-auto gap-4">
            <h1 className="text-neutral-700 font-bold">DCA BTC CALC</h1>
            
            <div className="bg-white shadow-md p-4 rounded-lg text-neutral-400 flex flex-col">
                <p className="font-bold text-2xl">{totalSats.toFixed(0)}</p>
                <p className="font-light">Total Satoshis</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg text-neutral-400 flex flex-col">
                <p className="font-bold text-2xl">${currentUSD}</p>
                <p className="font-light">Current Value</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg text-neutral-400 flex flex-col">
                <p className="font-bold text-2xl">${gainLoss > 0 ? gainLoss.toFixed(2) : gainLossString.slice(1)}</p>
                <p className="font-light">{`Total ${gainLoss > 0 ? 'Gain' : 'Loss'}`}</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg text-neutral-400 flex flex-col">
                <p className="font-bold text-2xl">${totalInvestment}</p>
                <p className="font-light">Total Investment</p>
            </div>
            
            <div className="bg-white shadow-md p-4 rounded-lg text-neutral-400 flex flex-col">
                <div className="mb-4 flex flex-col">
                    <label className="mb-2 font-semibold" >Frequency</label>
                    <select name="frequency" className="rounded px-2 py-1 text-black border border-neutral-200" id="">
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 font-semibold">Amount</label>
                    <input type="number" className="rounded px-2 py-1 text-black border border-neutral-200" name="Amount" />
                </div>    
                <button type="submit">Calculate</button>
            </div>
        </div>
    )
}