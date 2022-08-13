const dummyData = [
    {
    title: '1',
    img: 'https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.png'
    },
    {
    title: '2',
    img: 'https://unsplash.com/photos/NSFG5sJYZgQ'
    }
]

import Link from 'next/link';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel(){
   
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      };
      return (
        <div>
          <Slider {...settings}>
              {dummyData.map((item) => {
                  return  <div>
                      <img src={item.img} />
                </div>
              })}

          </Slider>
        </div>
      );
    
}

export default Carousel