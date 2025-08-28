import TopFooterLinks from "./TopFooterLinks"
import MidFooter from "./MidFooter"
import BottomFooter from "./BottomFooter"
const Footer = (props) => {
  const links =props.links;
  return (
    <footer>
      <TopFooterLinks links={links[4]}/>
      <MidFooter/>
      <BottomFooter/> 
    </footer>
  )
}

export default Footer