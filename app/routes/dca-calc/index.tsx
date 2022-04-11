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


    const testData = {data: [
        { price: '46552.90192901236', timestamp: 1641254400 },
        { price: '47420.210724025674', timestamp: 1641168000 },
        { price: '47778.49399303909', timestamp: 1641081600 },
    ]}
    // return data.json()
    return testData
}

export default function Home() {
    const data = useLoaderData()
    // console.log(data['Weekly Time Series'])
    
    // const arr = Object.keys(data)
    //     .map(key => ({ [key]: data[key]}))

    // console.log(arr)


    //const [stockData, setStockData] = useState({})
    const numberData = data.data.map((entry: any) => (Number(entry.price)))
    const satsData = numberData.map((price: any) => ((100000000 / price) * 100))
    const totalSats = satsData.reduce((a: any, v: any) => a + v, 0)
    console.log(satsData)
    return (
        
        <div>
            <h1>DCA Calc Home</h1>
            {/* {data.data.map((entry: any) => (
                <p key={entry.timestamp}>{Number(entry.price) / 2}</p>
            ))} */}
            {totalSats}
        </div>
    )
}