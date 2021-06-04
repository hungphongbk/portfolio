import {makeStyles} from "@material-ui/core/styles";
import SectionHeader from "./SectionHeader";
import BubbleArtwork from '../../assets/artworks/Bubble.svg'
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#666',
    marginTop: -1,
    '& svg': {
      height: '75vh',
      width: 'auto',
      marginRight: '5%'
    },
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    '& ul': {
      position: 'absolute',
      top: '20vh',
      left: '5%',
      listStyle: 'outside none none',
      '& .MuiTypography-body1': {
        color: '#fafafa',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      },
      '& li': {
        position: 'relative',
        paddingLeft: theme.spacing(3),
        '&::before': {
          position: 'absolute',
          content: "'▹'",
          left: 0,
          color: '#fafafa',
          fontSize: '1.7rem'
        }
      }
    }
  },
  content: {
    position: 'absolute',
    top: '15vh',
    right: 'calc(24vh + 5%)',
    textAlign: 'right',
    width: '60vh',
    '& .MuiTypography-body1': {
      lineHeight: 1.7,
      '& strong': {
        color: theme.palette.primary.main
      }
    }
  }
}))

export default function Introduction() {
  const classes = useStyles();
  return <div className={classes.root}>
    <BubbleArtwork/>
    <div className={classes.content}>
      <SectionHeader number={1} title={"About me"} align={"end"}/>
      <Typography>At first, my name is <strong>Truong Hung Phong</strong>, HCMC-based frontend developer with 5 years
        experience.
        Currently I've had the privilege of working at a startup and several e-commerce companies. I'm quietly
        confident,
        naturally curious, and perpetually working on improving my chops one coding problem at a time.</Typography>
    </div>
    <ul>
      <li><Typography>ReactJS & NextJS</Typography></li>
      <li><Typography>JavaScript (ES6+) & Typescript</Typography></li>
      <li><Typography>NodeJS</Typography></li>
      <li><Typography>MongoDB, MySQL, PostgreSQL</Typography></li>
      <li><Typography>AWS</Typography></li>
    </ul>
  </div>
}
