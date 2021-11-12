import React from "react";
import {Button,Card,Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'
import { useState } from "react" ;


function Main(){

    const [clubs,setClubs] = useState('New Club Feature')
    const [events,setEvents] = useState('Latest Event Feature ')
    const [offers,setOffers] = useState('New offer Feature ')
   
    const handelclick = () => {

        setClubs('RETRO - This is a new club located in Campsbay: New elegent style with 3 bars and 2 dance floors');
    }
    
    const handelclick1 = () => {

        setEvents('Clifton Summer Jam located on Clifton beach: Date: 31 Nov 2021 Entry fee R120 live Dj 12hour set  ');
        
    }

    const handelclick2 = () => {

        setOffers('Pump Bar located in longstreet: Buy 2 get 2 free on any drink from 7pm until 10pm weekdays valid till Nov 2021');
        
    }


   return(

        

        <div class="row">


                    <div
                    id="carouselBasicExample"
                    class="carousel slide carousel-fade"
                    data-mdb-ride=""
                    >
                    <div class="">
                        
                        <div class="carousel-item active">
                        <img
                            src="http://mdbootstrap.com/img/Photos/Others/images/92.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Capetowns best clubs and parties</h5>
                            
                        </div>
                        </div>

                    
                        <div class="carousel-item">
                        <img
                            src=""
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        </div>

                    
                        <div class="carousel-item">
                        <img
                            src=""
                            class="d-block w-100"
                            alt="..."
                        />
                        <div class="carousel-caption d-none d-md-block">
                           
                        </div>
                        </div>
                    </div>
                    
                    
                    <button
                        class="carousel-control-prev"
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide="prev"
                    >
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next"
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide="next"
                    >
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>


        <Navbar className="Cardmain" bg="" variant="">

                    <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="../images/newclub.jpg" />
                    <Card.Body>
                    <Card.Title>New Club</Card.Title>
                    <Card.Text >
                    {clubs}
                    </Card.Text>
                    <Button onClick={handelclick} variant="primary">Click</Button>
                    </Card.Body>
                    </Card>

                    <Card  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../images/new events.jpg" />
                    <Card.Body>
                    <Card.Title>Up coming events</Card.Title>
                    <Card.Text  >
                    {events}
                    </Card.Text>
                    <Button onClick={handelclick1} variant="primary">Click</Button>
                    </Card.Body>
                    </Card>
                    
                    <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src="../images/special.jpg" />
                    <Card.Body>
                    <Card.Title>Special offers</Card.Title>
                    <Card.Text>
                    {offers}
                    </Card.Text>
                    <Button onClick={handelclick2} variant="primary">Click</Button>
                    </Card.Body>
                    </Card>


                
                    
        
        </Navbar>
            
        </div>




    )

} export default Main

