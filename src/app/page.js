'use client'
import { useTranslation } from 'react-i18next';
import { Home4, Home5, Home2, Footer, Home1 } from '../Components/Home/index'

const Page = () => {
  const [t] = useTranslation();

  return (
    <div className='HOME_PAGE'>
      <Home1 t={t}/>
      <Home2 t={t}/>
      <Home4 t={t}/>
      <Home5 t={t}/>
      <Footer t={t} />
    </div>

  )
}

export default Page