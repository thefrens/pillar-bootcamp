import { Link } from "react-router-dom";

import '../style/App.scss';
import logo_wifi from '../image/wifi.png';
import logo_snow from '../image/snow.png';
import logo_top from '../image/top.png';
import logo_bottom from '../image/bottom.png';
import logo_swimming from '../image/swimming.png';
import ellipse31 from '../image/ellipse31.png';
import ellipse32 from '../image/ellipse32.png';
import ellipse33 from '../image/ellipse33.png';
import Card from './Card';
import Button from './Button';

function App() {
  const cardData = [
    {
      cardClassName: "box1",
      title: "Title1",
      locationName: "Ukraine",
      price: 1000
    },
    {
      cardClassName: "box2",
      title: "Title2",
      locationName: "Ukraine2",
      price: 2000
    },
    {
      cardClassName: "box3",
      title: "Title3",
      locationName: "Ukraine3",
      price: 3000
    }
  ];

  return (
    <div className="App">
      <header>
            <div className="inner_header">
                <div className="header_logo">ProjName</div>
                <div className="header_menu">
                    <div>Home</div>
                    <Link to="/about">About</Link>
                    <div>Type of house</div>
                    <div>Contact</div>
                    <div className='header_menu_login'>Login</div>
                </div>
            </div>
        </header>

        <div className='main_logo'>
          <div className='main_logo_gradient'>
            <div className='main_logo_text'>
            <p>Enjoy Your <br/>Dream Vacation</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Lorem ipsum dolor sit amet, consectetur.</p>

            </div>
          
          </div>
        </div>

        <div className='menu_under_header'>
          <div className='under_header_facilities'>
            <div className='facilities_title'>
              <p>Facilities</p>
              <p>See More</p>
            </div>
            <div className='facilities_image'>
              <div className='facilities_block'>
                <div className='facilities_box first_box'>
                <img src={logo_swimming} alt="wifi" />
                </div>
                <p>Swiming</p>
              </div>
              <div className='facilities_block'>
                <div className='facilities_box'>
                  <img src={logo_wifi} alt="wifi" />
                </div>
                <p>Wi-fi</p>
              </div>
              <div className='facilities_block'>
                <div className='facilities_box'>
                <img src={logo_snow} alt="wifi" />
                </div>
                <p>AC</p>
              </div>
              <div className='facilities_block'>
                <div className='facilities_box last_box'>
                  <img src={logo_top} alt="wifi" />
                  <img src={logo_bottom} alt="wifi" />
                </div>
                <p>Dinner</p>
              </div>
            </div>
          </div>
          <div className='under_header_hotels'>
            <p>Hotels for You</p>
            <p>5 days 6 nights</p>
            <Button color="black"></Button>
            <Button color="blue"></Button>
          </div>
          <div className='under_header_search'>
            <input type="text" placeholder='Search.....'/>
            <div className='search_img_container'>
              <img src={ellipse31} alt="" />
              <img src={ellipse32} alt="" />
              <img src={ellipse33} alt="" />
            </div>
          </div>
        </div>

        <div className='entire_city'>
          <p>Entire city of choice</p>
          <div className='entire_city_block'>
            {cardData.map((card) => (
                <Card
                  cardClassName={card.cardClassName}
                  title={card.title}
                  locationName={card.locationName}
                  price={card.price}
                />
              )
            )}
          </div>

          <div className='entire_city_bg'></div>

        </div>
    </div>
  );
}

export default App;
