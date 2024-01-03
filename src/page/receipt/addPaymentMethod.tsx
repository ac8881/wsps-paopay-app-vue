import { Tabs, TabPanel, Button } from "tdesign-mobile-react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

export const AddPaymentMethod = () => {
  const navigate = useNavigate();
  const handleChange = (v) => {
    if (v === 5) {
      navigate("/record");
    }
  };

  return <div className="overflow-hidden rounded-lg mt-2">123</div>;
};
