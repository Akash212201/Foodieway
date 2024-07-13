import { Link } from 'react-router-dom'
import footerLogo from '../img/logo.png'
const Footer = () => {
  return (
    <div className='bg-[#f8f8f8] lg:px-[5em] px-[1em] py-[2em]'>
      <div className="footer">
        <div className="">
        <Link to={"/"} className="flex items-center gap-2 mb-4">
          <img src={footerLogo} className="w-8 object-cover" alt="footerLogo" />
          <p className="text-headingColor text-2xl font-bold"> Foodieway.com</p>
        </Link>
          
          <p className='text-[#696969]'>Foodieway is a place here you can please your soul and tummy with delicious food recipes of all cuisine and our services are absolutely free.</p>
        </div>
        <div className="">
          <p className="font-bold text-black mb-[1em] text-[1.1em]">Contact Us</p>
          <p className='text-[#696969] mb-[0.5em]'>info@foodieway.com</p>
          <p className='text-[#696969] mb-[0.5em]'>9149215780</p>
          <p className='text-[#696969] mb-[0.5em]'>Aligarh</p>
        </div>
        <div className="">
          <p className="font-bold text-black mb-[1em] text-[1.1em]">Socials</p>
          <p className="cursor-pointer text-[#696969] mb-[0.5em]">Linkedin</p>
          <p className="cursor-pointer text-[#696969] mb-[0.5em]">Facebook</p>
          <p className="cursor-pointer text-[#696969] mb-[0.5em]">Instagram</p>
          <p className="cursor-pointer text-[#696969] mb-[0.5em]">Twitter</p>
        </div>

      </div>
      <div className='text-[#696969] mt-[2em]'>By continuing past this page, you agree to our
        Terms of Service, Cookie Policy, Privacy Policy and
        Content Policies.
        All trademarks are properties of their
        respective owners. 2024 © Foodiway™ Ltd.
        All rights reserved.</div>
    </div>
  )
}
export default Footer
