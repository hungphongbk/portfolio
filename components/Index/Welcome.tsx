import {makeStyles} from "@material-ui/core/styles";
import {Avatar, Typography} from "@material-ui/core";
import IntroIcon from '../../assets/artworks/Intro.svg'
import me from '../../assets/images/me.jpg'

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
    width: '12rem',
    height: '12rem',
    marginRight: '2rem'
  }
}))

export default function Welcome() {
  const classes = useStyles();

  return <div className={classes.root}>
    <div>
      <Avatar src={me} alt={"me"} className={classes.avatar}/>
      <div>
        <Typography variant={"h2"}>Hi, I'm Phong</Typography>
        <Typography className={classes.subtitle}>"I'm a trivial frontend developer, <br/>but I just wanna tell the world
          that
          I'd love what I do"</Typography>
      </div>
    </div>
    <IntroIcon/>
  </div>
}
