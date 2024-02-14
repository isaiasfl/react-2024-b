import { useLocation } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const { state } = location;

  return <div>PaymentPage {state.stock}</div>;
};

export default PaymentPage;
