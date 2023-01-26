import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../helpers/Colors'
import { Flex, Span, Box, H2 } from '../index'
import { ArrowRight } from '../../assets/icons/index'
function Categories(props) {
    const {open,customRef} = props
    const [subcategories, setSubcategories] = useState([null])
    const categories = [
        {
            id: 1,
            img: '',
            title: 'Uy anjomlari',
            children: [],

        },
        {
            id: 2,
            img: '',
            title: 'Santehnika',
            children: [
                {
                    id: 21,
                    img: '',
                    title: 'Bolg\'a',
                    children: [],

                },
                {
                    id: 22,
                    img: '',
                    title: 'отвертка',
                    children: [],

                },
                {
                    id: 23,
                    img: '',
                    title: 'ombir',
                    children: [],

                },
            ],

        },
        {
            id: 3,
            img: '',
            title: 'Qurilish mollari',
            children: []
        },
    ]

    const hendeleMouseEnter = (el) => {
        setSubcategories(el)
    }
    return (
        <Wrapper open={open} ref={customRef}>
            <Flex>
                <StyledBox>
                    {
                        categories.map((item) => (
                            <StyledItem key={item.id} onMouseEnter={() => hendeleMouseEnter(item)}>
                                <Span>{item.title}</Span>
                                {
                                    !!item.children.length && <ArrowRight />
                                }
                            </StyledItem>
                        ))
                    }
                </StyledBox>
                {
                    !!subcategories?.children?.length && (
                        <Flex>
                            <StyledBox>
                                <H2 pl='50px' mb='20px'>{subcategories?.title}</H2>
                                {
                                    subcategories?.children?.map((item) => (
                                        <StyledItem key={item.id}>
                                            <Span>{item.title}</Span>
                                            {
                                                !!item.children.length && <ArrowRight />
                                            }
                                        </StyledItem>
                                    ))
                                }
                            </StyledBox>
                        </Flex>)
                }

            </Flex>
        </Wrapper>
    )
}

export default Categories

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left:${(props) => props.open? '0':'-100%'};
    z-index: 10;
    transition: all 0.3s ease;
`

const StyledItem = styled(Flex)`
    padding:8px 16px 8px 50px;
    cursor:pointer;
    justify-content:space-between;
    &:hover{
        background-color:${colors.yellow};
    }
    

`
const StyledBox = styled(Box)`
    width: 330px;
    padding:30px 0 ;
    min-height: 70vh;
    max-height: 100vh;
    overflow-y: auto;
    background-color:${colors.whiet};

    &::-webkit-scrollbar{
        width: 10px;
    }

    &::-webkit-scrollbar-track{
        background: #E7E7E7;
        border-radius: 10px;    
    }
    &::-webkit-scrollbar-thumb{
        background: #c4a113;
        border-radius: 10px;
    }
`