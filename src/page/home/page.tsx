import { useState, useEffect } from 'react'
import { TopBtn, RecordList } from './'
import { Navbar, TabBar, TabBarItem, Cell, Switch } from 'tdesign-mobile-react';

import { EllipsisIcon, NotificationIcon, AppIcon } from 'tdesign-icons-react';


export const HomePage = () => {
  const [count, setCount] = useState(0)

  const list = [
    { name: 'home', text: '首页', icon: <AppIcon /> },
    { name: 'payment', text: '代付', icon: <AppIcon /> },
    { name: 'my', text: '我的', icon: <AppIcon /> },
  ];
  const [value, setValue] = useState('label_1');

  const change = (changeValue) => {
    setValue(changeValue);
    console.log('TabBar 值改变为：', changeValue);
  };

  useEffect(() => {
    console.log('当前值：', value);
  }, [value]);


  return (
    <div className="w-full h-full py-12">
      <Navbar
        rightIcon={
          <div className='flex gap-4'>
            <p>
              <NotificationIcon />
            </p>
            <p>

              <EllipsisIcon />
            </p>
          </div>
        }
      >
        首页
      </Navbar>
      <div className='w-full bg-slate-100 h-full p-2'>
        <div className="w-full flex flex-col divide-y divide-dashed gap-y-4 bg-white rounded-lg shadow-lg p-2">
          <div className="flex justify-between items-center px-4">
            <p className="text-slate-500">当前可用余额</p>
            <p className="text-rose-500 font-semibold text-4xl">800.5</p>
            <Switch label={({ value }) => (value ? '接单中' : '未接单')} colors={['#00A870']} />
          </div>

          <div className='divide-x divide-dashed grid grid-cols-3 w-full py-2'>
            <div className='flex flex-col justify-center items-center'>
              <p className="text-lg font-semibold">200.0</p>
              <p className="text-slate-500">总余额</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className="text-lg font-semibold">-200.0</p>
              <p className="text-slate-500">代收交易中</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className="text-lg font-semibold">200.0</p>
              <p className="text-slate-500">代付交易中</p>
            </div>
          </div>
        </div>
        <TopBtn />
        <RecordList />

      </div>
      <TabBar value={value} onChange={change}>
        {list.map((item, i) => (
          <TabBarItem key={item.name || i} icon={item.icon} value={item.name}>
            {item.text}
          </TabBarItem>
        ))}
      </TabBar>
    </div>
  )
}
