import React from "react"
import styled from "styled-components"

const NaviWrap = styled.nav`
    display: flex;
    margin: 20px;
`
const StyledLi = styled.li`
    list-style-type: none;
    display: inline-block;
`

const LogoImg = styled.img`
    height: 40px;
`

const NaviBarImg = styled.img`
    width: 20px;
    margin: 10px;
`

const SearchWrap = styled.div`
    display:flex;
    background-color: #DDDDDD;
    border-radius: 5px;
`

const SearchImg = styled.img`
    width: 20px;
    margin: 10px;
`
const SearchInput = styled.input`
    border: none;
    background-color: transparent;
    font-size: 1rem
`

const GNB = () => {
    return (
        <NaviWrap>
            <ul>
                <StyledLi>
                    <LogoImg src="../img/instagram.png" />
                </StyledLi>
                <StyledLi>
                    <SearchWrap>
                        <SearchImg src='../img/search.png' />
                        <SearchInput placeholder="검색"/>
                    </SearchWrap>
                </StyledLi>
                <StyledLi>
                    <div>
                        <NaviBarImg src='../img/home.png' />
                        <NaviBarImg src='../img/paper_plane.png' />
                        <NaviBarImg src='../img/add-document.png' />
                        <NaviBarImg src='../img/compass.png' />
                        <NaviBarImg src='../img/heart.png' />
                        <NaviBarImg src='../img/profile-user.png' />
                    </div>
                </StyledLi>
            </ul>
        </NaviWrap>
    )
}

export default GNB