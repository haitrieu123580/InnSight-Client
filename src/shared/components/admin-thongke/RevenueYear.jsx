import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const RevenueYear = ({ revenue }) => {
  const yearOptions = Array.from(new Set(revenue.map(item => item.year)));
  const [selectedYearstart, setSelectedYearstart] = useState(yearOptions[0]);
  const [selectedYearend, setSelectedYearend] = useState(yearOptions[yearOptions.length - 1]);
  const [selectedYears, setSelectedYears] = useState([]);

  const [series, setSeries] = useState([]);

  useEffect(() => {
    const startYear = parseInt(selectedYearstart);
    const endYear = parseInt(selectedYearend);
    const updatedCategories = Array.from({ length: endYear - startYear + 1 }, (_, i) => (startYear + i).toString());
    setSelectedYears(updatedCategories);

    const filteredData = revenue.filter(item => item.year >= selectedYearstart && item.year <= selectedYearend);
    
    const dataForSelectedYears = updatedCategories.map(selectedYear => {
      const matchingData = filteredData.find(item => item.year === selectedYear);
      return matchingData ? parseInt(matchingData.amount) : 0;
    });

    const updatedSeries = [
      {
        name: 'Hoa hồng',
        data: dataForSelectedYears,
      },
    ];

    setSeries(updatedSeries);
  }, [selectedYearstart, selectedYearend, revenue]);

  const handleSelectChange = (event) => {
    if (event.target.id === 'selectYearStart') {
      setSelectedYearstart(event.target.value);
    } else if (event.target.id === 'selectYearEnd') {
      setSelectedYearend(event.target.value);
    }
  };
  
  const renderYearEndOptions = () => {
    return yearOptions
      .filter((year) => year > selectedYearstart)
      .map((year) => (
        <option key={year} value={year}>
          năm {year}
        </option>
      ));
  };

  const options = {
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: ['#4286A0', '#94B4C1'],
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
      strokeColors: ['#4286A0', '#94B4C1'],
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
      categories: selectedYears,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      title: {
        text: 'Năm',
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
      min: 0,
    },
  };

  return (
    <div className="mt-7 col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark-bg-boxdark sm-px-7.5 xl:col-span-8">
      <div className="flex gap-2 ml-24 mt-4 font-semibold text-lg justify-center mb-4">
        <h3 className="text-xl text-black dark-text-white">
          Doanh số năm từ
        </h3>
        <select
          id="selectYearStart"
          value={selectedYearstart}
          onChange={handleSelectChange}
        >
          {yearOptions.map(year => (
            <option key={year} value={year}>
              năm {year}
            </option>
          ))}
        </select>
        <h3 className="text-xl text-black dark-text-white">
          đến
        </h3>
        <select
          id="selectYearEnd"
          value={selectedYearend}
          onChange={handleSelectChange}
        >
          {yearOptions
            .filter((year) => year > selectedYearstart) // Chỉ hiển thị giá trị lớn hơn giá trị đã chọn trong selectYearStart
            .map((year) => (
              <option key={year} value={year}>
                năm {year}
              </option>
            ))
          }
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

export default RevenueYear;
