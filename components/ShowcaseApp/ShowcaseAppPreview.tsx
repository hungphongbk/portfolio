import {fade} from '@material-ui/core/styles/colorManipulator';
import {makeStyles} from "@material-ui/core/styles";
import classNames from "classnames";
import Link from 'next/link'
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'pointer',
    width: '100%',
    position: 'relative',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      content: "''",
      backgroundColor: fade(theme.palette.primary.main, 0.5),
      [theme.breakpoints.down('sm')]: {
        backgroundColor: fade(theme.palette.primary.main, 0.2),
      },
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
  return <Link href={props.value.appUrl ?? props.value.githubUrl ?? '#'}>
    <div className={classNames(classes.root, props.className)}>
      <Image src={props.value.thumbnail} alt={props.value.name} width={1366} height={768}/>
    </div>
  </Link>
}
