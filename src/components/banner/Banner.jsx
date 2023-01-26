import React from 'react'
// import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { Container } from '../GlobalStyles'
import { Box, Img } from '../index'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { SliderNextIcon, SliderPrevIcon } from '../../assets/icons/index';
import bannerOne from '../../assets/Img/bannerOne.png'
import bannertwo from '../../assets/Img/bannertwo.webp'
import bannerthree from '../../assets/Img/bannerthree.png'
import { colors } from '../../helpers/Colors';

function Banner() {

    const banners = [
        {
            id: 1,
            img: bannerOne,
        },
        {
            id: 2,
            img: bannertwo,
        },
        {
            id: 3,
            img: bannerthree,

        },
        {
            id: 4,
            img: bannerthree,

        },
        {
            id: 5,
            img: bannerthree,

        },
    ]

    return (
        <Wrapper style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Container>
                <StyledSwiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        prevEl:'.prev',
                        nextEl:'.next'
                    }}
                    autoplay={
                        {
                            delay:2500,
                            disableOnInteraction: false,
                        }
                    }
                    rewind={true}
                    pagination={{ clickable: true }}
                    spaceBetween={10}
                    slidesPerView={1}
                    
                >
                    {
                        banners.map((item) => (
                            <SwiperSlide key={item.id}>
                                <BannerSlideWrapper>
                                    <Img
                                        src={item.img}
                                        alt='banner-img'
                                        objectFit='cover'
                                    />
                                </BannerSlideWrapper>
                            </SwiperSlide>                        ))
                    }
                    <SliderArrow direction='left' className='prev'>
                        <SliderPrevIcon />
                    </SliderArrow>
                    <SliderArrow direction='right' className='next'>
                        <SliderNextIcon />
                    </SliderArrow>
                </StyledSwiper> 
                
            </Container>
        </Wrapper>
    )
}

export default Banner

const Wrapper = styled.div`
    width: 100%;
`
const BannerSlideWrapper = styled(Box)`
        height: 340px;
        border-radius: 30px;
        overflow: hidden;
`
const StyledSwiper = styled(Swiper)`
    & .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        background-color: ${colors.whiet};
        opacity: 1;
        transition: all 0.3s ease;
    }
    & .swiper-pagination-bullet-active {
        border-radius: 10px;
        background-color: ${colors.yellow};
        width: 38px;
    }
    & .swiper-button-next{
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 5;
    }
`

const SliderArrow = styled.button`
    position: absolute;
    top: 50%;
    ${(props) => (props.direction === 'left' ? 'left: 10px;' : 'right: 10px;')}
    width: 58px;
    height: 58px;
    transform: translateY(-50%);
    z-index: 1;
    border-radius: 50%;
    background:rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);

    & svg{
        position: absolute;
        top: 40%;
        ${(props) => (props.direction === 'left' ? 'left:40%;' : 'right:40%;')}
        transform: translateY(-50%,50%);
    }
`