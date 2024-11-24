import './Header.css'

export default function Header () {
   return (
     <a className='logo' href="/">
         <img 
         src="/logo.svg" 
         alt="логотип компании" 
         width='180' 
         height='26'/>
     </a>
   )
}