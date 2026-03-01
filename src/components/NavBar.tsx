import { Link } from "react-router-dom"



const Header = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '10px 20px',
      
      borderBottom: '1px solid #ccc'
    }}>
      
      <div style={{ fontWeight: 'bold', fontSize: '50px' }}>ConfiDia</div>

      
      <ul style={{ display: 'inline-flex', listStyle: 'none', gap: '150px', margin: 0 , paddingTop:'30px', textDecorationLine:"none"}}>
        <li><Link className="text-black hover:text-blue-500 hover:transition-colors duration-300" to="/">Home</Link></li>
        <li><Link className="text-black hover:text-blue-500 hover: transition-colors duration-300" to="/about">About</Link></li>
        <li><Link className="text-black hover:text-blue-500 hover: transition-colors duration-300" to="/service">Service</Link></li>
        <li><Link className="text-black hover:text-blue-500 hover: transition-colors duration-300" to="/design">Design</Link></li>
        <li><Link className="text-black hover:text-blue-500 hover: transition-colors duration-300" to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Header