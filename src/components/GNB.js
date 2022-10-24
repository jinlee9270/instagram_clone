import React from "react"
import styled from "styled-components"

const NaviWrap = styled.div`
    display:flex;
    justify-content: space-between;
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
`

const SearchImg = styled.img`
    width: 20px;
    margin: 10px;
`


const GNB = () => {
    return (
        <NaviWrap>
            <LogoImg src="../img/instagram.png" />
            <SearchWrap>
                <SearchImg src='../img/search.png' />
                <input placeholder="검색"/>
            </SearchWrap>
            <div>
                <NaviBarImg src='../img/home.png' />
                <NaviBarImg src='../img/paper_plane.png' />
                <NaviBarImg src='../img/add-document.png' />
                <NaviBarImg src='../img/compass.png' />
                <NaviBarImg src='../img/heart.png' />
                <NaviBarImg src='../img/profile-user.png' />
            </div>
        </NaviWrap>
    )
}

export default GNB