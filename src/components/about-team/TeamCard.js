import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles({
  root: {
    width: 280,
    marginTop: "25px",
  },
  media: {
    height: 200,
  },
});

export default function TeamCard(props) {
  const classes = useStyles();

  const { name, image, title, linkedin, github } = props.member

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="p">
            {title}
          </Typography>
          <Typography gutterBottom variant="h7" component="h2">
            GitHub Handle: {github}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link  href={linkedin} >
            <Button color="primary" >LinkedIn
            </Button>
        </Link>

      </CardActions>
    </Card>
  );
}
























// import React from "react";



// const hira = (
//    <>
//       <Button animated='horizontal' href="https://github.com/Hira63S">
//          <Button.Content hidden>GitHub</Button.Content>
//          <Button.Content visible>
//             <i class="github icon stylesGH" ></i>
//          </Button.Content>
//       </Button>
//       <Button color='linkedin' href="https://www.linkedin.com/in/hira-shahid-991b1583/" >
//          <Icon name='linkedin stylesLI' /> LinkedIn
//    </Button>
//    </>
// );

// const levi = (
//    <>
//       <Button animated='horizontal' href="https://github.com/Levi-Huynh">
//          <Button.Content hidden>GitHub</Button.Content>
//          <Button.Content visible>
//             <i class="github icon stylesGH" ></i>
//          </Button.Content>
//       </Button>
//       <Button color='linkedin' href="https://www.linkedin.com" >
//          <Icon name='linkedin stylesLI' /> LinkedIn
//    </Button>
//    </>
// );


// const sheila = (
//    <>
//       <Button animated='horizontal' href="">
//          <Button.Content hidden>GitHub</Button.Content>
//          <Button.Content visible>
//             <i class="github icon stylesGH" ></i>
//          </Button.Content>
//       </Button>
//       <Button color='linkedin' href="https://www.linkedin.com" >
//          <Icon name='linkedin stylesLI' /> LinkedIn
//    </Button>
//    </>
// );

// const connor = (
//    <>
//       <Button animated='horizontal' href="https://github.com/crsullivan">
//          <Button.Content hidden>GitHub</Button.Content>
//          <Button.Content visible>
//             <i class="github icon stylesGH" ></i>
//          </Button.Content>
//       </Button>
//       <Button color='linkedin' href="https://www.linkedin.com/" >
//          <Icon name='linkedin stylesLI' /> LinkedIn
//    </Button>
//    </>
// );

// const gabe = (
//    <>
//       <Button animated='horizontal' href="">
//          <Button.Content hidden>GitHub</Button.Content>
//          <Button.Content visible>
//             <i class="github icon stylesGH" ></i>
//          </Button.Content>
//       </Button>
//       <Button color='linkedin' href="www.linkedin.com/in/gabe-romero-design" >
//          <Icon name='linkedin stylesLI' /> LinkedIn
//    </Button>
//    </>
// );

// const rob = (
//    <>
//       <Button animated='horizontal' href="https://github.com/Rob1Ham">
//          <Button.Content hidden>GitHub</Button.Content>
//          <Button.Content visible>
//             <i class="github icon stylesGH" ></i>
//          </Button.Content>
//       </Button>
//       <Button color='linkedin' href="https://www.linkedin.com/in/rob1ham/" >
//          <Icon name='linkedin stylesLI' /> LinkedIn
//    </Button>
//    </>
// );

// const luna = (
//    <>
//       <Button animated='horizontal' href="https://github.com/johanaluna">
//          <Button.Content hidden>GitHub</Button.Content>
//          <Button.Content visible>
//             <i class="github icon stylesGH" ></i>
//          </Button.Content>
//       </Button>
//       <Button color='linkedin' href="https://www.linkedin.com/in/johanaluna/?locale=en_US" >
//          <Icon name='linkedin stylesLI' /> LinkedIn
//    </Button>
//    </>
// );

