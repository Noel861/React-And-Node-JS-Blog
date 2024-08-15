import React, { useEffect, useState } from 'react'
import {Container, Navbar, Nav, Form} from 'react-bootstrap';
import Logo from "../assets/Logo.png"
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    let auth = localStorage.getItem('auth')

    const logout =()=>{
        localStorage.setItem('auth', false)
        navigate('/')
        navigate(0);
    }

  return (
    <div className='Header'>
        <header>
        <div className='header_title'>
            <img src={Logo} alt="" />
            <p>Meta<span>Blog</span></p> 
        </div>
        <div className='Nav'>
        <Navbar data-bs-theme="white">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Blog">Blog</Nav.Link>
            <Nav.Link href="/Post">Single Post</Nav.Link>
            <Nav.Link href="Author">Author</Nav.Link>
            {auth == 'true' ? <Nav.Link href="/" onClick={logout}>Logout</Nav.Link> : <Nav.Link href="/Login">Login</Nav.Link>}
          </Nav>
        </Container>
        </Navbar>
        </div>
        <div className='header_search'>
            <input type="text" placeholder='Search...' />
            <button><FaSearch />
            </button>
        </div>
        <div className='header_switch'>
        <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
      />
      </Form>
        </div>
        </header>
    </div>
  )
}

export default Header