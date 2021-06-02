import {fade} from '@material-ui/core/styles/colorManipulator';
import {makeStyles} from "@material-ui/core/styles";
import classNames from "classnames";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'relative',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      content: "''",
      backgroundColor: fade(theme.palette.primary.main, 0.6),
      opacity: 1,
      transition: 'opacity .125s ease'
    },
    '&:hover::after': {
      opacity: 0
    },
    '& img': {
      maxWidth: '100%',
      maxHeight: '100%'
    }
  }
}))

export default function ShowcaseAppPreview(props: ShowcaseAppProps) {
  const classes = useStyles();
  return <div className={classNames(classes.root, props.className)}>
    <img src={props.value.thumbnail} alt={props.value.name}/>
  </div>
}