// const rudy = (
//    <>
//       <Button animated='horizontal' href="https://github.com/RNEnriquez">
//          <Button.Content hidden>GitHub</Button.Content>
//          <Button.Content visible>
//             <i class="github icon stylesGH" ></i>
//          </Button.Content>
//       </Button>
//       <Button color='linkedin' href="https://www.linkedin.com/in/BrandyBeckerFSW" >
//          <Icon name='linkedin stylesLI' /> LinkedIn
//    </Button>
//    </>
// );

// const akak = (
//    <>
//       <Button animated='horizontal' href="https://github.com/Aakak">
//          <Button.Content hidden>GitHub</Button.Content>
//          <Button.Content visible>
//             <i class="github icon stylesGH" ></i>
//          </Button.Content>
//       </Button>
//       <Button color='linkedin' href="https://www.linkedin.com/in/akak-almaz-46415770/" >
//          <Icon name='linkedin stylesLI' /> LinkedIn
//    </Button>
//    </>
// );


// //----------------------------------------- cards below -------------------------------------------
// const AboutCards = () => (

//    <>
//       <header class="about-header">
//          <div class="about-content" >
//             <h1 class="ui huge header">About</h1>
//             <p class="text-content">Sudoku App.</p>
//          </div>
//       </header>
//       <div className="cardWrap">
//          <h2 class="ui large header">Meet The Team</h2>
//          <p class="text-content">
//             Meet our awesome team of Sudoku Lovers. We are data scientists, frontend and backend enthusiasts, UX Designer and Team Lead
//            aka Lambda Students.
//          </p>
//          <div className="aboutStyles">
//             <Card
//                className="aboutCard"
//                image="https://avatars2.githubusercontent.com/u/8314540?s=400&v=4"
//                header=""
//                meta="Team Lead"
//                description=""
//                extra={hira}
//             />


//             <Card
//                className="aboutCard"
//                image="https://ca.slack-edge.com/T4JUEB3ME-UL8CVG7QE-3e8911514771-72"
//                header="Aaron Scott"
//                meta="Data Engineer"
//                description=""
//                extra={levi}
//             />


//             <Card
//                className="aboutCard"
//                image="https://avatars3.githubusercontent.com/u/6277592?s=400&v=4"
//                header="Nick Burkhalter"
//                meta="Data Engineer"
//                description=""
//                extra={}
//             />
//             <Card
//                className="aboutCard"
//                image="https://ca.slack-edge.com/T4JUEB3ME-UJZLU7RPX-0133bf5528e4-72"
//                header="Alfredo Quintana"
//                meta="Machine Learning Engineer"
//                description=""
//                extra={alfredo}
//             />
//             <Card
//                className="aboutCard"
//                image="https://avatars1.githubusercontent.com/u/49086915?s=400&v=4"
//                header="Derek Etman"
//                meta="Web React II"
//                description=""
//                extra={derek}
//             />
//             <Card
//                className="aboutCard"
//                image="https://ca.slack-edge.com/T4JUEB3ME-ULP6AEAF3-7aa2e18de5a8-72"
//                header="Dakotah Huey"
//                meta="Web React I"
//                description=""
//                extra={dakotah}
//             />
//             <Card
//                className="aboutCard"
//                image="https://avatars1.githubusercontent.com/u/52930131?s=400&u=b7619fa18bdb25b9beb319c6169e0fc85227e6fa&v=4"
//                header="Brandy Becker"
//                meta="Web React I"
//                description=""
//                extra={brandy}
//             />
//             <Card
//                className="aboutCard"
//                image="https://avatars0.githubusercontent.com/u/4251464?s=400&v=4"
//                header="Akak Almazbekova"
//                meta="Web React I"
//                description=""
//                extra={akak}
//             />
//             <Card
//                className="aboutCard"
//                image="https://avatars2.githubusercontent.com/u/46656679?s=400&v=4"
//                header="Kathryn Rhoads"
//                meta="Web Backend"
//                description=""
//                extra={kathryn}
//             />
//             <Card
//                className="aboutCard"
//                image="https://avatars0.githubusercontent.com/u/47621726?s=400&v=4"
//                header="Shawn McManus"
//                meta="Web Backend"
//                description=""
//                extra={shawn}
//             />
//          </div>
//       </div>
//    </>
// );

// export default AboutCards;
