import logo from './Logo2.JPG';
import banner from './banner1.jpg';
import contentItem1 from './content1.jpg';
import contentItem2 from './content2.jpg';
import contentItem3 from './content3.jpg';
import contentItem4 from './content4.jpg';
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
          <img src={logo} />
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
          <img src={banner} />
        </div>
        <div className='section'>
          <div className='title'><a>이 상품 어때요?</a></div>
          <div className='content'>
            <a className='content-item'>
              <img src={contentItem1} />
              <p className='itemname'>[미램식품] 천연과즙 100% 신선한 아침</p>
              <p className='price'>5% 19,000원</p>
              <p>50,000원</p>
            </a>
            <a className='content-item'>
              <img src={contentItem2} />
              <p className='itemname'>[미램식품] 천연과즙 100% 신선한 아침</p>
              <p className='price'>5% 19,000원</p>
              <p>50,000원</p>
            </a>
            <a className='content-item'>
              <img src={contentItem3} />
              <p className='itemname'>[미램식품] 천연과즙 100% 신선한 아침</p>
              <p className='price'>5% 19,000원</p>
              <p>50,000원</p>
            </a>
            <a className='content-item'>
              <img src={contentItem4} />
              <p className='itemname'>[미램식품] 천연과즙 100% 신선한 아침</p>
              <p className='price'>5% 19,000원</p>
              <p>50,000원</p>
            </a>
          </div>
        </div>
      </main>
      <footer className='footer'><a>푸터에용</a></footer>
    </div>

  );
}

export default SubPage;
