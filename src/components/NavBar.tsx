import { Link } from "react-router-dom"



const Header = () => {
  return (
    <nav  style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      borderBottom: '1px solid #ccc'
    }} className="bg-blue-100 ">
      
      <div>
        {/* logo */}
      <span className="text-5xl font-bold flex-1">ConfiDia</span>  </div>

      
      <ul className="flex flex-row gap-5 m-0  self-start ml-9 flex-2 pt-3.5" /* style={{ display: 'inline-flex', listStyle: 'none', gap: '150px', margin: 0 , paddingTop:'30px', textDecorationLine:"none"}} */>
        <li><Link className="text-black hover:text-blue-500 hover:transition-colors duration-300" to="/">Home</Link></li>
        <li><Link className="text-black hover:text-blue-500 hover: transition-colors duration-300" to="/service">Service</Link></li>
        <li><Link className="text-black hover:text-blue-500 hover: transition-colors duration-300" to="/design">Nos réalisations</Link></li>
        <li><Link className="text-black hover:text-blue-500 hover: transition-colors duration-300" to="/contact">Contact</Link></li>
        <li><Link className="text-black hover:text-blue-500 hover: transition-colors duration-300" to="/about">About</Link></li>
      </ul>
    </nav>
  )
}

export default Header