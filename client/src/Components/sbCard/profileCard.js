// Child of Cardlist.js
import React from 'react'; // Required for JSX i.e. <div> below is
// import { Card } from 'react-bootstrap';
import {  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const profileCard = (props) => {  
  const { 
          user_id, 
          // id,
          first_name,
          middle_name,
          last_name,
          username,
          // password,
          user_pic,
          birthdate,
          age,
          email,
          // pictures
        } = props;
  
  return ( // return ONE component i.e. div
    <div>
      {/* <img className='tc profilePic' alt='Profile Pic Coming Soon!' src={user_pic} width="auto" height='200' />
      <h6>
          Username: {username}<br />
          First Name: {first_name}<br />
          Middle Name: {middle_name}<br />
          Last Name: {last_name}<br />
          Email: {email}<br />
          Age: {age}<br />
          BirthDate: {birthdate}<br />
          User ID: {user_id}<br />
      </h6>
    </div> */}
      <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" className='tc profilePic' alt='Profile Pic Coming Soon!' src={user_pic} width="auto" height='200' /> */}
        <CardImg variant="top" className='tc profilePic cardImg' alt='Profile Pic Coming Soon!' src={user_pic} max-width="75%" max-height="75%" />
        <CardBody>
          {/* <Card.Title>{fullName}</Card.Title> */}
          <CardTitle>{first_name + ' '} {middle_name ? middle_name + ' ' : ''} {last_name} </CardTitle>
          <CardText>
            Username: {username}<br />
            User ID: {user_id}<br />
            Email: {email}<br />
            Age: {age}<br />
            BirthDate: {birthdate}
          </CardText>
          {/* <button type="button" className="btn btn-secondary marginButton" onClick={(event) => this.handleClick(event, topLevelState, set_logged_in)}>Submit</button> */}
          {/* <button type="button" className="btn btn-secondary marginButton" >Submit</button> */}
          {/* <Button variant="primary">Friend Request</Button> */}
        </CardBody>
      </Card>
    </div>
  )
}

export default profileCard;

// <div className='tc bg-green dit br3 pa2 ma2 grow bw2 shadow-5 fl w-20 card'> 
//        <img className='tc' src={user_pic} alt='Locating User'/>
//        <div className="card-body">
//           <p className="card-title">{first_name} {middle_name} {last_name}</p>
//           <p>Username: {username}</p>
//           <p>User ID: {user_id}</p>
//           <p>Birth Date:{birthdate}</p>
//           <p>Age: {age}</p>
//           {/* <p className="tl">e-mail: {email}</p> */}
//        </div>
//     </div>


/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>; */