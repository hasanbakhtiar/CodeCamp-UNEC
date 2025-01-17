import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { MdNightlight } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { LangContext } from '../context/LangContext';
import { ThemeContext } from '../context/ThemeContext';
import { ProductContext } from '../context/ProductContext';
import slugify from 'slugify';
import { useCart } from 'react-use-cart';




const Header = () => {
    const [keyword,setKeyword] = useState("");
    const [theme,setTheme] = useContext(ThemeContext);
    const data = useContext(ProductContext);
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
    useEffect(()=>{
        document.body.setAttribute('data-bs-theme',theme);
    },[theme])
    const {totalItems} = useCart();
    
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
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Search</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                        </div>
                                        <div className="modal-body">
                                            <div className="input-group mb-3">
                                                <input onChange={e=>setKeyword(e.target.value)} type="text" className="form-control" placeholder="Enter product name" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                                <button className="btn btn-outline-dark" type="button" id="button-addon2">Search</button>
                                            </div>
                                            <ul className="list-group" style={{overflowY:"scroll",maxHeight:"300px"}}>
                                                {!keyword?"":data.filter(p=>p.title.toLowerCase().includes(keyword.toLowerCase())).map((item,index)=>(
                                                    <Link  to={`/product/${slugify(item.title,{lower:true})}`} key={index} className="list-group-item"><div aria-label="Close" data-bs-dismiss="modal"><img width={50} src={item.images[0]}/>{item.title}</div></Link>
                                                ))}
                                            </ul>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>



                        <Button variant='warning ms-3' onClick={()=>{
                            theme==='light'?localStorage.setItem('theme','dark'):localStorage.setItem('theme','light')
                            theme==='light'?setTheme('dark'):setTheme('light')
                        }}>{theme==="light"?<MdNightlight />:<FaSun />
                        }</Button>
                        <Button variant='dark ms-3' onClick={changeLang}>{lang==="AZ"?"EN":"AZ"}</Button>

                        <Link to="/cart" className="btn btn-dark position-relative ms-3">
                            <FaShoppingCart />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalItems}</span>
                        </Link>

                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Header