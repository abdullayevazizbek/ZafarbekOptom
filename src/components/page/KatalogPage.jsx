import React from 'react'
import { Img,  Span } from '../index'
// import Katalog_img from '../../assets/Img/katalog_img'
import { Container } from '../GlobalStyles'
import styled from 'styled-components'
// import katalog_img from '../../assets/Img/katalog_img'
import Image from '../../assets/Img/Image.png'

function Katalog() {
    const Katalog = [
        {
            id: 1,
            img:Image,
            title: '"ORIENT" Ножницы садовые "MK-131"',
        },
        {
            id: 2,
            img: Image,
            title: '"ORIENT" Ножницы садовые "MK-96" 10/250',
        },
        {
            id: 3,
            img: Image,
            title: 'Грабли для газона',
        },
        {
            id: 4,
            img: Image,
            title: 'Черенок для тяпки (Тополь)',
        },
        {
            id: 5,
            img: Image,
            title: 'Черенок для лопаты (тополь)',
        },
        {
            id: 6,
            img: Image,
            title: 'Кетмень (маленкий) (без черенка)',
        },
        {
            id: 7,
            img: Image,
            title: 'Переходник для поливного шланга Ø12',
        },
        {
            id: 8,
            img:Image,
            title: '"Komfort" Шланг для микроклимата черный',
        },
        {
            id: 9,
            img: Image,
            title: '"Palisad" 647408 Опрыскиватель 5л с шлангом и насос.',
        },
        {
            id: 10,
            img:Image,
            title: 'Заглушка для микроклимата',
        },
    ]

    return (
        <Wrapper>
            <Container >
                <Row>
                    {Katalog.map((item) => (
                        <Card key={item.id}>
                            <CardImg>
                                <Img src={item.img}
                                    objectFit='cover'
                                />
                            </CardImg>
                            <CardMain>
                                <Span>
                                    {item.title}
                                </Span>
                            </CardMain>
                        </Card>
                    ))}
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Katalog

const Wrapper = styled.div`
    width: 100%;
    /* height: 700px; */
    flex: 1 1 auto;
`
const Row = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    /* justify-content: space-between; */
`

const Card = styled.div`
    width: 231px;
    height: 310px;
    padding:15px;
    margin: 0 5px 5px 0;
    border:1px  solid gray;
`
const CardImg = styled.div`
    width: 100%;
    height: 50%;
`
const CardMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`