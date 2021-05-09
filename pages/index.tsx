import { useEffect, useState } from 'react';
import Header from '../components/Header';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    await fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php', {
      headers: {
        'x-rapidapi-key': '7887d314femsh169290428000428p199f93jsn9470329ba9cb',
        'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
      },
    })
      .then((res) => console.log(res.json()))
      // .catch(err = console.log(err));
  });
  // console.log(data);

  return (
    <div>
      <Header />
      <div className="container mx-auto text-yellow-50 text-center"></div>
    </div>
  );
}
