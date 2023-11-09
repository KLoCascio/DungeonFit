import { Link } from 'react-router-dom'
import Logo from "../assets/logo/logo.svg"
import { GiBrutalHelm, GiCompass } from 'react-icons/gi'
import { CiDumbbell } from 'react-icons/ci'
import { GrTrophy } from 'react-icons/gr'
import { FaPeopleGroup } from "react-icons/fa6"

const NavMobile = () => {
  return (
    <div>
      
      <div>
            <button className="mobile-link"><Link to="/character"><GiBrutalHelm /></Link></button>
            <button className="mobile-link"><Link to="/activities"><CiDumbbell /></Link></button>
            <button className="mobile-link"><Link to="/achievements"><GrTrophy /></Link></button>
            <button className="mobile-link"><Link to="/checkin"> <GiCompass /></Link></button>
            <button className="mobile-link"><Link to="/party"> <FaPeopleGroup/></Link></button>
        </div>
    </div>
  )
}

export default NavMobile
