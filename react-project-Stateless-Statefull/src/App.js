import React from 'react';
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';
import './App.css';

const { Meta } = Card;

const Data = [
  {
    nama : "Abdurrahman Jaes",
    job : "Front-End Web Developer",
    ico : "https://image.flaticon.com/icons/svg/366/366306.svg"
  },
  {
    nama : "Bramantya Gento",
    job : "Back-End Web Developer",
    ico : "https://image.flaticon.com/icons/svg/366/366341.svg"
  },
  {
    nama : "Muklas Muklis",
    job : "Android Developer",
    ico : "https://image.flaticon.com/icons/svg/366/366299.svg"
  },
  {
    nama : "Rudi Hedon",
    job : "UI/UX Designer",
    ico : "https://image.flaticon.com/icons/svg/366/366323.svg"
  },
]

function App() {
  return (
    <div className="App">
      {
        Data.map( data =>
          <Card style={{ width: 250 }} cover={
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRp_aCfbAyaZ1R-6Jabc5Zg9UWrGCvqUBfYdeFlmlVftW9Btxiz"/>}
          >
          <Meta
            avatar={<Avatar src={data.ico} />}
            title={data.nama}
            description={data.job}
          /></Card>,
        )
      }
    </div>
  );
}

export default App;