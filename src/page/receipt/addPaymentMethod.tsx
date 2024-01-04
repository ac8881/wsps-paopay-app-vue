import {
  Navbar,
  Button,
  Input,
  Upload,
  Cell,
  Picker,
  PickerItem,
} from "tdesign-mobile-react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const titleName = {
  UID: "支付宝UID大额收款",
  Alipay: "支付宝收款",
  WeChat: "微信收款",
  Bank: "银行卡收款",
  JHSK: "聚合收款",
  DigitalCNY: "数字CNY收款",
  Douyin: "抖音收款",
};
const formatOptions = (labels) =>
  labels.map((label, index) => ({ label, value: index }));
const bankOptions = formatOptions([
  "北京银行",
  "上海银行",
  "广州银行",
  "深圳银行",
  "杭州银行",
  "成都银行",
  "长沙银行",
]);

export const AddPaymentMethod = () => {
  const [bankVisible, setBankVisible] = useState(false);
  const navigate = useNavigate();
  let { type } = useParams();

  const formContent = {
    UID: () => (
      <form>
        <div className="flex justify-center">
          <Upload
            // className="flex"
            accept="image/png"
            // action=""
          />
        </div>
        <h3 className="text-center mt-2 mb-2">添加支付宝UID大额收款二维码</h3>
        <Input label="姓名" placeholder="请输入支付宝UID大额姓名" />
        <Input label="账号" placeholder="请输入支付宝UID大额账号" />
        <Input label="昵称(编号)" placeholder="请输入昵称(编号)" />
        <Input
          type="number"
          label="最大接单数"
          placeholder="请输入最大接单数"
        />
      </form>
    ),
    Alipay: () => (
      <form>
        <div className="flex justify-center">
          <Upload
            // className="flex"
            accept="image/png"
            // action=""
          />
        </div>
        <h3 className="text-center mt-2 mb-2">添加支付宝收款二维码</h3>
        <Input label="姓名" placeholder="请输入支付宝姓名" />
        <Input label="账号" placeholder="请输入支付宝账号" />
        <Input label="昵称(编号)" placeholder="请输入昵称(编号)" />
        <Input
          type="number"
          label="最大接单数"
          placeholder="请输入最大接单数"
        />
      </form>
    ),
    WeChat: () => (
      <form>
        <div className="flex justify-center">
          <Upload
            // className="flex"
            accept="image/png"
            // action=""
          />
        </div>
        <h3 className="text-center mt-2 mb-2">添加微信收款二维码</h3>
        <Input label="姓名" placeholder="请输入微信姓名" />
        <Input label="昵称(编号)" placeholder="请输入昵称(编号)" />
        <Input
          type="number"
          label="最大接单数"
          placeholder="请输入最大接单数"
        />
      </form>
    ),
    Bank: () => (
      <form>
        <Cell
          arrow
          title="开户银行"
          note="选择开户银行"
          onClick={() => setBankVisible(true)}
        />
        <Picker
          visible={bankVisible}
          onConfirm={(values) => setBankVisible(false)}
          // onCancel={() => togglePicker("city", false)}
        >
          <PickerItem options={bankOptions} />
        </Picker>
        <Input label="开户省份" placeholder="请输入开户省份" />
        <Input label="开户网点" placeholder="请输入开户网点" />
        <Input label="银行卡号" placeholder="请输入银行卡号" />
        <Input label="银行卡姓名" placeholder="请输入银行卡姓名" />
        <Input label="昵称(编号)" placeholder="请输入昵称(编号)" />
        <Input
          type="number"
          label="最大接单数"
          placeholder="请输入最大接单数"
        />
      </form>
    ),
    JHSK: () => (
      <form>
        <div className="flex justify-center">
          <Upload
            // className="flex"
            accept="image/png"
            // action=""
          />
        </div>
        <h3 className="text-center mt-2 mb-2">添加收款聚合码</h3>
        <Input label="姓名" placeholder="请输入姓名" />
        <Input label="昵称(编号)" placeholder="请输入昵称(编号)" />
        <Input
          type="number"
          label="最大接单数"
          placeholder="请输入最大接单数"
        />
      </form>
    ),
    DigitalCNY: () => (
      <form>
        <Input label="姓名" placeholder="请输入姓名" />
        <Input label="昵称(编号)" placeholder="请输入昵称(编号)" />
        <Input label="钱包编码" placeholder="请输入钱包编码" />
      </form>
    ),
    Douyin: () => (
      <form>
        <div className="flex justify-center">
          <Upload
            // className="flex"
            accept="image/png"
            // action=""
          />
        </div>
        <h3 className="text-center mt-2 mb-2">添加抖音关注二维码</h3>
        <Input label="抖音UID" placeholder="请输入抖音UID" />
        <Input label="昵称(编号)" placeholder="请输入昵称(编号)" />
        <Input
          type="number"
          label="最大接单数"
          placeholder="请输入最大接单数"
        />
      </form>
    ),
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
        {titleName[type]}
      </Navbar>

      <div className="flex flex-col gap-y-4 mt-4 px-4">
        <div className="font-bold">添加{titleName[type]}</div>
        {formContent[type]()}
        <Button
          size="large"
          shape="round"
          theme="primary"
          // onClick={() => handleAddMethod()}
          // disabled={!addMethod}
        >
          下一步
        </Button>
      </div>
    </div>
  );
};
