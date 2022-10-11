import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/home";
import Cart from './pages/cart';
import QuickOrder from './pages/quickorder'
import Checkout from './pages/checkout';
import ProductList,{ProductDetails} from "./pages/product";
import Account from './pages/account';
import AccountHome from './pages/account/AccountHome'
import MyAccount from './pages/account/MyAccount'
import AccountPersonalDetails from './pages/account/AccountPersonalDetails'
import AccountCompanyDetails from './pages/account/AccountCompanyDetails'
import AccountMyOrders from './pages/account/AccountMyOrders'
import AccountReplenishmentOrders from './pages/account/AccountReplenishmentOrders'
import AccountReplenishmentAddOrders from './pages/account/AccountReplenishmentAddOrders'
import AccountReplenishmentEditOrders from './pages/account/AccountReplenishmentEditOrders'
import AccountSavedCarts from './pages/account/AccountSavedCarts'
import AccountLocations from './pages/account/AccountLocations'
import AccountAddLocations from './pages/account/AccountAddLocations'
import AccountPayments from './pages/account/AccountPayments'
import AccountReviews from './pages/account/AccountReviews'
import AccountPaymentsEditCardDetails from './pages/account/AccountPaymentsEditCardDetails'
import NoPage from './pages/NoPage'
import { history } from "./helpers/history";

import { logout } from "./redux/slices/authReducer";
import { clearMessage } from "./redux/slices/messageReducer";
import InvalidTenant from './pages/InvalidTenant'

function App() {

	const { user: currentUser } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	useEffect(() => {
		history.listen((location) => {
		  dispatch(clearMessage()); // clear message when changing location
		});
	  }, [dispatch]);

	  const logOut = () => {
		dispatch(logout());
	  };

	return (
		<Router>
			<Routes>
				<Route path="/:tenant">
					<Route index exact element={<Home />} />
					<Route path="product/:maincategory" exact  element={<ProductList />} />
					<Route path="product/:maincategory/:subcategory/" exact element={<ProductList />} />
					<Route path="product/:maincategory/:subcategory/:category" exact element={<ProductList />} />
					<Route path="product/details/:product_id" element={<ProductDetails />} />
					<Route path="login" exact element={<Login />} />
					<Route path="signup" exact element={<Signup />} />
					<Route path="cart" exact element={<Cart />} />
					<Route path="checkout" exact element={<Checkout />} />
					<Route path="my-account" element={<Account />} >
						<Route index element={<AccountHome />} />
						<Route path="account-summary" element={<MyAccount />} />
						<Route path="personal-details" element={<AccountPersonalDetails />} />
						<Route path="company-details" element={<AccountCompanyDetails />} />
						<Route path="my-orders" element={<AccountMyOrders />} />
						<Route path="replenishment-orders" exact element={<AccountReplenishmentOrders />} />
						<Route path="replenishment-orders/add" exact element={<AccountReplenishmentAddOrders />} />
						<Route path="replenishment-orders/edit" exact element={<AccountReplenishmentEditOrders />} />
						<Route path="saved-carts" element={<AccountSavedCarts />} />
						<Route path="locations" exact element={<AccountLocations />} />
						<Route path="locations/add" exact element={<AccountAddLocations />} />
						<Route path="payments" exact element={<AccountPayments />} />
						<Route path="payments/edit_card_details" element={<AccountPaymentsEditCardDetails />} />
						
						<Route path="reviews" element={<AccountReviews />} />
						
					</Route>
					<Route path='quick_order' element = {<QuickOrder />} />
					
					{/* <Route path="contact" element={<Contact />} /> */}
					<Route path="*" element={<NoPage />} /> 
				</Route>
				<Route path="*" element={<InvalidTenant />} /> 
			</Routes>
		</Router>
	)
}

export default App;
