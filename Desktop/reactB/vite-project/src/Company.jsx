import React from 'react';
import './App.scss';
import ceo from './img/ceo.jpg';

const Company = () => {
  return (
    <section>
        <h2>Company</h2>
        <div className='companys'>
          <div className='company'>
            <h3>会社概要</h3>
            <p>会社名</p>
            <p>株式会社Programing Lab</p>
            <p className='p-space'></p>
            <p>代表取締役</p>
            <p>ABC DEF</p>
            <p className='p-space'></p>
            <p>本社</p>
            <p>東京都渋谷区</p>
            <p className='p-space'></p>
            <p>設立</p>
            <p>2025年2月1日</p>
            <p className='p-space'></p>
            <p>資本金</p>
            <p>1000万円</p>
            <p className='p-space'></p>
            <p>従業員数</p>
            <p>15名</p>
            <p className='p-space'></p>
          </div>
          
          <div className='company'>
            <h3>代表挨拶</h3>
            <div>
              <img src={ ceo } alt='ceo' />
              <p>Programing Labの代表取締役を務めておりますABCです。</p>
              <br />
              <p>当社は、若手エンジニアの斬新なアイデアとエネルギーを活かし、革新的なソリューションを提供することを目指しています。私たちのチームは、情熱と創造力に溢れた若い才能で構成されており、常に新しい挑戦に取り組んでいます。</p>
            </div>
          </div>
        </div>
          
        <div className='maps'>
          <h3>アクセス</h3>
          <div className='map'>
            <div>
                <p>本社　　東京都千代田区123-456</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.747358394033!2d139.74286552634848!3d35.65859568121613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b00226ff6e3%3A0xd342750c03c422d!2z5p2x5LqsIOOCv-ODr-ODvA!5e0!3m2!1sja!2sjp!4v1740197804798!5m2!1sja!2sjp" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
                <p>渋谷支店　　東京都渋谷区123-456</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.747358394033!2d139.74286552634848!3d35.65859568121613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b00226ff6e3%3A0xd342750c03c422d!2z5p2x5LqsIOOCv-ODr-ODvA!5e0!3m2!1sja!2sjp!4v1740197804798!5m2!1sja!2sjp" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Company;