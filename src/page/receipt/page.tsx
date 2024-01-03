import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  Button,
  Popup,
  SwipeCell,
  RadioGroup,
  Radio,
} from "tdesign-mobile-react";
import { AddIcon } from "tdesign-icons-react";
import dayjs from "dayjs";

export const ReceiptPage = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState();
  const [addMethod, setAddMethod] = useState();

  const paymentMethods = [
    {
      nickname: "xxxxx",
      account: "RIJfdkdk@gmail.com",
      name: "abc",
      maxCount: 123,
      onShelf: true,
    },
    {
      nickname: "xxxxx2",
      account: "RIJfdkdk@gm3ail.com",
      name: "abcd",
      maxCount: 123,
      onShelf: false,
    },
  ];

  const handleVisibleChange = (visible) => {
    setVisible(visible);
  };
  const handleToShelf = (boolean) => {
    console.log(boolean);
  };

  const handleAddMethod = () => {
    navigate(`/addPaymentMethod/${addMethod}`);
  };

  return (
    <div className="w-full h-full py-12">
      <Navbar
        className="z-10"
        leftIcon
        onLeftClick={() => {
          navigate("/");
        }}
        rightIcon={
          <Button size="small" shape="rectangle" theme="primary">
            编辑
          </Button>
        }
      >
        收款管理
      </Navbar>

      <Popup
        visible={visible}
        placement="center"
        onVisibleChange={handleVisibleChange}
      >
        <div className="bg-white rounded-lg shadow-lg p-4 pt-0 w-80 h-fit divide-y">
          <div className="flex w-full justify-between items-center h-10">
            <p>&nbsp;&nbsp;&nbsp;</p>
            <p className="text-xl">请选择收款方式</p>
            <div
              className="w-8 flex justify-end"
              onClick={() => setVisible(false)}
            >
              <i className="ri-close-circle-fill text-xl"></i>
            </div>
          </div>
          <div>
            <RadioGroup
              value={addMethod}
              onChange={(value) => setAddMethod(value)}
            >
              <Radio label="+ 添加  支付UID大额收款" value="UID"></Radio>
              <Radio label="+ 添加  支付宝收款" value="Alipay"></Radio>
              <Radio label="+ 添加  微信收款" value="WeChat"></Radio>
              <Radio label="+ 添加  银行卡收款" value="Bank"></Radio>
              <Radio label="+ 添加  聚合收款" value="JHSK"></Radio>
              <Radio label="+ 添加  数字CNY收款" value="DigitalCNY"></Radio>
              <Radio label="+ 添加  抖音收款" value="Douyin"></Radio>
            </RadioGroup>
          </div>
          <div className="flex justify-center mt-4 border-none">
            <Button
              size="large"
              shape="round"
              theme="primary"
              onClick={() => handleAddMethod()}
              disabled={!addMethod}
            >
              下一步
            </Button>
          </div>
        </div>
      </Popup>
      <div className="flex flex-col gap-y-4 mt-4 px-4">
        <div className="font-bold">今日收款</div>

        <div className="overflow-x-auto">
          <table className="table">
            {/* <thead>
              <tr>
                <th>名称</th>
                <th>收款笔数</th>
                <th>返佣金额</th>
              </tr>
            </thead> */}
            <tbody>
              <tr>
                <th>银行卡</th>
                <td>收款笔数：0</td>
                <td>返佣金额：123</td>
              </tr>
              <tr>
                <th>支付宝</th>
                <td>收款笔数：0</td>
                <td>返佣金额：123</td>
              </tr>
              <tr>
                <th>微信</th>
                <td>收款笔数：0</td>
                <td>返佣金额：123</td>
              </tr>
              <tr>
                <th>聚合码</th>
                <td>收款笔数：0</td>
                <td>返佣金额：123</td>
              </tr>
              <tr>
                <th>数字CNY</th>
                <td>收款笔数：0</td>
                <td>返佣金额：123</td>
              </tr>
              <tr>
                <th>抖音</th>
                <td>收款笔数：0</td>
                <td>返佣金额：123</td>
              </tr>
              <tr>
                <th>支付宝UID大额</th>
                <td>收款笔数：0</td>
                <td>返佣金额：123</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <Button
            icon={<AddIcon />}
            shape="rectangle"
            theme="primary"
            block
            onClick={() => {
              setVisible(true);
            }}
          >
            添加收款方式
          </Button>
        </div>
        <div></div>
      </div>
      {paymentMethods.map((i) => (
        <SwipeCell
          right={
            <Button
              theme={i.onShelf ? "danger" : "primary"}
              onClick={() => handleToShelf(!i.onShelf)}
            >
              {i.onShelf ? "点击下架" : "点击上架"}
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
