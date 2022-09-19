import React, { useState, createContext, useContext} from "react";
import Topbar from "../components/Header/topbar";
import Footer from "../components/Footer";
import Drawer from "../components/Utilities/drawer/drawer";
import Cart from "../components/Cart/cart"
import CartContext from "./context";

const PageTemplate = ({children, title}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <CartContext.Provider value={{isOpen, setIsOpen}}>
            <div className="min-w-[375px]">
                <Topbar title={title} />
                <Drawer>
                    <Cart />
                </Drawer>
                {children}
                <Footer />
            </div>
        </CartContext.Provider>
    )
}
export default PageTemplate;