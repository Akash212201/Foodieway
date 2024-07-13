import React, { useEffect, useState } from 'react';
import Chart from './Chart';
import { useSelector } from 'react-redux';

const BarChart = () => {
  const options = {
    responsive: true,

  };

  const [stats, setstats] = useState({})
  const { token } = useSelector((state) => state.auth)

  useEffect(() => {

    const fetchdata = async () => {
      

    }
    fetchdata();


  }, [])

  const data = {
    labels: stats.bookname,
    datasets: [
      {
        label: 'Customers',
        data:stats.totalusers,
        backgroundColor: 'rgb(13, 214, 184)',
        barThickness: 25,
      },
    ],
  };

  return <Chart type="bar" options={options} data={data} />;
};

export default BarChart;
