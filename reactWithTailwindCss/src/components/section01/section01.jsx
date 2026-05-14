import Navbar from "./navbar"
import Page01Content from './page01Content.jsx'
const Section01 = (props) => {
  return (
    <div className='h-screen w-full '>
        <Navbar />
        <Page01Content users={props.users} />
    </div>
  )
}

export default Section01;
