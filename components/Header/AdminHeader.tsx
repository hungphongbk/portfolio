import {Session} from "next-auth";
import {Button, Toolbar} from "@material-ui/core";
import styled from "styled-components";
import {makeStyles} from "@material-ui/core/styles";
import styles from "../../styles/jss/nextjs-material-kit/components/headerStyle.js";
import {faTachometerAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

// @ts-ignore
const useStyles = makeStyles(styles);

const AdminToolbar = styled(Toolbar)`
  &.MuiToolbar-root {
    width: 100%;
    height: 40px;
    min-height: 40px;
    background-color: var(--kpxc-card-background-color);

    &, .MuiButton-root {
      color: white;
    }
  }
`

export default function AdminHeader(props: { session: Session }) {
  const classes = useStyles()
  return <AdminToolbar>
    <Button startIcon={<FontAwesomeIcon icon={faTachometerAlt}/>}>Dashboard</Button>
  </AdminToolbar>;
}
