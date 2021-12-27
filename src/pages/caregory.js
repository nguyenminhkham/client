import { Body, GridContainer, GridFooter } from '../components/CartPage/CartElements'
import Categories from '../components/Category/CategoriesIndex'
import Footer from '../components/Footer'
import BackgroundNav from '../components/Navbar/backgroundNav'

const CaregoryPage = () => {
    return (
        <>
            <Body>
                <GridContainer>
            <BackgroundNav /> 
            <Categories />
            <GridFooter>
            <Footer />
            </GridFooter>
                </GridContainer>
            </Body>
        </>
    )
}

export default CaregoryPage
