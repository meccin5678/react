import React from 'react'
import web from './img/web.jpg';
import movie from './img/movie.jpg';
import marke from './img/marke.jpg';
import news2 from './img/news2.jpg';

const Service = () => {
  return (
    <section>
      <h2>Service</h2>
      <div className='service'>
      <img src={web} alt="web" />
        <div className='service-right'>
          <h3 className='h3-service'>Web制作</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime praesentium quam delectus consequuntur nesciunt fuga non culpa eaque eveniet sit porro quae.</p>
        </div>
      </div>
      <div className='service'>
      <img src={movie} alt="movie" />
        <div className='service-right'>
          <h3 className='h3-service'>動画制作</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime praesentium quam delectus consequuntur nesciunt fuga non culpa eaque eveniet sit porro quae.</p>
        </div>
      </div>
      <div className='service'>
      <img src={marke} alt="マーケティング" />
        <div className='service-right'>
          <h3 className='h3-service'>webマーケティング</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime praesentium quam delectus consequuntur nesciunt fuga non culpa eaque eveniet sit porro quae.</p>
        </div>
      </div>
      <div className='service'>
      <img src={news2} alt="news" />
        <div className='service-right'>
          <h3 className='h3-service'>プログラミング教室</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime praesentium quam delectus consequuntur nesciunt fuga non culpa eaque eveniet sit porro quae.</p>
        </div>
      </div>
    </section>
  )
}

export default Service;