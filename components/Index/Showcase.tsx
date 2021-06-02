import {makeStyles} from "@material-ui/core/styles";
import SectionHeader from "./SectionHeader";
import ShowcaseApp from "../ShowcaseApp/ShowcaseApp";

const showCases: ShowcaseAppData[] = [
  {
    name: 'This shitty blog (?!)',
    description: 'Should it needs detailed description? I don\'t think so LMAO',
    techniques: ['NextJS', 'Typescript', 'Material UI','Vercel'],
    thumbnail: require('../../assets/images/this-blog.png') as string
  }, {
    name: 'Vaithuhay.com',
    description: 'An E-commerce, SE0 driven website for Vaithuhay Company which developed utilized the power of Shopify and VueJS as frontend, ' +
      'and a backend subsystem developed based on NodeJS Express, VueJS & MongoDB, compatible and auxiliary with Shopify system',
    techniques: ['VueJS', 'NodeJS', 'MongoDB', 'Shopify'],
    thumbnail: require('../../assets/images/vaithuhay.png') as string
  }
]

const useStyles = makeStyles(theme => ({
  root: {
    padding: `${theme.spacing(6)}px 5%`,
    paddingTop: theme.spacing(10)
  },
  item: {
    marginTop: theme.spacing(8)
  }
}))

export default function Showcase() {
  const classes = useStyles()
  return <div className={classes.root}>
    <SectionHeader number={2} title={"Some personal things I've built across my career path"} align={"start"}/>
    {showCases.map((value, index) => <ShowcaseApp key={index} className={classes.item} value={value}
                                                  direction={index % 2 === 0 ? 'left' : 'right'}/>)}
  </div>
}
