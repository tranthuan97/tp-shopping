import { Col, Row } from 'antd';
import React from 'react';
import SliderComponent from '../../components/SliderComponent';
import HomeCarousel from './Components/HomeCarousel';
import MusicCard from './Components/MusicCard';
import Rank from './Components/Rank';

const data = [
  { id: 1, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg', name: 'Tôi chỉ biết câm nín nghe tiếng em khóc' },
  { id: 2, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg', name: 'Có điều gì sao không nói cùng anh' },
  { id: 3, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg', name: 'The Lazy Song' },
  { id: 4, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg', name: 'The Lazy Song' },
  { id: 5, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg', name: 'The Lazy Song' },
  { id: 6, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg', name: 'The Lazy Song' },
  { id: 7, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg', name: 'The Lazy Song' },
  { id: 8, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg', name: 'The Lazy Song' },
  { id: 9, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg', name: 'The Lazy Song' },
];



const HomeIndex = () => {

  return (
    <div>
      <HomeCarousel />
      <div className="mt-5">
        {/* <Row gutter={[16, 16]}>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
              return (
                <Col key={index} xs={24} md={12} lg={6} xl={4}>
                  <MusicCard />
                </Col>
              )
            })
          } 
        </Row> */}
        <SliderComponent
          data={data}
          title={'Nhạc Quốc Tế Mới Cập Nhật'}
        />
        <SliderComponent
          data={data}
          title={'Khu Vườn Ngôn Tình'}
        />
        <div className="mb-4">
          <Rank />
        </div>
      </div>
    </div >
  );
}
export default HomeIndex