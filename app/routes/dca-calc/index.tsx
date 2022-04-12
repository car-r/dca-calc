import { useLoaderData } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { useEffect, useState } from "react";
import { resourceLimits } from "worker_threads";
import { Result } from "postcss";


// Sample Alpha Vantage API Data - Object of objects, key is a string of a date
// export const loader = async () => {
//     const obj = {
//         '2002-08-02': {
//             '1. open': '46.8500',
//             '2. high': '48.8300',
//             '3. low': '43.8000',
//             '4. close': '44.4100',
//             '5. volume': '253332600'
//           },
//           '2002-07-26': {
//             '1. open': '48.9500',
//             '2. high': '49.9900',
//             '3. low': '41.4100',
//             '4. close': '45.3500',
//             '5. volume': '418694300'
//           },
//           '2002-07-19': {
//             '1. open': '51.3900',
//             '2. high': '53.3000',
//             '3. low': '48.0000',
//             '4. close': '49.5600',
//             '5. volume': '267876000'
//           },
//           '2002-07-12': {
//             '1. open': '54.4100',
//             '2. high': '54.9300',
//             '3. low': '51.2500',
//             '4. close': '51.8600',
//             '5. volume': '232217200'
//           },
//           '2002-07-05': {
//             '1. open': '54.1200',
//             '2. high': '54.9000',
//             '3. low': '50.4500',
//             '4. close': '54.8500',
//             '5. volume': '132949100'
//           },
//           '2002-06-28': {
//             '1. open': '52.0900',
//             '2. high': '55.7900',
//             '3. low': '51.0500',
//             '4. close': '54.7000',
//             '5. volume': '243023900'
//           },
//           '2002-06-21': {
//             '1. open': '55.6600',
//             '2. high': '56.4400',
//             '3. low': '52.2800',
//             '4. close': '52.2800',
//             '5. volume': '228236600'
//           },
//           '2002-06-14': {
//             '1. open': '51.6500',
//             '2. high': '55.7800',
//             '3. low': '51.4600',
//             '4. close': '55.2500',
//             '5. volume': '235798700'
//           }
//     }

//     return json(obj)
// }

// export const loader = async () => {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
//             'X-RapidAPI-Key': '4413f618e1mshd0f0456944bd00cp1f9e71jsn6c817e07fc6c'
//         }
//     };
    
//     const fetchData = async () => {
//         const result = await fetch('https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_WEEKLY&symbol=MSFT&datatype=json', options)
//         return result
//     }
//     const data = await fetchData()

//     return data.json()

// }


// export const loader = async () => {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Host': 'yahoofinance-stocks1.p.rapidapi.com',
//             'X-RapidAPI-Key': '4413f618e1mshd0f0456944bd00cp1f9e71jsn6c817e07fc6c'
//         }
//     };

//     const fetchData = async () => {
//         const result = await fetch('https://yahoofinance-stocks1.p.rapidapi.com/stock-prices?EndDateInclusive=2020-04-01&StartDateInclusive=2020-01-01&Symbol=MSFT&OrderBy=Ascending', options)
//         return result
//     }

//     const data = await fetchData()
//     return data.json()
    
// }
// // ^^ Yahoo finance


export const loader = async () => {
    // calculations showing infinity value for current USD value and Total Gain.
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    //         'X-RapidAPI-Key': '4413f618e1mshd0f0456944bd00cp1f9e71jsn6c817e07fc6c'
    //     }
    // };
    
    // const fetchData = async () => {
    //     const result = await fetch('https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=1y', options)
    //     return result
    // }
    // const data = await fetchData()
    // return data


    const testData = {data: [
        { price: '39620.436169146116', timestamp: 1649721600 },
        { price: '42269.15275092676', timestamp: 1649635200 },
        { price: '42774.473086433594', timestamp: 1649548800 },
        { price: '42327.99188087798', timestamp: 1649462400 },
        { price: '43491.05582758928', timestamp: 1649376000 },
        { price: '43226.7583720783', timestamp: 1649289600 },
        { price: '45614.35512944004', timestamp: 1649203200 },
        { price: '46629.495966930495', timestamp: 1649116800 },
        { price: '46520.2065613863', timestamp: 1649030400 },
        { price: '45928.61935566642', timestamp: 1648944000 },
        { price: '46260.34772256533', timestamp: 1648857600 },
        { price: '45544.57004943779', timestamp: 1648771200 },
        { price: '47076.566097362425', timestamp: 1648684800 },
        { price: '47461.39419303183', timestamp: 1648598400 },
        { price: '47144.95236445738', timestamp: 1648512000 },
        { price: '46457.8289415119', timestamp: 1648425600 },
        { price: '44518.05817848312', timestamp: 1648339200 },
        { price: '44188.22521644064', timestamp: 1648252800 },
        { price: '43946.19812068838', timestamp: 1648166400 },
        { price: '42810.767186580386', timestamp: 1648080000 },
        
    ]}
    
    
    return testData
}

export default function Home() {
    const data = useLoaderData()
    // console.log(data['Weekly Time Series'])
    
    // const arr = Object.keys(data)
    //     .map(key => ({ [key]: data[key]}))

    // console.log(arr)


    //const [stockData, setStockData] = useState({})

    // can the logic below be moved to the loader? Is this logic happening client side if inside the component?
    // what about selecting the DCA amount for the various time intervals?

    // use with testData
    const numberData = data.data.map((entry: any) => (Number(entry.price)))

    // use with API
    // const numberData = data.data.history.map((entry: any) => (Number(entry.price)))
    
    const satsData = numberData.map((price: any) => ((100000000 / price) * 25))
    const totalSats = satsData.reduce((a: any, v: any) => a + v, 0)
    const totalInvestment = satsData.length * 25
    const currentUSD = ((numberData[0] / 100000000) * totalSats)
    const gainLoss = currentUSD - totalInvestment
    
    console.log(data.data.history)
    
    return (
        
        <div>
            <h1>DCA Calc Home</h1>
            {/* {data.data.map((entry: any) => (
                <p key={entry.timestamp}>{Number(entry.price) / 2}</p>
            ))} */}
            <p>Total Satoshis: {totalSats}</p>
            <p>Total Investment USD: {totalInvestment}</p>
            <p>Current USD Value: {currentUSD}</p>
            <p>{`Total ${gainLoss > 0 ? 'Gain: ' : 'Loss: '}`}{gainLoss}</p>
        </div>
    )
}