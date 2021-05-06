import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import moment from 'moment';

export default function Home() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(async () => {
    try {
      const res = await axios('https://api.covid19api.com/summary ');
      setData(res.data.Countries);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="container mx-auto text-yellow-50 text-center">
      <input className="text-gray-900 p-1 mt-3" type="text" onChange={(e) => setFilter(e.target.value)} />
        {data
          .filter((val) => {
            if (filter === '') {
              return val;
            } else if (val.Country.toLowerCase().includes(filter.toLocaleLowerCase())) {
              return val;
            }
          })
          .map((val, index) => {
            return (
              <div className="text-gray-300 font-medium" key={index}>
                <br />
                <p>Country: {val.Country}</p>
                <p>
                  Total Confirmed: <span className="text-blue-600">{val.TotalConfirmed}</span>
                </p>
                <p>
                  Total Death: <span className="text-red-500">{val.TotalDeaths}</span>
                </p>
                <p>
                  Total Recovered: <span className="text-green-500">{val.TotalRecovered}</span>
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
