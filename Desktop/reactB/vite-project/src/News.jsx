import React from 'react';
import marke from './img/marke.jpg';
import news from './img/news.jpg';
import news4 from './img/news4.jpg';
import news2 from './img/news2.jpg';

const News = () => {
  return (
    <section>
        <h2>News</h2>
      <div className='news-wrapper'>
        <div className='news'>
            <img src={news4} />
          <div className='news-right'>
            <p>2025年2月30日</p>
            <p>新卒採用のお知らせ</p>
            <p className='p-space'></p>
            <p>新たに新卒採用を開始いたします。詳細は採用ページをご覧ください。</p>
          </div>
        </div>
        <div className='news'>
            <img src={news} />
          <div className='news-right'>
            <p>2025年1月30日</p>
            <p>本社移転のお知らせ</p>
            <p className='p-space'></p>
            <p>本社を新しい住所に移転しました。新しいオフィスで皆様をお待ちしております。</p>
          </div>
        </div>
        <div className='news'>
            <img src={news2} />
          <div className='news-right'>
            <p>2025年1月15日</p>
            <p>プログラミング教室開講のお知らせ</p>
            <p className='p-space'></p>
            <p>初心者向けのプログラミング教室を開講します。詳細は教室ページをご覧ください。</p>
          </div>
        </div>
        <div className='news'>
            <img src={marke} />
          <div className='news-right'>
            <p>2025年1月7日</p>
            <p>キャリア採用募集のお知らせ</p>
            <p className='p-space'></p>
            <p>経験者向けのキャリア採用を募集しています。詳細は採用ページをご覧ください。</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News;