import {makeStyles} from "@material-ui/core/styles";
import SectionHeader from "./SectionHeader";
import ShowcaseApp from "../ShowcaseApp/ShowcaseApp";

const showCases: ShowcaseAppData[] = [
  {
    name: 'This shitty blog (?!)',
    description: 'Should it needs detailed description? I don\'t think so LMAO',
    techniques: ['NextJS', 'Typescript', 'Material UI', 'Vercel'],
    thumbnail: require('../../assets/images/this-blog.png') as string,
    githubUrl:'https://github.com/hungphongbk/portfolio'
  }, {
    name: 'Vaithuhay.com',
    description: 'An E-commerce, SE0 driven website for Vaithuhay Company which developed utilized the power of Shopify and VueJS as frontend, ' +
      'and a backend subsystem developed based on NodeJS Express, VueJS & MongoDB, compatible and auxiliary with Shopify system',
    techniques: ['VueJS', 'NodeJS', 'MongoDB', 'Shopify'],
    thumbnail: require('../../assets/images/vaithuhay.png') as string,
    appUrl: 'https://vaithuhay.com'
  }, {
    name: 'Easy I18n (IntelliJ Plugin)',
    description: 'This is an easy plugin to manage internationalization for JSON or Resource-Bundle(Properties) based locale files. Most common use case is for translating Webapps or simple Java Applications\n' +
      'Currently this plugin is under development and haven\'t available on IntelliJ Plugin Marketplace yet',
    techniques: ['IntelliJ Plugin Development', 'Java', 'Kotlin'],
    thumbnail: require('../../assets/images/easyI18n.png') as string,
    githubUrl:'https://github.com/hungphongbk/easy-i18n'
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
