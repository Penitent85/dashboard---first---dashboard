'use client';
import { main } from '@popperjs/core';
import Link from 'next/link';
import React from 'react';
import { HiArrowDown, HiArrowUp } from 'react-icons/hi2';
import { LineChart, PieChart } from '@mui/x-charts';

const AdminPage = () => {
  return (
    <main>
      <div className='flex items-center'>
        <div className='h-[250px] w-[300px] shadow-md ml-10'>
          <span className='flex font-semibold items-center justify-center text-[#555] text-xl cursor-pointer mt-10 '>
            Revenue
          </span>
          <div className='flex items-center justify-center mt-3 '>
            <span className='font-semibold'>%500</span>
          </div>
          <div className='flex items-center justify-center mt-3'>
            <HiArrowUp className='text-3xl text-green-700' />
            <HiArrowDown className=' text-3xl text-red-700' />
          </div>
          <div className=' items-center flex justify-center  mt-3'>
            <span className=' font-semibold '>Compared To Last Month</span>
          </div>
        </div>

        <div className='h-[250px] w-[300px] shadow-md ml-10'>
          <span className='flex font-semibold items-center justify-center text-[#555] text-xl cursor-pointer mt-10 '>
            Users
          </span>
          <div className='flex items-center justify-center mt-3 '>
            <span className='font-semibold'>1000</span>
          </div>
          <div className='flex items-center justify-center mt-3'>
            <HiArrowUp className='text-3xl text-green-700' />
            <HiArrowDown className=' text-3xl text-red-700' />
          </div>
          <div className=' items-center flex justify-center  mt-3'>
            <span className=' font-semibold '>Compared To Last Month</span>
          </div>
        </div>

        <div className='h-[250px] w-[300px] shadow-md ml-10'>
          <span className='flex font-semibold items-center justify-center text-[#555] text-xl cursor-pointer mt-10 '>
            Statistics
          </span>
          <div className='flex items-center justify-center mt-3 '>
            <span className='font-semibold'>%500</span>
          </div>
          <div className='flex items-center justify-center mt-3'>
            <HiArrowUp className='text-3xl text-green-700' />
            <HiArrowDown className=' text-3xl text-red-700' />
          </div>
          <div className=' items-center flex justify-center  mt-3'>
            <span className=' font-semibold '>Compared To Last Month</span>
          </div>
        </div>
      </div>
      {/* Chart */}
      <div className=' flex items-center m-10 shadow-md'>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
          width={500}
          height={300}
        />
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: 'series A' },
                { id: 1, value: 15, label: 'series B' },
                { id: 2, value: 20, label: 'series C' },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      </div>
      <div className='flex items-center '>
        <div className=' h-400px] w-[500px] shadow-xl m-5'>
          <h3 className=' pl-10 font-semibold text-xl'>Recent Users</h3>
          <ul className='space-y-10 p-10 '>
            <li>James Doe</li>
            <li>Jane Doe</li>
            <li>Lisney Doe</li>
            <li>Rachil Doe</li>
          </ul>
        </div>
        <div className=' h-400px] w-[500px] shadow-xl m-5'>
          <h3 className=' pl-10 font-semibold text-xl'>Recent Transactions</h3>
          <ul className='space-y-10 p-10 '>
            <li>James Doe - $450</li>
            <li>Jane Doe - $500</li>
            <li>Lisney Doe - $600</li>
            <li>Rachil Doe - $700</li>
          </ul>
        </div>
       
      </div>
    
    </main>
  );
};

export default AdminPage;
