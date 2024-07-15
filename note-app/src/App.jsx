import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <center className="hero d-block align-items-center p-4">
        <div>
          <img src="wer.png" alt="" width={200} />
        </div>
        <div className="py-4">
          <h1 className="fs-5">Start Your Journey</h1>
          <h6 className="text-light-emphasis text-break w-50">Notes your first idea and start your journey</h6>
        </div>
      </center>
    </>
  );
};

export default App;
