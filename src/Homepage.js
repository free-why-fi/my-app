import logo from './logo.jpg';
import './Homepage.css';

function Homepage() {
  return (
    <div className="Homepage">
     <div className="menu">
       <div className='sub-menu'>
         <div className='menu-button'><a href='https://about.google/?fg=1&utm_source=google-KR&utm_medium=referral&utm_campaign=hp-header'> Google 정보</a></div>
         <div className='menu-button'><a href='https://store.google.com/KR?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=ko-KR&pli=1'>스토어</a></div>
        </div>
       <div className='sub-menu'>
       <div className='menu-button'><a href='https://mail.google.com/mail/u/0/'>Gmail</a></div>
       <div className='menu-button'><a href='https://www.google.com'>프로필</a></div>
       </div>
      </div>
     <div className='body'>
       <div className="logo">
         <a href='https://github.com/free-why-fi'>
         <img src={logo}/>
         </a>
        </div>
       <div className="search"><input className='search-input'></input></div>
     </div>
     
     
     <div className="footer">하단</div>
    </div>
  );
}

export default Homepage;
