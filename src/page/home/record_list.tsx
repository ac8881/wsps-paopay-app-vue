import { Tabs, TabPanel, Button } from 'tdesign-mobile-react';
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'

export const RecordList = () => {
  const navigate = useNavigate()
  const handleChange = (v) => {
    if (v ===5) {
      navigate('/record')
    }
  }


  return (
    <div className='overflow-hidden rounded-lg mt-2'>
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

  )
}
