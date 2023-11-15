import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const RevenueMonth = ({ revenue }) => {
  const monthOptions = [];
  const yearOptions = [];

  revenue.forEach(item => {
    const dateParts = item.date.split('-');
    const month = dateParts[1];
    const year = dateParts[2];

    if (!monthOptions.includes(month)) {
      monthOptions.push(month);
    }

    if (!yearOptions.includes(year)) {
      yearOptions.push(year);
    }
  });

  const [selectedMonth, setSelectedMonth] = useState(monthOptions.length > 0 ? monthOptions[monthOptions.length - 1] : '');
  const [selectedYear, setSelectedYear] = useState(yearOptions.length > 0 ? yearOptions[yearOptions.length - 1] : '');
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const filteredData = (selectedMonth === '' && selectedYear === '')
      ? revenue
      : revenue.filter(item => {
        const itemDateParts = item.date.split('-');
        const itemMonth = itemDateParts[1];
        const itemYear = itemDateParts[2];
        return (
          (selectedMonth === '' || itemMonth === selectedMonth) &&
          (selectedYear === '' || itemYear === selectedYear)
        );
      });

    const updatedSeries = [
      {
        name: 'Hoa hồng',
        data: Array.from({ length: 31 }, (_, i) => {
          const day = (i + 1).toString();
          const matchingData = filteredData.find(item => {
            const itemDay = item.date.split('-')[0];
            const itemDateParts = item.date.split('-');
            const itemMonth = itemDateParts[1];
            const itemYear = itemDateParts[2];
            return (
              itemDay === day &&
              (selectedMonth === '' || itemMonth === selectedMonth) &&
              (selectedYear === '' || itemYear === selectedYear)
            );
          });
          return matchingData ? parseInt(matchingData.amount) : 0;
        }),
      },
    ];

    setSeries(updatedSeries);
  }, [selectedMonth, selectedYear, revenue]);

  const handleSelectChange = (event, setValue) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const categories = Array.from({ length: 31 }, (_, i) => (i + 1).toString());

  const options = {
    colors: ['#176CA4'],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 2,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ['transparent'],
    },
    xaxis: {
      categories: categories,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      title: {
        text: 'Ngày',
        style: {
          fontSize: '14px',
          fontFamily: 'Roboto-Regular',
        },
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
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
      fontFamily: 'inter',
      markers: {
        radius: 99,
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      x: {
        show: false,
      },
    },
  };
  

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark-bg-boxdark sm:px-7.5">
      <div className="flex gap-2 ml-24 mt-4 font-semibold text-lg justify-center mb-4">
        <h3 className="text-xl text-black dark-text-white">
          Doanh số các ngày trong
        </h3>
        <select
          id="selectMonth"
          value={selectedMonth}
          onChange={(event) => handleSelectChange(event, setSelectedMonth)}
        >
          {monthOptions.map(month => (
            <option key={month} value={month}>
              tháng {month}
            </option>
          ))}
        </select>

        <select
          id="selectYear"
          value={selectedYear}
          onChange={(event) => handleSelectChange(event, setSelectedYear)}
        >
          {yearOptions.map(year => (
            <option key={year} value={year}>
              năm {year}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-2">
        <div id="RevenueMonth"></div>
        <ReactApexChart options={options} series={series} type="bar" height={350} />
      </div>
    </div>
  );
};

export default RevenueMonth;
