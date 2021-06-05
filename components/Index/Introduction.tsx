import {makeStyles} from "@material-ui/core/styles";
import SectionHeader from "./SectionHeader";
import BubbleArtwork from '../../assets/artworks/Bubble.svg'
import BubbleArtworkMobile from '../../assets/artworks/Bubble-mobile.svg'
import {Typography, useMediaQuery, useTheme} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#666',
    marginTop: -1,
    '& svg': {
      height: 'auto',
      width: '107vw',
      marginLeft: '-5vw',
      marginRight: '-2vw'
    },
    position: 'relative',
    '& $header': {
      marginLeft: '1rem'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'flex-end',
      '& svg': {
        height: '75vh',
        width: 'auto',
        marginLeft: 'unset',
        marginRight: '5%'
      },
      '& $header': {
        marginLeft: 0
      },
    },
    '& ul': {
      listStyle: 'outside none none',
      paddingBottom:theme.spacing(6),
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
      },
      [theme.breakpoints.up('sm')]: {
        position: 'absolute',
        top: '20vh',
        left: '5%'
      }
    }
  },
  content: {
    position: 'absolute',
    top: 'calc(5vw + 2rem)',
    right: 'calc(5vw + 1.5rem)',
    left: 'calc(5vw + 1.5rem)',
    textAlign: 'right',
    [theme.breakpoints.up('sm')]: {
      top: '15vh',
      right: 'calc(24vh + 5%)',
      left: 'unset',
      width: '60vh',
    },
    '& .MuiTypography-body1': {
      lineHeight: 1.7,
      '& strong': {
        color: theme.palette.primary.main
      }
    }
  },
  header: {}
}))

export default function Introduction() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return <div className={classes.root}>
    {matches ? <BubbleArtworkMobile/> : <BubbleArtwork/>}
    <div className={classes.content}>
      <SectionHeader className={classes.header} number={1} title={"About me"} align={"end"}/>
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
