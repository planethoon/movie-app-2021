import React from 'react'

const Food = ({name, img}) => {
  return <><h3>I love {name}!</h3>
    <img src={img} alt={name} />
  </>
}

const foodILike = [{
    id: 1,
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  },
  {
    id: 2,
    name: "bulgogi",
    image: "https://images.unsplash.com/photo-1564836235910-c3055ca0f912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: 3,
    name: "kimbap",
    image: "https://images.unsplash.com/photo-1532347231146-80afc9e3df2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=332&q=80"
  },
  {
    id: 4,
    name: "samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
  }];

function App() {
  return (
    <div className="App">
      {foodILike.map((e)=><Food name={e.name} img={e.image} key={e.id} />)}
    </div>
  );
}

export default App;

