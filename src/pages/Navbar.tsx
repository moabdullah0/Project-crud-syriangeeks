import {  NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <div>
    <ul className="bg-black text-white font-medium flex gap-5 py-4 items-center justify-center ">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/product'}>Product</NavLink>
        <NavLink to={'/product/Detailes'}>Product Detailes</NavLink>
    </ul>
    </div>
  )
}

export default Navbar