import React from 'react';
import styled from 'styled-components';
import { categories } from '../data.js';
import CategoryItem from './CategoryItem';

const Container = styled.div`
    display: flex;
    padding: 20px; 
    justify-content: space-between; 
    @media only screen and (max-width: 380px) {
        padding: 0px;
        flex-direction: column; 
    }
    
`

function Categories() {
    return(
        <Container>
            {categories.map(item=> (
                <CategoryItem item={item} key={item.id}/>
            ))}

        </Container>


    )

}

export default Categories; 