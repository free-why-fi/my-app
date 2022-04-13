import logo from './Logo2.JPG';
import banner from './banner1.jpg';
import './SubPage.css';

function SubPage() {
  return (
    <div className="SubPage">
      <header className='header'>
        <div className='login'>
          <a className='menu-item'>회원가입</a>
          <a className='menu-item'>로그인</a>
          <a className='menu-item'>고객센터</a>
          </div>
        <div className='logo'>
        <img src={logo}/>
        </div>
        <div className='gnb'>
          <a className='menu-item'>전체 카테고리</a>
          <a className='menu-item'>신상품</a>
          <a className='menu-item'>베스트</a>
          <a className='menu-item'>알뜰쇼핑</a>
          <a className='menu-item'>특가/혜택</a></div>    
      </header>
      <main className='main'>
      <div className='banner'>
      <img src={banner}/> 
      </div>
      <div className='content'><a>컨텐츠에용</a></div>
      </main>      
      <footer className='footer'><a>푸터에용</a></footer>
    </div>

  );
}

export default SubPage;
