import Saparians from "../Sapa/Saparians";
import Contents from "./Contents";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const title = "Popular Garri";

const PopularGarri = () => {
  return (
    <div className="popular">
      <h1>{title}</h1>
      <Contents />
      <Saparians />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default PopularGarri;
