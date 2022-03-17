import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DownloadProducts from './index.js'
import { deleteUser, listuserProduct } from '../../actions/productActions'
import LoadingBox from '../LoadingBox'
import MessageBox from '../MessageBox'
import { addToCheck, removeFromChecked } from '../../actions/cartActions'
import axios from 'axios'
import Pagination from './Pagination.js'
import { Container, TopSection, Left, Myproducts, Right,
Input, Table, TableSection, FlexSection, Column, Sectionx,
RemoveSection, RemoveIcon, RemoveText, Checkbox, Text, Prevbtn, Nextbtn} from './downloadsElements.js'
import jwt_decode from 'jwt-decode'

const Downloads = () => {
    const dispatch = useDispatch()
    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo } = userSignin
    const userId = jwt_decode(userInfo.accessToken).id
    const productListUser = useSelector((state) => state.productListUser)
    const { loading, error, products } = productListUser
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(6)
    const [allchecked, setAllchecked] = useState()
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    const [lastnumber, setLastnumber] = useState(1)

    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
        setAllchecked(false)
        checkedItems.forEach(element => {
            dispatch(removeFromChecked(element.product))
        });

        if (pageNumber === Math.ceil(posts.length / postsPerPage)) {
            setLastnumber(posts.length % postsPerPage)
        } else {
            setLastnumber(postsPerPage)
        }
    }

    const [reload, setReload] = useState(true)
    const checked = useSelector((state) => state.checked)
    const {checkedItems} = checked
    const [len, setLen] = useState(0)

    const [pageNumberLimit, setpageNumberLimit] = useState(3)
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(3)
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0)

    useEffect(() => {
        dispatch(listuserProduct(userId))
    }, [dispatch, userId])
    
    const allcheckedChange = () => {
        if (allchecked) {
            checkedItems.forEach(element => {
                dispatch(removeFromChecked(element.product))
            })
        } else if (allchecked === false) {
            currentPosts.forEach(element => {
                dispatch(addToCheck(element._id, element.users[0]._id))
            })
            
            // if (posts.length >= 6 && reload) {
            //     setLastnumber(postsPerPage)
            //     setReload(false)
            // } else {
            //     setLastnumber(posts.length % postsPerPage)
            //     setReload(false)
            // }
        }
    }

    // let len = Object.keys(checkedItems).length

    useEffect(() => {
        setLen(Object.keys(checkedItems).length)
            if (posts.length >= 6 && reload) {
                setLastnumber(postsPerPage)
                setReload(false)
            }
            if (posts.length < 6 && reload) {
                setLastnumber(posts.length % postsPerPage)
            }
            
        // console.log(len);
        try {
            if (len === 0) {
                setAllchecked(false)
            } else {
                if (currentPage < Math.ceil(posts.length / postsPerPage)) {
                    if (len === 6) {
                        setAllchecked(true)
                    } else if (len < 6) {
                        setAllchecked(false)
                    }
                } 
                
                if (currentPage === Math.ceil(posts.length / postsPerPage)) {
                    if (len === lastnumber) {
                        setAllchecked(true)
                    } else if (len < lastnumber) {
                        setAllchecked(false)
                    }
                }
            }
        } catch (err) {}
    })

    // var i = 1;               //  set your counter to 1

    // function myLoop() {         //  create a loop function
    //   setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    //     console.log('hello');   //  your code here
    //     i++;                    //  increment the counter
    //     if (i < 10) {           //  if the counter < 10, call the loop function
    //       myLoop();             //  ..  again which will trigger another 
    //     }                       //  ..  setTimeout()
    //     }, 3000)
    // }
    // myLoop()
    
    const deleteusers = () => {
        setLen(Object.keys(checkedItems).length)
        // var i = len - 1
        if (len > 0) {
            try {
                checkedItems.map(x => (
                    dispatch(deleteUser(x.product, x.userIdx))
                    ))
                window.location.reload()
                // Loop()
                // function Loop() {
                //     if (i >= 0) {
                //         setTimeout(function() {
                //             var userIdx = products[i].users[0]._id
                //             dispatch(deleteUser(checkedItems[i].product, userIdx))
                //             console.log(i);
                //             console.log(userIdx); 
                //             i--
                //             if (i >= 0) {
                //                 Loop()
                //             } else {
                //                 // setTimeout(window.location.reload(), 3000)
                //             }
                //         }, 10)
                //     }
                // }
            } catch (err) {
            }
        } 
    }

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`http://localhost:8000/api/products/user/${userId}`)
            setPosts(res.data)
        }
        fetchPosts()
    },[])

    const handlePrev = () => {
        if (currentPage>1) {
            paginate(currentPage - 1)
        }
    }

    const handleNext = () => {
        if (currentPage < Math.ceil(posts.length / postsPerPage)) {
            paginate(currentPage + 1)
        }
    }

    return (
        <>
            <Container>
                <TopSection>
                    <Left>
                        <p>Bản vẽ:</p>
                        <Myproducts href=''>Sản phẩm của tôi</Myproducts>
                        <p>Tải xuống</p>
                    </Left>
                    <Right>
                        <Input type="search"/>
                    </Right>
                </TopSection>
                <Table>
                    <TableSection className='one'>
                    <RemoveSection len={len}>
                        <Sectionx>
                            <RemoveIcon len={len} />
                        </Sectionx>
                        <Sectionx>
                            <RemoveText len={len} onClick={deleteusers} >Xóa</RemoveText>
                        </Sectionx>
                    </RemoveSection>
                    </TableSection>
                    <TableSection className='two'>

                    </TableSection>
                    <TableSection className='three'>
                        <FlexSection>

                        <Column className='onex'>
                            <Checkbox onChange={allcheckedChange} type='checkbox' className='form-check-input' name='allSelect' checked={allchecked}></Checkbox>
                        </Column>
                        <Column className='twox'>
                            <Text>Tên</Text>
                        </Column>
                        <Column className='threex'>
                            <Text>Giá</Text>
                        </Column>
                        <Column className='fourx'>
                            <Text>Ngày mua</Text>
                        </Column>
                        <Column className='fivex'>
                            <Text>Đánh giá</Text>
                        </Column>
                        </FlexSection>
                    </TableSection>
                    <TableSection className='products'>
                    {loading? (
                <LoadingBox></LoadingBox>
                ) : error? (
                    <MessageBox variant="danger">{error}</MessageBox>
                    ) : (
                <>  
                    {
                    currentPosts.map((product)=>(
                    <DownloadProducts product={product} key={product._id}/>
                    ))}
                </>
            )}
                    </TableSection>
                    <TableSection className='five'>
                        <Prevbtn onClick={handlePrev} currentPage={currentPage}>Prev</Prevbtn>
                        <Pagination pageNumberLimit={pageNumberLimit} minPageNumberLimit={minPageNumberLimit} maxPageNumberLimit={maxPageNumberLimit}  currentPage={currentPage} postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
                        <Text className='lastpage'>/</Text>
                        <Text className='lastpage'>{Math.ceil(posts.length / postsPerPage)}</Text>
                        <Nextbtn onClick={handleNext} currentPage={currentPage} lastpage={Math.ceil(posts.length / postsPerPage)}>Next</Nextbtn>
                    </TableSection>
                </Table>
            </Container>
        </>
    )
}

export default Downloads
