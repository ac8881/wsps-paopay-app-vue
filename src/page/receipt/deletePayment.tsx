import { Navbar, Button, SwipeCell } from "tdesign-mobile-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const paymentMethods = [
  {
    nickname: "xxxxx",
    account: "RIJfdkdk@gmail.com",
    name: "abc",
    maxCount: 123,
    onShelf: true,
    key: "aaa",
  },
  {
    nickname: "xxxxx2",
    account: "RIJfdkdk@gm3ail.com",
    name: "abcd",
    maxCount: 123,
    onShelf: false,
    key: "bbb",
  },
];

export const DeletePayment = () => {
  const navigate = useNavigate();
  const handleToDelete = (key) => {
    console.log(key);
  };

  return (
    <div className="w-full h-full py-12">
      <Navbar
        className="z-10"
        leftIcon
        onLeftClick={() => {
          navigate("/receipt");
        }}
      >
        删除收款
      </Navbar>
      {paymentMethods.map((i) => (
        <SwipeCell
          key={i.key}
          right={
            <Button theme="danger" onClick={() => handleToDelete(i.key)}>
              删除
            </Button>
          }
          content={
            <div className="flex flex-col gap-y-4">
              <div className="w-full px-4 py-3 bg-white rounded-md flex flex-col text-sm text-black gap-y-3 my-2">
                <div className="flex justify-between">
                  <div>
                    <span className="text-stone-400 px-2">昵称:</span>
                    <span>{i.nickname}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <span className="text-stone-400 px-2">支付宝账号:</span>
                    <span>{i.account}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <span className="text-stone-400 px-2">支付宝姓名:</span>
                    <span>{i.name}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <span className="text-stone-400 px-2">最大接单数:</span>
                    <span>{i.maxCount}</span>
                  </div>
                </div>
              </div>
            </div>
          }
        />
      ))}
    </div>
  );
};
