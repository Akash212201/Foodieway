import React, { useEffect, useState } from 'react';
import Chart from './Chart';
import { useSelector } from 'react-redux';

const LineChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const [stats, setstats] = useState({})
  const { token } = useSelector((state) => state.auth)
  useEffect(() => {
    
      const fetchdata = async() => {
       
      }
      fetchdata();
    

  }, [])

  const labels = stats.bookname;

  const data = {
    labels,
    datasets: [
      {
        label: 'Sale',
        data: stats.totalsale,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Chart type="line" options={options} data={data} />;
};

export default LineChart;
