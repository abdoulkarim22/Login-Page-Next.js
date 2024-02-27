import Image from "next/image";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


export default function Home() {
  return (

    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh'}}>
    <form className="formulaire">
     <p className="fs-1 fw-bold text-center mb-5">Login</p>
      <div className="mb-5">
        <input type="email" className="form-control" placeholder ="Username" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
      <div className="mb-5">
        <input type="password" placeholder="Password" className="form-control" id="exampleInputPassword1"/>
      </div>
      <div className="d-flex justify-content-center ">
        <button type="submit" className="btn btn-primary w-100 ">Login</button>
        </div>
    </form>
  </div>
  
  );
}
