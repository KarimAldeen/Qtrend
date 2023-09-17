'use client'
import { useTranslation } from 'react-i18next';
import { Home4, Home5, Home2, Footer, Home1 } from '../Components/Home/index'
import {useGetAllSocialMedia} from '../api/social_media'
import ProductCard from '../Components/Print/ProductCard';
import MainCategoryCard from '../Components/Print/MainCategoryCard';
import Card from '../Components/mhmad/Card';
import Main_Paper from '../Components/mhmad/Main_Paper';
import Section from '../Components/mhmad/Section';

const Page = () => {
  const [t] = useTranslation();
  const {data} = useGetAllSocialMedia()

 
  return (
    <div className='HOME_PAGE'>
      <Home1 t={t}/>
      <Home2 t={t} data={data}/>
      <Home4 t={t}/>
      <Home5 t={t}/>
      <Footer t={t} data={data} />
    </div>

  )
}

export default Page