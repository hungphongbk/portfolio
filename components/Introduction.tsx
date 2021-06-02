import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: `calc(100vh - 82px)`,
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    marginTop: theme.spacing(2),
    fontStyle:"italic"
  }
}))

export default function Introduction() {
  const classes = useStyles();

  return <div className={classes.root}>
    <div>
      <Typography variant={"h2"}>Hi, I'm Phong</Typography>
      <Typography className={classes.subtitle}>I'm a trivial frontend developer, but I just wanna tell the world that I'd love what I do</Typography>
    </div>
  </div>
}
