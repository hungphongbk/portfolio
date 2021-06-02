import {makeStyles} from "@material-ui/core/styles";
import SectionHeader from "./SectionHeader";
import BubbleArtwork from '../../assets/artworks/Bubble.svg'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#666',
    marginTop: -1,
    '& svg': {
      height: '75vh',
      width: 'auto'
    },
    position: 'relative',
    display: 'flex',
    justifyContent: 'end'
  },
  content: {
    position: 'absolute',
    top: '15vh',
    right: '24vh'
  }
}))

export default function Introduction() {
  const classes = useStyles();
  return <div className={classes.root}>
    <BubbleArtwork/>
    <div className={classes.content}>
      <SectionHeader number={1} title={"About me"}/>
    </div>
  </div>
}
