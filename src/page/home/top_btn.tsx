import React, { useState } from 'react';
import { Popup, Button } from 'tdesign-mobile-react';

export const TopBtn = () => {
  const [visible, setVisible] = useState()

  const handleVisibleChange = (visible) => {
    setVisible(visible);
  }


  return (
    <>
      <Popup visible={visible} placement="center" onVisibleChange={handleVisibleChange}>
        <div className="bg-white rounded-lg shadow-lg p-4 pt-0 w-80 h-fit divide-y">
          <div className="flex w-full justify-between items-center h-10">
            <button className="text-sm">
              联系客服
            </button>
            <p className="text-xl">
              USDT充值
            </p>
            <div className="w-8 flex justify-end" onClick={() => setVisible(false)}>
              <i className="ri-close-circle-fill text-xl"></i>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center [&_p]:text-red-400">
              <i className="ri-qr-code-line text-[100px]" ></i>
              <p>
                充值地址:xxxxxsedfaasdf
              </p>
              <p>
                今日汇率: 1:7.3
              </p>
            </div>
          </div>

        </div>
      </Popup>
      <div className="grid grid-cols-4 py-4 px-2 gap-x-2 bg-white rounded-lg shadow-lg mt-2">

        <button className="btn no-animation text-lg h-min" onClick={() => {handleVisibleChange(true)} }>
          <div className="flex flex-col py-2 ">
            <i className="ri-wallet-2-line "></i>
            <span>充值</span>
          </div>
        </button>

        <button className="btn no-animation text-lg h-min">
          <div className="flex flex-col py-2 ">

            <i className="ri-qr-scan-2-line"></i>
            <span>转账</span>
          </div>
        </button>

        <button className="btn no-animation text-lg h-min">
          <div className="flex flex-col py-2 ">
            <i className="ri-book-read-line "></i>
            <span>收款管理</span>
          </div>
        </button>

        <button className="btn no-animation text-lg h-min">
          <div className="flex flex-col py-2 ">
            <i className="ri-question-line "></i>
            <span>新手教学</span>
          </div>
        </button>

      </div>
    </>
  )
}
