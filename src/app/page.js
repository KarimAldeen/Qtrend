import { Home4, Home5, Home2, Footer, Home1 } from '../Components/Home/index'
import {getAllSocialMedia} from '../api/social_media'
const Page = async() => {
  const {data} = await getAllSocialMedia()
  console.log(data);
  return (
    <div className='HOME_PAGE'>
      <Home1/>
      <Home2  data={data}/>
      <Home4/>
      <Home5/>
      <Footer data={data} />
    </div>

  )
}

export default Page