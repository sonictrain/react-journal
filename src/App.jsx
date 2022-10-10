import React from 'react'
import Header from './Header'
import Article from './Article'
import articleData from './articleData'

function App() {

  const articles = articleData.map(item => {
    return (
      
      <Article
        key={item.id}
        location={item.location.city}
        maps_link={item.location.maps_link}
        title={item.title}
        from_date={item.date.from}
        to_date={item.date.to}
        img={item.images.cover}
        img_alt={item.images.alt}
        description={item.description}
      />

    )
  })

  return (
    <div className="container">
      <Header />
      {articles}
    </div>
  )
}

export default App


/* <Article
  location="JAPAN"
  maps_link="https://goo.gl/maps/xondtBRswDMYrDc36"
  title="Mount Fuji"
  from_date="12 Jan, 2021"
  to_date="24 Jan, 2021"
  img="https://source.unsplash.com/WLxQvbMyfas"
  img_alt="Japan picture"
  description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
/>
<Article
  location="AUSTRALIA"
  maps_link="https://goo.gl/maps/cGgaCeTKmAdjwa3U6"
  title="Sydney Opera House"
  from_date="27 May, 2021 "
  to_date="8 Jun, 2021"
  img="https://source.unsplash.com/JmuyB_LibRo"
  img_alt="Australia picture"
  description="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
/>
<Article
  location="NORWAY"
  maps_link="https://goo.gl/maps/RNggq23FoqgCffRM9"
  title="Geirangerfjord"
  from_date="12 Jan, 2021"
  to_date="24 Jan, 2021"
  img="https://source.unsplash.com/3PeSjpLVtLg"
  img_alt="Norway picture"
  description="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
/> */