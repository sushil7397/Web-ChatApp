import React from 'react'
import styled from "styled-components";
import Logo from "../assets/logo.png";
import avatar from "../assets/Avatar.png"
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
        <Container>
            
        <div className="foravt">
            <div className="home-page">
                <header>
                <h1>Welcome to <br />
                        <img className='img' src={Logo} alt="logo" />
                       ChatApp!</h1>
                    <p className='p1'>Join the conversation with your friends</p>
                    <p className='p2'>Chat with your friends from wherever you are</p>
                </header>
                <main>
                    <section className="login-form">
                    <Link to="/login"><button type="button">Login to chat</button></Link>
                    
                    </section>
                </main>

            </div>
                <div className="avatar"><img className="avata" src={avatar} alt="" /></div>
        </div>
            <footer>
                <p>&copy; {new Date().getFullYear()} ChatApp. All rights reserved.</p>
            </footer>
            

        </Container>
    </>
  )
}

export default Home;

const Container = styled.div`

.foravt{
    justify-content:center;
    display:flex;
    flex-direction: row;
}
.avata{
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left:10rem;
    height:40rem;
    text-align:justify;
}

background: linear-gradient(to bottom, #003399 38%, #000066 100%);

.img{
    height:3rem;
    margin-top:19px;
    padding-right:1rem;
}

.home-page {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 5rem;
  text-align:justify;
  height: 100vh;
}

header {
  text-align: justify;
  margin-bottom: 2rem;
  width:350px;
}

main {
  max-width: 400px;
  width: 90%;
  padding: 1rem;
  border-radius: 8px;
}

.login-form {
  margin-bottom: 1rem;
  text-align:justify;
  width:300px;
  
}

h1 {
  font-size: 3.5rem;
  font-weight:400;
}
.p1,.p2{
    font-size: 1.8rem;
    margin:1.2rem 0;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}
button{
    border-radius:20px;
    background:#CCCCC9;
    font-size:1rem;
    padding:10px  50px;
    cursor:pointer;
    

}
a {
    color: #000;
    text-decoration: none;
    font-weight: bold;
    cursor:pointer;
  }


footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 0.5rem 0;
  background:#00004c
//   border-top: 1px solid #ccc;
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
}
@media screen and (max-width: 768px) {
  .foravt {
    flex-direction: column;
    align-items: center;
  }

  .avata {
    margin-left: 0; 
    margin-top: 1rem; 
    height: auto; 
  }

  .home-page {
    margin-top: 2rem; 
  }

  h1 {
    font-size: 2.5rem;
  }

  .p1,
  .p2 {
    font-size: 1.4rem;
  }

  main {
    max-width: 90%; 
  }

  .login-form {
    width: 100%; 
  }
}

@media screen and (max-width: 600px) {

  .home-page {
    margin-top: 0.5rem; 
  }

  h1 {
    font-size: 1.8rem;
  }

  .p1,
  .p2 {
    font-size: 1.1rem; 
  }

  .img {
    height: 2rem;
  }

  .avata {
    margin-left: 0; 
    margin-top: 1rem; 
    height: auto; 
    max-height: 15rem; 
  }

  footer {
    font-size: 0.8rem; 
  }
}

`;

