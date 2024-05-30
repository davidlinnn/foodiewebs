import React, { useState } from "react";
import "./Card.css";
import CardItems from "./CardItems";

function Card() {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__wrapper">
          <ul className="card__items">
            <CardItemWrapper
              src="images/11.jpg"
              text="Sumatera Barat (Sumbar) adalah sebuah provinsi di Indonesia yang terletak di Pulau Sumatra dengan ibu kota Padang. Provinsi Sumatera Barat terletak sepanjang pesisir barat Sumatra bagian tengah, dataran tinggi Bukit Barisan di sebelah timur, dan sejumlah pulau di lepas pantainya seperti Kepulauan Mentawai. Dari utara ke selatan, provinsi dengan wilayah seluas 42.012,89 km² ini berbatasan dengan empat provinsi, yakni Sumatera Utara, Riau, Jambi, dan Bengkulu."
              label="History"
              path="/"
            />
            <CardItemWrapper
              src="images/12.jpg"
              text="Sumatera Barat adalah rumah bagi etnis Minangkabau dan Mentawai, walaupun wilayah adat Minangkabau sendiri lebih luas dari wilayah administratif Provinsi Sumatera Barat saat ini. Pada akhir tahun 2023, provinsi ini memiliki penduduk sebanyak 5.750.326 jiwa, dengan mayoritas beragama Islam. Sumatera Barat terdiri dari 12 kabupaten dan 7 kota dengan pembagian wilayah administratif sesudah kecamatan di seluruh kabupaten (kecuali Kabupaten Kepulauan Mentawai) dinamakan sebagai nagari."
              label="History"
              path="/"
            />
          </ul>
          <ul className="card__items">
            <CardItemWrapper
              src="images/13.jpg"
              text="Nama Provinsi Sumatera Barat bermula pada zaman Vereenigde Oostindische Compagnie (VOC), di mana sebutan wilayah untuk kawasan pesisir barat Sumatra adalah Hoofdcomptoir van Sumatras westkus. Kemudian dengan semakin menguatnya pengaruh politik dan ekonomi VOC, sampai abad ke-18 wilayah administratif ini telah mencakup kawasan pantai barat Sumatra mulai dari Barus sampai Inderapura."
              label="History"
              path="/"
            />
            <CardItemWrapper
              src="images/14.jpg"
              text="Pada awalnya, Sumatera Barat termasuk dalam Provinsi Sumatra dengan pusat administrasi di Bukittinggi. Namun, setelah pembagian Provinsi Sumatra, Sumatera Barat, Riau, dan Jambi menjadi bagian dari Provinsi Sumatra Tengah. Selama masa PRRI, Provinsi Sumatra Tengah dibagi menjadi tiga provinsi terpisah: Sumatera Barat, Riau, dan Jambi. Ibu kota Sumatera Barat kemudian dipindahkan dari Bukittinggi ke Padang berdasarkan Surat Keputusan Gubernur Sumatera Barat No. 1/g/PD/1958, tanggal 29 Mei 1958."
              label="History"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

function CardItemWrapper({ src, text, label, path }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li className="card__item">
      <CardItems src={src} label={label} path={path} text={isExpanded ? text : text.substring(0, 100) + '...'} />
      <button className="view-more-button" onClick={handleToggle}>
        {isExpanded ? 'View Less' : 'View More'}
      </button>
    </li>
  );
}

export default Card;
