import React, { useState }  from 'react'
import { Link} from 'react-router-dom'
const AccountMenu = ({page}) => {
    const items = [
        "My Account",
        "Personal Details",
        "Company Details", 
        "", 
        "My Orders",
        "Replenishment Orders",
        "Saved Carts",
        "",
        "Locations",
        "Payments",
        "",
        "Reviews"
    ]
    const items_link = [
        "",
        "personal-details",
        "company-details",
        "",
        "my-orders",
        "replenishment-orders",
        "saved-carts",
        "",
        "locations",
        "payments",
        "",
        "reviews"
    ]
    return (
        <ul className="">
            {   items.map((value,index) => (
                    value != "" ? 
                        index == 0 ?
                            <li key={index} className={value==page? "item-active first-item": "first-item"}>
                                <Link to={`/my-account/${items_link[index]}`}>{value}</Link>
                            </li>:
                            <li key={index} className={value==page? "item-active item": "item"}>
                                <Link to={`/my-account/${items_link[index]}`}>{value}</Link>
                            </li>:
                        <li key={index} className="item-divide-line" />
                ))
            }
            
        </ul>
    )
}

export default AccountMenu