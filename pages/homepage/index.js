import { Fragment } from 'react';
import Header from  '../../components/Header';
import Meetup from  '../../components/Metup';
import Carousel from './carausel'


const dummyData = [
    {
        id: '12',
        name: 'goes here',
        img: 'https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.png',
        desc: 'this is first data'
    },
    {
        id: '14',
        name: 'goes batman',
        img: 'https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.png',
        desc: 'this is first data'
    },
    {
        id: '11',
        name: 'superman',
        img: 'https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.png',
        desc: 'this is first data'
    }
]
function Home(){
    return <Fragment> 
            <Header />
            <Carousel />
            <br />
            <div class="container">
            <div class="row"> 
                <Meetup metup={dummyData} />
            </div>
        </div>
    </Fragment>
    
}

export default Home;