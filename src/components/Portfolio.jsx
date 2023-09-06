import { MDBContainer } from "mdbreact"
import Card from 'react-bootstrap/Card';



export default function Portfolio () {
  const container = {
    marginTop: '20px',
    textAlign: 'center',
    marginBottom: '20px',
    fontFamily: 'helvetica',
    justifyContent: 'center',
  }

  const img = {
    marginTop: '10px',
    width: '300px',
    height: '200px'
  }

  const card = {
    width: '20rem', 
    marginTop: '20px', 
    marginBottom: '20px', 
    marginLeft: '20px', 
    marginRight: '20px',
    backgroundColor: '#EFF6EE',
  }

  const textColor = {
    color:'#273043'
  }

  return (
    <MDBContainer style={container}>
      <div className="parts row" style={{marginBottom:'20px'}}>
        <Card style={card}>
          <div className='bg-image hover-zoom'>
          <Card.Img  style={img} variant="top" src="./img/safepaws.png" />
          </div>
          <Card.Body>
            <Card.Title>Safe Paws</Card.Title>
            <Card.Text>
              This is a website that provides pet services. Create an account, add your pet information to your profile page, and sign-up for a booking from one of our staff!
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://github.com/a-down/safe-paws" target="_blank">View Repo</Card.Link>
            <Card.Link href="https://safe-paws-da967720d734.herokuapp.com/" target="_blank">View Deployment</Card.Link>
          </Card.Body>
        </Card>
        <Card style={card}>
          <Card.Img style={img} variant="top" src="/img/shazingle.png" />
          <Card.Body>
            <Card.Title>Shazingle</Card.Title>
            <Card.Text>
              This app was created using the Shazam API. You can access today's top hits, search for different artists, songs, and albums. Not sure what to listen to? That's okay! Just hit the random song button and Shazingle will find one for you! Saves your recent search history in local storage.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://github.com/toxicmix/group-project" target="_blank">View Repo</Card.Link>
            <Card.Link href="https://toxicmix.github.io/group-project/" target="_blank">View Deployment</Card.Link>
          </Card.Body>
        </Card>
        <Card style={card}>
          <Card.Img style={img} variant="top" src="/img/weather.png" />
          <Card.Body>
            <Card.Title>What's the Weather In...?</Card.Title>
            <Card.Text>
             This simple weather app uses the OpenWeather API to get the current weather and the weather for the next 5 days of any location you type. Using local storage, your recently searched cities will stay saved at the bottom of the screen.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://github.com/laurbaur024/weather-app" target="_blank">View Repo</Card.Link>
            <Card.Link href="https://laurbaur024.github.io/weather-app/" target="_blank">View Deployment</Card.Link>
          </Card.Body>
        </Card>
      </div>
      <div className="parts row">
        <Card style={card}>
          <Card.Img style={img} variant="top" src="/img/canvas.png" />
          <Card.Body>
            <Card.Title>Canvas Bubbles</Card.Title>
            <Card.Text>
              This is a quick practice demo I made to begin exploring the canvas element. Bubbles will randomly bounce around your screen and interact with the mouse as they are near it. I look forward to exploring more canvas projects soon!
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://github.com/laurbaur024/canvas-practice" target="_blank">View Repo</Card.Link>
            <Card.Link href="https://laurbaur024.github.io/canvas-practice/" target="_blank">View Deployment</Card.Link>
          </Card.Body>
        </Card>
        <Card style={card}>
          <Card.Img style={img} variant="top" src="/img/notetaker.png" />
          <Card.Body>
            <Card.Title>Express Note Taker</Card.Title>
            <Card.Text>
              This is a note taker that allows you to create, save, and delete notes. The app uses express to handle the functionality of the note taker.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://github.com/laurbaur024/express-note-taker" target="_blank">View Repo</Card.Link>
            <Card.Link href="https://express-note-taker-deluxe-47d9eeeae2ca.herokuapp.com/" target="_blank">View Deployment</Card.Link>
          </Card.Body>
        </Card>
        <Card style={card}>
          <Card.Img style={img} variant="top" src="/img/pwa.png" />
          <Card.Body>
            <Card.Title>J.A.T.E. (PWA)</Card.Title>
            <Card.Text>
              Just Another Text Editor is an application that I added PWA functionality to. You can hit the install button on the deployed application, install J.A.T.E, and use it even when you do not have internet. Once back on internet, whatever typed will sync back up.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://github.com/laurbaur024/pwa-homework" target="_blank">View Repo</Card.Link>
            <Card.Link href="https://pwa-homework-text-editor-a2b38e8745a7.herokuapp.com/" target="_blank">View Deployment</Card.Link>
          </Card.Body>
        </Card>
      </div>   
    </MDBContainer>
  )
}