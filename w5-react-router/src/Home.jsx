import React from "react";
import "./Home.css";

function Home() {
  const mangas = [
    {
      title: "Made in Abyss",
      price: "127Bath",
      volumes: "เล่ม 1 - 11",
      img: "https://storage.naiin.com/system/application/bookstore/resource/product/202102/521069/6000044887_front_XXL.jpg",
    },
    {
      title: "Toriko",
      price: "733Bath",
      volumes: "เล่ม 1-444",
      img: "https://m.media-amazon.com/images/I/81AkI4LJxsL._UF1000,1000_QL80_.jpg",
    },
    {
      title: "Tensei shitara Dainana Ouji Datta node",
      price: "72Bath",
      volumes: "เล่ม 1-12",
      img: "https://du.lnwfile.com/amypmd.jpg",
    },
    {
      title: "Fullmetal Alchemist",
      price: "1570Bath",
      volumes: "เล่ม 1-51",
      img: "https://img.online-station.net/image_content/2025/04/Arakawa-4.jpg",
    },
    {
      title: "One Piece",
      price: "226Bath",
      volumes: "เล่ม 1-111",
      img: "https://storage.naiin.com/system/application/bookstore/resource/product/202205/547750/1000248421_front_XXL.jpg?imgname=%E0%B8%A7%E0%B8%B1%E0%B8%99-%E0%B8%9E%E0%B8%B5%E0%B8%8B-ONE-PIECE-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-1-%E0%B8%A0%E0%B8%B2%E0%B8%84-EAST-BLUE-(%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%A1%E0%B8%9A%E0%B8%B9%E0%B8%A3%E0%B8%93%E0%B9%8C)",
    },
    {
      title: "Dragon Ball",
      price: "356Bath",
      volumes: "เล่ม 1-42",
      img: "https://m.media-amazon.com/images/I/81-1jqVHePL.jpg",
    },
    {
      title: "ousama ranking",
      price: "215Bath",
      volumes: "เล่ม 1-12",
      img: "https://upload.wikimedia.org/wikipedia/en/5/51/%C5%8Csama_Ranking_volume_1_cover.jpg",
    },
    {
      title: "jojo land",
      price: "135Bath",
      volumes: "เล่ม 1-4",
      img: "https://bci.kinokuniya.com/jsp/images/book-img/97861/97861660/9786166013375.JPG",
    },
    {
      title: "soma",
      price: "292Bath",
      volumes: "เล่ม 1-36",
      img: "https://du.lnwfile.com/_webp_max_images/1024/1024/pz/gx/qg.webp",
    },
    {
      title: "demon slayer",
      price: "194Bath",
      volumes: "เล่ม 1-23",
      img: "https://m.media-amazon.com/images/I/81ZNkhqRvVL.jpg",
    },
    {
      title: "Hunter X Hunter",
      price: "194Bath",
      volumes: "เล่ม 1-38",
      img: "https://cdn-local.mebmarket.com/meb/server1/104616/Thumbnail/book_detail_large.gif?3",
    },
    {
      title: "Reborn",
      price: "552Bath",
      volumes: "เล่ม 1-42 ",
      img: "https://m.media-amazon.com/images/I/717TQvavb2L._UF1000,1000_QL80_.jpg",
    },
  ];

  return (
    <div className="home-container">
      <h1>HOME</h1>
      <h2>ยินดีต้อนรับเข้าสู่เว็บไซต์ขายมังงะ</h2>
      <h2>มังงะยอดนิยมประจำสัปดาห์</h2>
      <div className="grid">
        {mangas.map((manga, idx) => (
          <div key={idx} className="card">
            <img src={manga.img} alt={manga.title} />
            <h3>{manga.title}</h3>
            <p>{manga.volumes}</p>
            <p className="price">{manga.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
