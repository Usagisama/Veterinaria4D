import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Components
import PrincipalMenu from './Components/web_components/0_principalmenu/principalmenu'
import Main from './Components/web_components/6_main/main'
import Footer from './Components/web_components/4_footer/footer'

//Users
import Login from './Components/cli_components/users/Login'
import Register from './Components/cli_components/users/cli-usrs/Register'
import ListUsr from './Components/ad_components/users/ad-usrs/UserPanel'
import EditUsr from './Components/cli_components/users/cli-usrs/EditData'


//Ecommerce 
import ListProduct from './Components/ad_components/ecommerce/Products/ListProducts'
import MyCart from './Components/cli_components/ecommerce/ShoopingCar/ShoopingCar'
import Purchase from './Components/cli_components/ecommerce/Purchase/Purchase'
import FinishPurchase from './Components/cli_components/ecommerce/Purchase/FinishPurchase'
import CategoryPanel from './Components/ad_components/ecommerce/Category/CategotyPanel'
import PurchasePanel from './Components/ad_components/ecommerce/Purchase/PurchasePanel'
import ShippingDetail from './Components/cli_components/ecommerce/ShippingDetail/ShippingDetail'


//Turnos
import ShiftsPanel from './Components/cli_components/shifts/ShiftsPanel'
import SpeciePanel from './Components/cli_components/shifts/SpeciePanel'
import SpecialityPanel from './Components/cli_components/shifts/SpecialityPanel'

//Main 
import Help from './Components/web_components/7_help/help'

//MP 
import Chekout from './Components/mp_component/Checkout'


function App() {

  const [carrito, setCarrito] = useState([]);
  const [autenticado, setAutenticado] = useState([]);
  const [price, setTotalPrice] = useState([]);
  const [kntcat, setKntcat] = useState([]);
  const [realstock, setRealStock] = useState(0);
  const [isAction, setisAction] = useState([]);
  const [functionPrice, setFunctionPrice] = useState([]);
  const [datusr, setdatusr] = useState([]);
  const [Shippingdetail, setShippingDetail] = useState({
    province: 'San Miguel de Tucuman',
    location: 'Tucuman',
    postalcode: '4000'
  });

  const userState = {
    token: localStorage.getItem('token'),
    autenticado: localStorage.getItem('token') ? true : false,
    usuario: localStorage.getItem('usuario') !== undefined ? JSON.parse(localStorage.getItem('usuario')) : null,
    isAdmin: localStorage.getItem('usuario') ? JSON.parse(localStorage.getItem('usuario')).isadmin : false
  }

  const commonprops = {
    userState, kntcat, setKntcat, datusr, setdatusr, realstock, setRealStock, setShippingDetail
  }

  return (
    <div className="App">

      <Router>
        <PrincipalMenu  {...commonprops} />
        <Switch>

          <Route strict path="/chekout">
            <Chekout />
          </Route>

          <Route strict path="/help">
            <Help />
          </Route>

          <Route strict path="/shippingdetail">
            <ShippingDetail userState={userState} Shippingdetail={Shippingdetail} setShippingDetail={setShippingDetail} />
          </Route>

          <Route strict path="/listusr">
            <ListUsr userState={userState} />
          </Route>
          <Route strict path="/finishpurchase">
            <FinishPurchase />
          </Route>
          <Route strict path="/purchasepanel">
            <PurchasePanel userState={userState} kntcat={kntcat} setKntcat={setKntcat} />
          </Route>
          <Route strict path="/categorypanel">
            <CategoryPanel userState={userState} />
          </Route>
          <Route strict path="/addspecie">
            <SpeciePanel userState={userState} />
          </Route>
          <Route strict path="/addspeciality">
            <SpecialityPanel userState={userState} />
          </Route>
          <Route strict path="/shiftspanel">
            <ShiftsPanel userState={userState} />
          </Route>
          <Route strict path="/purchase">
            <Purchase userState={userState} carProduct={carrito} setCarProduct={setCarrito} price={price} setTotalPrice={setTotalPrice} functionPrice={functionPrice} setFunctionPrice={setFunctionPrice} kntcat={kntcat} setKntcat={setKntcat} Shippingdetail={Shippingdetail} setShippingDetail={setShippingDetail} />
          </Route>
          <Route strict path="/MyCart">
            <MyCart carProduct={carrito} setCarProduct={setCarrito} user={userState} price={price} setTotalPrice={setTotalPrice} kntcat={kntcat} setKntcat={setKntcat} realstock={realstock} setRealStock={setRealStock} />
          </Route>
          <Route strict path="/listproduct">
            <ListProduct userState={userState} carProduct={carrito} setCarProduct={setCarrito} isAdmin={userState} isAction={isAction} setisAction={setisAction} kntcat={kntcat} setKntcat={setKntcat} price={price} setTotalPrice={setTotalPrice} functionPrice={functionPrice} setFunctionPrice={setFunctionPrice} realstock={realstock} setRealStock={setRealStock} />
          </Route>
          <Route strict path="/editusr">
            <EditUsr userState={userState} datusr={datusr} setDatUsr={setdatusr} />
          </Route>
          <Route strict path="/register">
            <Register autenticado={autenticado} setAutenticado={setAutenticado} userState={userState} />
          </Route>
          <Route strict path="/login">
            <Login autenticado={autenticado} setAutenticado={setAutenticado} />
          </Route>
          <Route strict path="/home">
            <Main />
          </Route>
          <Route strict path="/">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
