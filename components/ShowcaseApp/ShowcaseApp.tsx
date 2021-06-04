import {makeStyles, Theme} from "@material-ui/core/styles";
import ShowcaseAppPreview from "./ShowcaseAppPreview";
import classNames from "classnames";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles<Theme, { direction: 'left' | 'right' }>(theme => ({
  root: {
    display: 'grid',
    gridColumnGap: theme.spacing(3),
    alignItems: 'center',
    '& >:nth-child(2)': {display: 'flex', flexDirection: 'column'},
  },
  content: {
    '& *': {
      textAlign: props => props.direction === "left" ? 'right' : 'left'
    }
  },
  description: {
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
    borderWidth: 0,
    display: 'inline-block',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  techniques: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'outside none none',
    margin: 0,
    padding: 0,
    '& li': {
      fontSize: '1rem',
      color: theme.palette.text.secondary
    }
  },
  left: {
    '& >:nth-child(1)': {order: 1},
    '& >:nth-child(2)': {order: 2, alignItems: 'flex-end'},
    '&$root': {
      gridTemplateColumns: '5fr 4fr',
    },
    '& $description': {
      borderRightWidth: 2,
      paddingRight: theme.spacing(2)
    },
    '& $techniques': {
      justifyContent: 'end',
      '& li': {
        paddingLeft: theme.spacing(3)
      }
    }
  },
  right: {
    '& >:nth-child(1)': {order: 2},
    '& >:nth-child(2)': {order: 1, alignItems: 'start'},
    '&$root': {
      gridTemplateColumns: '4fr 5fr',
    },
    '& $description': {
      borderLeftWidth: 2,
      paddingLeft: theme.spacing(2)
    },
    '& $techniques': {
      justifyContent: 'start',
      '& li': {
        paddingRight: theme.spacing(3)
      }
    }
  },
}))

export default function ShowcaseApp(props: ShowcaseAppProps & { direction: 'left' | 'right' }) {
  const classes = useStyles(props);
  return <div className={classNames(classes.root, classes[props.direction], props.className)}>
    <ShowcaseAppPreview value={props.value}/>
    <div className={classes.content}>
      <Typography variant={"h4"}>{props.value.name}</Typography>
      <Typography color={"textSecondary"}
                  className={classes.description}>{props.value.description.split('\n').map((line, index) => <p
        key={index}>{line}</p>)}</Typography>
      <ul className={classes.techniques}>
        {props.value.techniques.map(t => <li key={t}>{t}</li>)}
      </ul>
    </div>
  </div>
}
