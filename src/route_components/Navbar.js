import React  from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = ({statuslogin}) => {

    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <div className="container-fluid">           
            <NavLink to="#" className="navbar-brand">ARVIC</NavLink>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#x">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="x">
                <ul className="navbar-nav ml-auto">
                {/* <ul className="navbar-nav ms-auto"> */}
                    <li className="nav-item">
                        <NavLink to="/Dashboard" className="nav-link">Dashboard</NavLink>                   
                    </li>                   
                   
                    <li className="nav-item">
                        <NavLink to="/Patientlists" className="nav-link">รายชื่อคนไข้</NavLink>                   
                    </li> 

                    <li className="nav-item">
                        <NavLink to="/Manageuser" className="nav-link">จัดการผู้ใช้</NavLink>                   
                    </li>

                    <li className="nav-item">
                        <NavLink to="/Questionaire" className="nav-link">Questionaire</NavLink>                   
                    </li>

                </ul>
                <ul className="navbar-nav ms-auto">
                   
                    { statuslogin === 'login'? (<li className="nav-item">
                        <NavLink to="/login" className="nav-link active btn-success"><i class="fa fa-user-circle" aria-hidden="true"></i>&nbsp;{statuslogin}</NavLink>
                    </li>) :(<li className="nav-item">
                        <NavLink to="/logout" className="nav-link active btn-black"><i class="fa fa-user-circle" aria-hidden="true"></i>&nbsp;{statuslogin}</NavLink>
                    </li>)} 
                                       
                </ul>
                
            </div>
        </div>    
    
    </nav>
)
   
}

export default Navbar