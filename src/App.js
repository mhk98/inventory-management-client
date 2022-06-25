import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Computers from './Products/Computers';
import Clothes from './Products/Clothes';
import AddComputer from './Products/AddComputer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AddCloth from './Products/AddCloth';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import UpdateComputer from './Products/UpdateComputer';
import UpdateCloth from './Products/UpdateCloth';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/computer' element={<Computers></Computers>}></Route>
        <Route path='/cloth' element={<Clothes></Clothes>}></Route>
        <Route path='/update/:id' element={<UpdateComputer></UpdateComputer>}></Route>
        <Route path='/updateCloth/:id' element={<UpdateCloth></UpdateCloth>}></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}>
        <Route path='addcomputer' element={<AddComputer></AddComputer>}></Route>
        <Route path='addcloth' element={<AddCloth></AddCloth>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
