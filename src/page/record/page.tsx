import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar, Button, TabBar, Popup, Radio, RadioGroup } from 'tdesign-mobile-react';
import { EllipsisIcon, NotificationIcon, AppIcon } from 'tdesign-icons-react';
import dayjs from 'dayjs'

export const RecordPage = () => {
  const navigate = useNavigate()
  const [visible, setVisible] = useState()
  const [defaultVaule, setDefaultValue] = useState('idx0');

  const handleVisibleChange = (visible) => {
    setVisible(visible);
  }


  return (
    <div className="w-full h-full py-12">
      <Navbar
        leftIcon
        onLeftClick={() => {
          navigate('/')
        }}
        rightIcon={
          <div className='text-sm'>
            <a>联系客服</a>
          </div>
        }
      >
        订单明细
      </Navbar>
      <Popup visible={visible} onVisibleChange={handleVisibleChange} placement="right">
        <div className="h-full w-80 bg-white">
          <p className="text-gray-400 p-4 text-sm pb-2 border-b">筛选时间</p>
          <RadioGroup value={defaultVaule} onChange={(value) => setDefaultValue(value)}>
            <Radio label="今日" value="idx0"></Radio>
            <Radio label="本周" value="idx1"></Radio>
            <Radio label="本月" value="idx2"></Radio>
            <Radio label="全部" value="idx3"></Radio>
          </RadioGroup>
          <p className="text-gray-400 p-4 text-sm pb-2 border-b">筛选状态</p>
          <RadioGroup value={defaultVaule} onChange={(value) => setDefaultValue(value)}>
            <Radio label="确认" value="idx0"></Radio>
            <Radio label="取消" value="idx1"></Radio>
            <Radio label="暂停" value="idx2"></Radio>
            <Radio label="全部" value="idx3"></Radio>
          </RadioGroup>
        </div>
      </Popup>
      <div className='p-2'>
        <Button size="large" shape="rectangle" theme="primary" block onClick={() => { handleVisibleChange(true) }}>
          筛选数据
        </Button>
      </div>
      <div className="flex flex-col gap-y-4 mt-4 px-4">
        <div className="w-full px-4 py-3 bg-white rounded-md shadow-md flex flex-col text-sm text-black gap-y-3 my-2">
          <div className="flex justify-between">
            <div>
              <span className='text-stone-400 px-2'>订单号:</span>
              <span>123123123123123qwe</span>
            </div>
            <div>
              <span className='text-stone-400 px-2'>状态:</span>
              <span>确认</span>
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
          
        </div>
      </div>



    </div>
  )
}
