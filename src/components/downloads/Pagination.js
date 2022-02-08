import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`

`

const Ul = styled.ul`
    width: 30px;
    /* background: blue; */
    display: flex;
    list-style-type: none;

    .active {
        background: black;
        color: white;
    }
`

const Li = styled.li`
    /* background: red; */
    /* width: 20px; */
    padding: 10px 0;
    cursor: pointer;
    margin-top: 1px;
`

const Number = styled.a`
    text-decoration: none;
    color: black;
    padding: 10px;
    border: 1px solid black;
`

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage, pageNumberLimit, minPageNumberLimit, maxPageNumberLimit}) => {
    const pageNumbers = []

    for(let i=1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <>
        <Nav>
            <Ul className='pagination'>
                {pageNumbers.map(number => (
                    <Li key={number} >
                    {number === currentPage ? (
                        <Number onClick={() => paginate(number)} href='#' className={currentPage === number ? 'active' : null}> {number} </Number>
                        ) : (
                            null
                    )
                }
                    </Li>
                ))}
            </Ul>
        </Nav>
    </>
)
}

export default Pagination;
