import Header from '../components/Header'
import Main from '../components/home/Main'
import Shop from '../components/home/Shop'
import BestSeller from '../components/home/BestSeller'
import Priority from '../components/home/Priority'
import Testimonials from '../components/home/Testimonials'
import Social from '../components/home/Social'
import Footer from '../components/home/footer'

function Home() {
    return (
        <div>
            <Header />
            <Main />
            <Shop />
            <BestSeller />
            <Priority />
            <Testimonials />
            <Social />
            <Footer />
        </div>
    )
}

export default Home
