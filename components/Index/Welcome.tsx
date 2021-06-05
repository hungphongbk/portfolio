import {makeStyles} from "@material-ui/core/styles";
import {Avatar, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import IntroIcon from '../../assets/artworks/Intro.svg'
import IntroIconMobile from '../../assets/artworks/Intro-mobile.svg'
import me from '../../assets/images/me.jpg'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
  root: {
    height: `calc(100vh - 82px)`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "end",
    "& > div": {
      flexGrow: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: 'start',
      alignSelf: 'start',
      paddingLeft: '20%',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        paddingLeft: 0,
        justifyContent: 'center',
        '& >div': {
          textAlign: 'center'
        }
      },
      '& .MuiTypography-h1': {
        [theme.breakpoints.down('sm')]: {
          paddingTop: theme.spacing(4)
        }
      }
    },
    '& svg': {
      width: '100%',
      height: 'auto'
    }
  },
  subtitle: {
    marginTop: theme.spacing(2),
    fontStyle: "italic",
    color: theme.palette.grey['800'],
    letterSpacing: '-0.01rem'
  },
  avatar: {
    width: '13rem',
    height: '13rem',
    marginRight: '2rem',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0
    }
  }
}))

export default function Welcome() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return <div className={classes.root}>
    <div>
      <Avatar className={classes.avatar}>
        <Image src={me} alt={"me"} width={600} height={600}/>
      </Avatar>
      <div>
        <Typography variant={"h1"}>Hi, I'm Phong</Typography>
        <Typography className={classes.subtitle}>"I'm a trivial frontend developer, <br/>but I just wanna tell the world
          that
          I'd love what I do"</Typography>
      </div>
    </div>
    {matches ? <IntroIconMobile/> : <IntroIcon/>}
  </div>
}
