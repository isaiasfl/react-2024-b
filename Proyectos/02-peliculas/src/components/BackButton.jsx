import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  function handleClickBack() {
    navigate(-1);
  }
  return (
    <div className="bg-gray-800 ">
      <button
        className="bg-gray-800 text-white py-2 px-5 hover:bg-gray-600 "
        onClick={handleClickBack}
      >
        Volver
      </button>
    </div>
  );
};

export default BackButton;
