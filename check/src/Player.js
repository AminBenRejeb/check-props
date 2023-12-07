import React from 'react'
import {Card,ListGroup}from 'react-bootstrap';

function Player({joueur,key}) {
  return (
    
    <Card className = 'a'style={{ width: '25rem',marginLeft:'520px',marginTop:'20px'}}>
    <Card.Img variant="top" src={joueur.ImageUrl} alt={joueur.name} />
    <Card.Body>
      <Card.Title style={{color:'red', fontWeight:'bold',textAlign:'center'}}>{joueur.name}</Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroup.Item style={{fontWeight:'bold',backgroundColor:'#C5FFF8'}}> Age : {joueur.age}</ListGroup.Item>
      <ListGroup.Item style={{fontWeight:'bold',backgroundColor:'#96EFFF'}}>Nationality: {joueur.nationality}</ListGroup.Item>
      <ListGroup.Item style={{fontWeight:'bold',backgroundColor:'#5FBDFF'}}> Team: {joueur.team}</ListGroup.Item>
      <ListGroup.Item style={{fontWeight:'bold',backgroundColor:'#7B66FF'}}> Jersey-Number : {joueur.jerseyNumber}</ListGroup.Item>
     
    </ListGroup>
    <Card.Body>
    
    </Card.Body>
  </Card>
  
 
  )
}
Player.defaultProps = {
  name: "Joueur inconnu",
  team: "Équipe inconnue",
  nationality: "Nationalité inconnue",
  jerseyNumber: "Numéro inconnu",
  age: "âge inconnu"
 
};

export default Player