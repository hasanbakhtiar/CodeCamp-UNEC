import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { MdNightlight } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { LangContext } from '../context/LangContext';



const Header = () => {

    const [lang,setLang] = useContext(LangContext);
    
    const changeLang = ()=>{
        if (lang==="AZ") {
            setLang("EN");
            localStorage.setItem('lang','EN');
        }else{
            setLang("AZ")
            localStorage.setItem('lang','AZ');
        }
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand" to="/">{lang==="AZ"?"Eticarət Layihəsi":"Ecommerce Project"}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex" >

                        <div>
                            {/* Button trigger modal */}
                            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <FaSearch />
                            </button>
                            {/* Modal */}
                            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                        </div>
                                        <div className="modal-body">
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                                            </div>
                                            <ul className="list-group">
                                                <li className="list-group-item">An item</li>
                                                <li className="list-group-item">A second item</li>
                                                <li className="list-group-item">A third item</li>
                                                <li className="list-group-item">A fourth item</li>
                                                <li className="list-group-item">And a fifth one</li>
                                            </ul>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>



                        <Button variant='warning ms-3'><MdNightlight /></Button>
                        <Button variant='dark ms-3' onClick={changeLang}>{lang==="AZ"?"EN":"AZ"}</Button>

                        <button type="button" className="btn btn-dark position-relative ms-3">
                            <FaShoppingCart />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
                        </button>

                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Header