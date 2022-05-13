import logo from './Logo2.JPG';
import banner from './banner1.jpg';
import banner2 from './banner2.jpg';
import contentItem1 from './content1.jpg';
import contentItem2 from './content2.jpg';
import contentItem3 from './content3.jpg';
import contentItem4 from './content4.jpg';
import carticon from './cart_white_45_45.svg';
import topbutton from './topbutton.png';

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
          <a className='menu-item menu-item-red'>전체 카테고리</a>
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
              <div className='content-image-area'>
                <img className='itemimage' src={contentItem1} />
                <img className='cartimage' src={carticon} />
              </div>
              <p className='itemname'>[미램식품] 천연과즙 100% 신선한 아침</p>
              <p className='display-price'><span className='discount-rate'>5%</span> 19,000원</p>
              <p className='price'> 50,000원</p>
            </a>
            <a className='content-item'>
              <div className='content-image-area'>
                <img className='itemimage' src={contentItem2} />
                <img className='cartimage' src={carticon} />
              </div>
              <p className='itemname'>[미램식품] 천연과즙 100% 신선한 아침</p>
              <p className='display-price'><span className='discount-rate'>5%</span> 19,000원</p>
              <p className='price'>50,000원</p>
            </a>
            <a className='content-item'>
              <div className='content-image-area'>
                <img className='itemimage' src={contentItem3} />
                <img className='cartimage' src={carticon} />
              </div>
              <p className='itemname'>[미램식품] 천연과즙 100% 신선한 아침</p>
              <p className='display-price'><span className='discount-rate'>5%</span> 19,000원</p>
              <p className='price'>50,000원</p>
            </a>
            <a className='content-item'>
              <div className='content-image-area'>
                <img className='itemimage' src={contentItem4} />
                <img className='cartimage' src={carticon} />
              </div>
              <p className='itemname'>[미램식품] 천연과즙 100% 신선한 아침</p>
              <p className='display-price'><span className='discount-rate'>5%</span> 19,000원</p>
              <p className='price'>50,000원</p>
            </a>
          </div>
          <div className='banner banner-small'>
            <img src={banner2} />
          </div>
        </div>
        <div className='section'>
          <div className='row'>
            <div className='special-price-area'>
              <p className='title'>일일특가</p>
              <p className='description'>24시간 한정특가</p>
              <div className='clock-area'>
                <div className='clock'>
                  <div className='clock-hour'>
                  </div>
                  <div className='clock-min'>
                  </div>
                </div>

                <p className='time'>14:53:12</p>
              </div>
              <p className='description2'>망설이면 늦어요!</p>
            </div>
            <div className='content'>

              <a className='content-item'>
                <div className='content-image-area'>
                  <img className='itemimage' src={contentItem1} />
                  <img className='cartimage' src={carticon} />
                </div>
                <p className='itemname'>[미램식품] 천연과즙 100% 신선한 아침</p>
                <p className='display-price'><span className='discount-rate'>5%</span> 19,000원</p>
                <p className='price'> 50,000원</p>
              </a>
              <a className='content-item'>
                <div className='content-image-area'>
                  <img className='itemimage' src={contentItem2} />
                  <img className='cartimage' src={carticon} />
                </div>
                <p className='itemname'>[미램식품] 천연과즙 100% 신선한 아침</p>
                <p className='display-price'><span className='discount-rate'>5%</span> 19,000원</p>
                <p className='price'>50,000원</p>
              </a>
            </div>
          </div>

        </div>
        <div className='section'>
          <div className='title'><a>놓치면 후회할 가격</a></div>
          <div className='content'>
            <a className='content-item'>
              <div className='content-image-area'>
                <img className='itemimage' src={contentItem1} />
                <img className='cartimage' src={carticon} />
              </div>
              <p className='itemname'>[미램식품] 천연과즙 100% 신선한 아침</p>
              <p className='display-price'><span className='discount-rate'>5%</span> 19,000원</p>
              <p className='price'> 50,000원</p>
            </a>
            <a className='content-item'>
              <div className='content-image-area'>
                <img className='itemimage' src={contentItem2} />
                <img className='cartimage' src={carticon} />
              </div>
              <p className='itemname'>[미램식품] 천연과즙 100% 신선한 아침</p>
              <p className='display-price'><span className='discount-rate'>5%</span> 19,000원</p>
              <p className='price'>50,000원</p>
            </a>
            <a className='content-item'>
              <div className='content-image-area'>
                <img className='itemimage' src={contentItem3} />
                <img className='cartimage' src={carticon} />
              </div>
              <p className='itemname'>[미램식품] 천연과즙 100% 신선한 아침</p>
              <p className='display-price'><span className='discount-rate'>5%</span> 19,000원</p>
              <p className='price'>50,000원</p>
            </a>
            <a className='content-item'>
              <div className='content-image-area'>
                <img className='itemimage' src={contentItem4} />
                <img className='cartimage' src={carticon} />
              </div>
              <p className='itemname'>[미램식품] 천연과즙 100% 신선한 아침</p>
              <p className='display-price'><span className='discount-rate'>5%</span> 19,000원</p>
              <p className='price'>50,000원</p>
            </a>
          </div>
        </div>
        <div className='topbutton'>
          <img className='topbuttonimage' src={topbutton} />
        </div>
      </main>
      <footer className='footer'>
        <div className='footer-description'>
          <a>마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
            <p>마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.</p>
          </a>
        </div>
        <div className='right'>© KURLY CORP. ALL RIGHTS RESERVED</div>
      </footer>

    </div>

  );
}

export default SubPage;
