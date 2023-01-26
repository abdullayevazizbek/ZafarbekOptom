import React from 'react'
import styled from 'styled-components'
import { CartIcon, KatalogIcon, ProfilIcon, SearcheIcon } from '../../assets/icons/index'
import Logo from '../../assets/Img/Logo'
import { colors } from '../../helpers/Colors'
import { Container } from '../GlobalStyles'
import { Span, Spans } from '../index'
function Header(props) {
  const {open, setOpen} = props
  return (
    <Wrapper>
      <Container>
        <HeaderRow>
          <HeaderLogo>
            <Logo />
          </HeaderLogo>
          <HeaderSection>
            <KatalogBtn onClick={() => setOpen(!open)} >
              <KatalogIcon/>
              <Spans ml={'8px'}>
                Katalog
              </Spans>
            </KatalogBtn>
            <Searche>
              <SearcheInput placeholder='Поиск' />
              <SearcheIcon />
            </Searche>
            <User>
              <UserProfil>
                <ProfilIcon />
                <Span>Профиль</Span>
              </UserProfil>
              <UserCart>
                <CartIcon />
                <Span>Корзина</Span>
              </UserCart>
            </User>
          </HeaderSection>
        </HeaderRow>
      </Container>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const HeaderLogo = styled.div` 
  margin: 17px 0;
  display: flex;
`
const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`
const KatalogBtn = styled.button`
    display: flex;
    align-items:center;
    justify-content:space-between;
    margin-right: 16px;
    background-color: ${colors.yellow};
    padding:12px 20px;
`
const Searche = styled.div`
  width: 526px;
  background-color: #F6F6F6;
  padding: 12px 16px;
  display: flex;
  align-items: center;
`
const SearcheInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  flex:1 1 auto;

  &::placeholder{
    color:#8B8D92 ;
  }
`

const User = styled.div`
    display:flex;
    align-items: center;
`
const UserProfil = styled.button`
    display: flex;
    flex-direction: column;
    /* text-align: center; */
    align-items: center;
    padding:0 8px 0 16px
`
const UserCart = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    padding:0 0 0 8px
`