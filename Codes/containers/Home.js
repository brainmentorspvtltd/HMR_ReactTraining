import React from 'react';
import {Slider} from '../components/ui/Slider';
import { Ads } from '../components/ui/Ads';
import { TopSelling } from '../components/TopSelling';
import { Footer } from '../components/ui/Footer';
import { Title } from '../components/ui/Title';
export const Home =()=>{
    return (
        <div>
            <Slider/>
            <Title title='Offers'/>
            <Ads/>
            <Title title='Top Selling'/>
            <TopSelling/>
            <br/>
            <Footer/>
        </div>
    )
}