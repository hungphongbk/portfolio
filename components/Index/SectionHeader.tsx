import {ReactNode} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Theme as DefaultTheme} from "@material-ui/core/styles/createMuiTheme";
import {Typography} from "@material-ui/core";
import classNames from "classnames";

type SectionHeaderProps = {
  className?: string,
  number: number,
  title: ReactNode,
  align?: 'start' | 'center' | 'end'
}

const useStyles = makeStyles<DefaultTheme, SectionHeaderProps>(theme => ({
  root: {
    display: 'flex',
    justifyContent: props => props.align ?? 'center',
    marginBottom: theme.spacing(2)
  },
  title: {
    '& small': {
      fontFamily: "'Jetbrains Mono', monospace",
      color: theme.palette.primary.main,
      display: 'inline-block',
      marginRight: '.7rem'
    }
  }
}))

export default function SectionHeader(props: SectionHeaderProps) {
  const classes = useStyles(props);
  return <div className={classNames(classes.root, props.className)}>
    <Typography variant={'h3'} className={classes.title}>
      <small>{`${(props.number + "").padStart(2, '0')}.`}</small>
      {props.title}
    </Typography>
  </div>
}
