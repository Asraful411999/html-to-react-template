import {Link} from 'react-router-dom';
import Footer from '../../footer';
const Layout = ({children})=>{
    return (
        <div>
            <nav className="flex justify-between  p-4 bg-black">
                <div className='flex justify-center items-center gap-x-2'>
                    <i class="fa fa-phone" style={{fontSize:'18px',color:'red'}} aria-hidden="true"></i>
                    <p className='text-white'>+91 9472395194</p>
                </div>
                <div className='flex justify-center items-center gap-x-2'>
                    <i class="fa fa-phone" style={{fontSize:'18px',color:'red'}}  aria-hidden="true"></i>
                    <p className='text-white'>+91 9472395194</p>
                </div>
            </nav>
            <nav className="bg-blue-500 flex justify-between px-4 py-6">
                <h1 className='text-white'>Inance</h1>
                <div className="flex gap-8 text-white">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/service">Service</Link>
                    <Link to="contact">Contact</Link>
                </div>
            </nav>
            <div className="p-15">
                {children}
            </div>
     
                <Footer />
            
        </div>
    )
}

export default Layout