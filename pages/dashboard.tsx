import StatsCard from '@/components/card/stat';
import Chart from '@/components/chart';
import UseIsMobile from '@/components/hook/useIsMobile';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const statsArray = [
  {
    imgSrc: 'revenue.svg',
    text: 'Total Revenues',
    stat: '$2,129,430',
    color: '#DDEFE0',
  },
  {
    imgSrc: 'revenue.svg',
    text: 'Total Transactions',
    stat: '1,520',
    color: '#F4ECDD',
  },
  {
    imgSrc: 'likes.svg',
    text: 'Total Likes',
    stat: '9,721',
    color: '#EFDADA',
  },
  {
    imgSrc: 'user.svg',
    text: 'Total User',
    stat: '892',
    color: '#DEE0EF',
  },
];
const lineChartState = {
  series: [
    {
      name: 'Desktops',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
      ],
    },
  },
};
const pieChartState = {
  series: [44, 55, 13, 43, 22],
  options: {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  },
};
const Dashboard = () => {
  const sideBarList = [
    {
      name: 'Dashboard',
      icon: 'dashboard_icon.svg',
    },
    {
      name: 'Transactions',
      icon: 'transaction_icon.svg',
    },
    {
      name: 'Schedules',
      icon: 'schedule_icon.svg',
    },
    {
      name: 'Users',
      icon: 'user_icon.svg',
    },
    {
      name: 'Settings',
      icon: 'setting_icon.svg',
    },
  ];
  const isMobile = UseIsMobile();
  const [isSideBarOpen, setIsSidebarOpen] = useState<boolean>(false);

  //    did this because of time constraint else use useContext

  useEffect(() => {
    if (isSideBarOpen) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [isSideBarOpen]);
  return (
    <div
      className={`bg-grey_dark flex gap-x-16 p-10 ${
        isSideBarOpen ? 'overflow-y-hidden' : ''
      }`}
    >
      <section
        className={`bg-black 

        ${isMobile ? 'absolute' : 'sticky'}   
        ${
          isMobile && isSideBarOpen
            ? 'absolute  z-50   transition-opacity'
            : 'absolute hidden'
        }   
        
        top-10 p-12 h-[calc(100vh-80px)] md:flex flex-col rounded-3xl `}
      >
        <h2 className="text-white text-4xl font-bold mb-14">Board.</h2>

        <ul className="space-y-10">
          {sideBarList.map((each) => (
            <li
              className="flex text-lg font-bold cursor-pointer text-white"
              key={each.name}
            >
              <Image
                className="mr-4"
                src={each.icon}
                width={18}
                height={18}
                alt={each.name}
              />
              {each.name}
            </li>
          ))}
        </ul>

        <ul className="mt-auto space-y-5">
          <li className="cursor-pointer text-sm  font-normal text-white">
            Help
          </li>
          <li className="cursor-pointer  text-sm  font-normal text-white">
            Contact Us
          </li>
        </ul>
      </section>
      <section className="flex-1">
        <nav className="flex items-baseline justify-between">
          <h3 className=" font-bold text-2xl font-primary">Dashboard</h3>
          <ul className="flex items-center gap-x-8">
            <li className="hidden md:block">
              <input
                placeholder="Search..."
                className=" outline-none bg-white px-4 py-2 rounded-lg w-full "
                type="search"
                name="search"
                id="search"
              />
            </li>
            <li>
              <Image src="/notification.svg" width={24} height={24} alt="" />
            </li>
            <li>
              <Image
                className=" rounded-full"
                src="/user-image.png"
                width={36}
                height={36}
                alt=""
              />
            </li>
            <li
              onClick={() => {
                setIsSidebarOpen(!isSideBarOpen);
              }}
            >
              <Image
                className="md:hidden"
                src={isSideBarOpen ? '/cross.png' : '/ham.png'}
                width={24}
                height={24}
                alt=""
              />
            </li>
          </ul>
        </nav>
        <div className="my-8 gap-4 grid_container grid_container__fill ">
          {statsArray.map((each, i) => (
            <StatsCard
              imgSrc={each.imgSrc}
              background={each.color}
              text={each.text}
              stat={each.stat}
              key={i}
            />
          ))}
        </div>

        <div className="space-y-4">
          <Chart
            heading="Activities"
            type="line"
            series={lineChartState.series}
            options={lineChartState.options}
          />
        </div>
        <div className="flex flex-wrap my-4 gap-4 ">
          <div className="md:w-[49%] w-full">
            <Chart
              height={200}
              heading="Top Products"
              type="pie"
              series={pieChartState.series}
              options={pieChartState.options}
            />
          </div>

          <div className="md:w-[49%] w-full">
            <Chart
              height={200}
              heading="Today schedule"
              type="pie"
              series={pieChartState.series}
              options={pieChartState.options}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
