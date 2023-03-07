import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"

const Navbar = () => {
    const [active,setActive]=useState(false);
    const [open,setOpen]=useState(false);

    const isActive = ()=>{
        if (window.scrollY > 0) {
            setActive(true)
        } else {
            setActive(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',isActive);

        return () =>{
            window.removeEventListener('scroll',isActive);
        };
    }, [])

    const currentUser = {
        id: 1,
        username: 'John Doe',
        isSeller: true,
    }
    
    return (
        <div className={active || pathname !=="/" ? "navbar active":"navbar"}>
            <div className='container'>
                <div className='logo'>
                    <Link to="/" className='link'>
                        <span className='text'>fiverr</span>
                    </Link>
                    <span className='dot'>.</span>
                </div>
                <div className='links'>
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign In</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className='user' onClick={()=>setOpen(!open)}>
                            <img src="" alt=""/>
                            <span>{currentUser.username}</span>
                            {open && <div className='options'>
                                {
                                    currentUser?.isSeller && (
                                        <>
                                            <Link className="link" to="/mygigs">Gigs</Link>
                                            <Link className="link" to="/add">Add New Gig</Link>
                                        </>
                                    )
                                }
                                <Link className="link" to="/orders">Orders</Link>
                                <Link className="link" to="/messages">Messages</Link>
                                <Link className="link" to="/">Log Out</Link>
                            </div>}
                        </div>
                    )}
                </div>
            </div>
            {active || pathname !=="/" && (
            <>
                <hr/>
                <div className='menu'>
                    <span>Test</span>
                    <span>Test2</span>
                </div>
            </>)
            }
        </div>
    )
}

export default Navbar