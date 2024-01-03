import { useState, useEffect } from 'react'
import { TopBtn, RecordList } from './'
import { Navbar, TabBar, Button, Tabs, TabPanel, TabBarItem } from 'tdesign-mobile-react';
import { EllipsisIcon, NotificationIcon, AppIcon } from 'tdesign-icons-react';
import dayjs from 'dayjs'

export const PayMentPage = () => {
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

  const handleChange = (v) => {

  }

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
        代付
      </Navbar>
      <div className='w-full bg-slate-100 h-full'>
        <div className='bg-white h-24 pb-4 flex justify-between items-center px-8 rounded-b-[50px]'>

          <div className='flex flex-col '>
            <div className='text-base font-semibold flex gap-2 items-center'>
              同一时间只能抢单
              <span className='text-lg'>0/6</span>
            </div>
            <span className='text-sm'>
              完成代付后，可继续代付抢单
            </span>
          </div>

          <button className="btn no-animation text-lg h-min" onClick={() => { handleVisibleChange(true) }}>
            <div className="flex flex-col py-1 ">
              <span>0.0</span>
              <span>今日代付返佣</span>
            </div>
          </button>

        </div>

        <div className='overflow-hidden rounded-lg mt-2'>
          <Button size="small" shape="rectangle" theme="primary" block>
            已收到
          </Button>

          <Tabs showBottomLine={false} change={handleChange}>
            <TabPanel value={1} label="全部订单">

              <div className="w-full px-4 py-3 bg-white rounded-md shadow-md flex flex-col text-sm text-black gap-y-3 my-2">
                <div className="flex justify-between">
                  <div>
                    <span className='text-stone-400 px-2'>订单号:</span>
                    <span>123123123123123qwe</span>
                  </div>
                  <div>
                    <span className='text-stone-400 px-2'>状态:</span>
                    <span>交易中</span>
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-y-3'>
                  <div className="flex ">
                    <span className='text-stone-400 px-2'>收款类型:</span>
                    <span>支付宝</span>
                  </div>
                  <div className="flex ">
                    <span className='text-stone-400 px-2'>返佣金额:</span>
                    <span> 200.00</span>
                  </div>
                  <div className="flex ">
                    <span className='text-stone-400 px-2'>收款金额:</span>
                    <span> 200</span>
                  </div>
                  <div className="flex ">
                    <span className='text-stone-400 px-2'> 姓名:</span>
                    <span>张三</span>
                  </div>
                  <div className="flex ">
                    <span className='text-stone-400 px-2'>昵称:</span>
                    <span>张三三</span>
                  </div>
                </div>
                <div>
                  <span className='text-stone-400 px-2 '>创建时间:</span>
                  <span>{dayjs().format('YYYY-MM-DD HH:mm')}</span>
                </div>
                <Button size="small" shape="rectangle" theme="primary" block>
                  已收到
                </Button>
                <Button size="small" theme="danger" shape="rectangle" block>
                  未收到
                </Button>
              </div>

              <div className="w-full px-4 py-3 bg-white rounded-md shadow-md flex flex-col text-sm text-black gap-y-3">
                <div className="flex justify-between">
                  <div>
                    <span className='text-stone-400 px-2'>订单号:</span>
                    <span>123123123123123qwe</span>
                  </div>
                  <div>
                    <span className='text-stone-400 px-2'>状态:</span>
                    <span>交易中</span>
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-y-3'>
                  <div className="flex ">
                    <span className='text-stone-400 px-2'>收款类型:</span>
                    <span>支付宝</span>
                  </div>
                  <div className="flex ">
                    <span className='text-stone-400 px-2'>返佣金额:</span>
                    <span> 200.00</span>
                  </div>
                  <div className="flex ">
                    <span className='text-stone-400 px-2'>收款金额:</span>
                    <span> 200</span>
                  </div>
                  <div className="flex ">
                    <span className='text-stone-400 px-2'> 姓名:</span>
                    <span>张三</span>
                  </div>
                  <div className="flex ">
                    <span className='text-stone-400 px-2'>昵称:</span>
                    <span>张三三</span>
                  </div>
                </div>
                <div>
                  <span className='text-stone-400 px-2 '>创建时间:</span>
                  <span>{dayjs().format('YYYY-MM-DD HH:mm')}</span>
                </div>
                <Button size="small" shape="rectangle" theme="primary" block>
                  已收到
                </Button>
                <Button size="small" theme="danger" shape="rectangle" block>
                  未收到
                </Button>
              </div>

            </TabPanel>
            <TabPanel value={2} label=" 交易中">
              <div className="tab-content">标签二内容</div>
            </TabPanel>
            <TabPanel value={3} label=" 暂停中">
              <div className="tab-content">标签二内容</div>
            </TabPanel>
            <TabPanel value={4} label=" 已取消">
              <div className="tab-content">标签二内容</div>
            </TabPanel>
            <TabPanel value={5} label="订单记录">

            </TabPanel>
          </Tabs>
        </div>

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
