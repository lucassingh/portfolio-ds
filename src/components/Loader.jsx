import React from 'react'
import styled from 'styled-components';

const LoaderSectionStyles = styled.div`
        width: 100%;
        height: 100vh;
        z-index: 999999;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #262626;
        position: fixed;
        animation: fadeOut 1s;
`

const Loader = () => {
    return (
        <LoaderSectionStyles>
            <span style={{color: '#BCB4B4', fontSize:14, fontStyle:'italic'}}>loading...</span>
        </LoaderSectionStyles>
    )
}

export default Loader