import TopFooterLinks from "./TopFooterLinks"
import MidFooter from "./MidFooter"
import BottomFooter from "./BottomFooter"
const Footer = (props) => {
  const data = props.data
  return (
    <footer>
      <TopFooterLinks data={data[1]}/>
      <MidFooter data={data[2]}/>
      <BottomFooter/> 
    </footer>
  )
}

export default Footer