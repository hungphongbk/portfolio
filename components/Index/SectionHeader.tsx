import {ReactNode} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    '& small': {
      color: theme.palette.primary.main,
      display:'inline-block',
      marginRight:'.7rem'
    }
  }
}))

type SectionHeaderProps = {
  number: number,
  title: ReactNode
}
export default function SectionHeader(props: SectionHeaderProps) {
  const classes = useStyles();
  return <div className={classes.root}>
    <Typography variant={'h4'} className={classes.title}>
      <small>{`${(props.number + "").padStart(2, '0')}.`}</small>
      {props.title}
    </Typography>
  </div>
}
