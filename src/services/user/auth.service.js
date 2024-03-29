import axios from "axios";
import ApiRequest from "..";
import { anonymousTokenKey, customerTokenExpiresInKey, customerTokenKey } from "../../constants/localstorage";

const API_URL = process.env.REACT_APP_API_URL_STAGE

const register = async (email, password , firstName , lastName, tenantName , company , phoneNumber) => {
	let response
	const anonymousToken = localStorage.getItem(anonymousTokenKey)
	let headers = {
		'Content-Type': 'application/json',
		'Authorization': 'Bearer ' + anonymousToken
	}
	const payload = {
		email : email,
		password: password,
		customerDetails: {
			firstName: firstName,
			lastName: lastName,
			contactPhone : phoneNumber,
			company : company,
			contactEmail : email

		},
		signup : {
			email : email,
			password : password
		}
	}
	const signupApi = `${API_URL}/customer/${tenantName}/signup`
	response = await ApiRequest(signupApi, 'post', payload, headers)

	return response
};

const  login = async (username, password, userTenant) => {
	let response_data = null
	const anonymousToken = localStorage.getItem(anonymousTokenKey)
	await axios.post(API_URL + `/customer/${userTenant}/login`, 
		{
			"email" : username,
			"password": password
		}, 
		{
			headers:
			{
				'Content-Type': 'application/json', 
				'Authorization': 'Bearer ' + anonymousToken
			}
		}
	).then(async (response) =>  {
		if (response.data.accessToken) {
			let now = Date.now()

			localStorage.setItem("customer_accesstoken", JSON.stringify(response.data.accessToken));
			localStorage.setItem(customerTokenKey, response.data.accessToken)
			localStorage.setItem(customerTokenExpiresInKey, now + response.data.expiresIn * 1000)

			let customer_accesstoken = response.data.accessToken
			
				await axios.get
				(
					API_URL + `/customer/${userTenant}/me?expand=addresses`, 
					{
						headers:
						{
							'Content-Type': 'application/json', 
							'Authorization': 'Bearer ' + customer_accesstoken
						}
					}

				) 
				.then((response) => {
					if(response.data.firstName)
					{
						response_data = response.data
					}
				})
			
		}
		
	},
		(error) =>{
			
		}
	);

	return response_data
};

const logout = () => {
  
	localStorage.removeItem("user");
  	localStorage.removeItem(customerTokenKey)
  	localStorage.removeItem(customerTokenExpiresInKey)

};
const auth_services = {
	register,
	login,
	logout,
  };
export default auth_services