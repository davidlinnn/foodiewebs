import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/ourteam.css';
import team01 from '../components/team-01.png';
import team02 from '../components/team-02.png';
import team03 from '../components/team-03.png';
import team04 from '../components/team-04.png';

const teamMembers = [
    {
        imgUrl: team01,
        name: 'Joshua Kurniawan K',
        position: 'Team Leader'
    },
    {
        imgUrl: team02,
        name: 'Fajar Chresty Ang',
        position: 'Team Member'
    },
    {
        imgUrl: team03,
        name: 'David Lin',
        position: 'Team Member'
    },
    {
        imgUrl: team04,
        name: 'Karen yapranata',
        position: 'Team Member'
    },
];

const Team = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    return (
        <section className='our__team'>
            <div className='container'>
                <div className='team__content'>
                    <h6 className='subtitle'>About Us</h6>
                    <h2>
                        <span className='highlight'>Our Team</span>
                    </h2>
                </div>
                <div className='team__wrapper'>
                    <Slider {...settings}>
                        {teamMembers.map((item, index) => (
                            <div className='team__item' key={index}>
                                <div className='team__img'>
                                    <img src={item.imgUrl} alt={item.name} />
                                </div>
                                <div className='team__details'>
                                    <h4>{item.name}</h4>
                                    <p className='description'>{item.position}</p>
                                    <div className='team__member-social'>
                                        <span><i className='ri-linkedin-line'></i></span>
                                        <span><i className='ri-twitter-line'></i></span>
                                        <span><i className='ri-facebook-line'></i></span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Team;
