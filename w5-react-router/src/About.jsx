import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">ABOUT</h1>

      <div className="about-content">
        <div className="about-banner">
          <img
            src="https://t3.ftcdn.net/jpg/07/32/10/90/360_F_732109080_4lXwGofazqAiysUpcCnrbflsNOl9EMdW.jpg"
            alt="Banner"
            className="banner-image"
            width={123}
          />
        </div>

        <div className="about-description">
          <h2>เว็บไซต์นี้สร้างมาเพื่อขายมังงะต่างๆ</h2>
          <h2>
            จะมีมังงะที่มียอดขายเยอะที่สุดประจำสัปดาห์ และมังงะของเรื่องอื่นๆ
            อีกมากมาย
          </h2>
          <h2>จัดทำโดย นาย โรจนศักดิ์ เดชห้าว</h2>
        </div>

        <div className="about-gallery">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/f/f7/JoJo_no_Kimyou_na_Bouken_cover_-_vol1.jpg"
            alt="JoJo"
          />
          <img
            src="https://img.lazcdn.com/g/p/3297c74409854810a4c332003ad12d7c.jpg_360x360q75.jpg_.webp"
            alt="One Piece"
          />
          <img
            src="https://cdn-local.mebmarket.com/meb/server1/104616/Thumbnail/book_detail_large.gif?3"
            alt="Manga 3"
          />
          <img
            src="https://cdn-local.mebmarket.com/meb/server1/16275/Thumbnail/book_detail_large.gif?8"
            alt="Manga 4"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
