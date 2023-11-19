import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const options = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#74539D', '#888093'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: 'straight',
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: ['#74539D', '#888093'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: 'category',
    categories: [
      'Tháng 01',
      'Tháng 02',
      'Tháng 03',
      'Tháng 04',
      'Tháng 05',
      'Tháng 06',
      'Tháng 07',
      'Tháng 08',
      'Tháng 09',
      'Tháng 10',
      'Tháng 11',
      'Tháng 12',
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    
  },
  yaxis: {
    title: {
      text: 'Doanh số',
      style: {
        fontSize: '14px',
        fontFamily: 'Roboto-Regular',
      },
    },
    min: 0,
  },
};

const RevenueMonth = ({ revenue }) => {
  const yearOptions = Array.from(new Set(revenue.map(item => item.year)));
  const [selectedYear, setSelectedYear] = useState(yearOptions[yearOptions.length - 1]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const filteredData = selectedYear === ''
      ? revenue
      : revenue.filter(item => item.year === selectedYear);

    const dataForSelectedYear = Array.from({ length: 12 }, (_, i) => {
      const month = (i + 1).toString().padStart(2, '0');
      const matchingData = filteredData.find(item => item.month === month);
      return matchingData ? parseInt(matchingData.amount) : 0;
    });

    const updatedSeries = [
      {
        name: 'Hoa hồng',
        data: dataForSelectedYear,
      },
    ];

    setSeries(updatedSeries);
  }, [selectedYear, revenue]);

  const handleSelectChange = event => {
    setSelectedYear(event.target.value);
  };
  
  return (
    <div className="mt-7 col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark-bg-boxdark sm-px-7.5 xl:col-span-8">
      <div className="flex gap-2 ml-24 mt-4 font-semibold text-lg justify-center mb-4">
        <h3 className="text-xl text-black dark-text-white">
          Doanh số các tháng trong
        </h3>
        <select
          id="selectYear"
          value={selectedYear}
          onChange={handleSelectChange}
        >
          {yearOptions.map(year => (
            <option key={year} value={year}>
              năm {year}
            </option>
          ))}
        </select>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default RevenueMonth;
