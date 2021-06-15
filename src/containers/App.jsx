import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Careousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

// Hooks
import useInitialState from '../hooks/useInitialState'

const API = 'http://localhost:3000/initialState'

// styles
import '../assets/styles/App.scss'


const App = () => {

    const initialState = useInitialState(API)

    return ( 
        <div className="App">
            <Header />
            <Search/>

            { initialState.mylist.length > 0 && 
            <Categories title="Mi Lista">
                <Careousel>
                {initialState.mylist.map( item => 
                    <CarouselItem 
                        key = {item.id}
                        {...item}
                    />
                )}
                </Careousel>
            </Categories>
            }
            { initialState.trends.length > 0 && 
            <Categories title="Tendencias">
                <Careousel>
                    {initialState.trends.map( item => 
                    <CarouselItem 
                        key = {item.id}
                        {...item}
                    />
                    )}
                </Careousel>
            </Categories>
            }
             { initialState.originals.length > 0 && 
            <Categories title="Tendencias">
                <Careousel>
                    {initialState.originals.map( item => 
                    <CarouselItem 
                        key = {item.id}
                        {...item}
                    />
                    )}
                </Careousel>
            </Categories>
            }

            <Footer/>
        </div>
     );
}
 
export default App;