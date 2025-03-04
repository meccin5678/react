import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [option, setOption] = useState('');
  const [text, setText] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdtTjBu6dLqte4vYXxNX80iINbh5J4TDSt85gsEXe6fs9luzA/formResponse', {
        method: 'POST',
        body: data,
        mode: 'no-cors',
      });

      // フォームの送信が成功したと仮定してステータスを設定
      setStatus('SUCCESS');
      setName('');
      setEmail('');
      setOption('');
      setText('');
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      <p className='p-small'>送信されますが、デモサイトのため、返信は致しません。<br />
        バックエンドはGoogle Formsを使用しています。<br />
        自動返信メールはGoogle Apps Scriptで設定しています。<br />
      </p>
      <div className='contact'>
      

        <form onSubmit={handleSubmit}>

          <div className='contact-item'>
            <label htmlFor='name'>お名前</label>
            <input
              type='text'
              id='name'
              name='entry.868779903' // Google Formsのフィールド名に合わせて変更
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className='contact-item'>
            <label htmlFor='email'>メールアドレス</label>
            <input
              type='email'
              id='email'
              name='entry.1870087207' // Google Formsのフィールド名に合わせて変更
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className='contact-radios'>
            <label>お問合せ種別</label>
            <div className='contact-radio'>
              <input
                type='radio'
                id='option1'
                name='entry.1227686451' // Google Formsのフィールド名に合わせて変更
                value='サービスに関するお問合せ'
                checked={option === 'サービスに関するお問合せ'}
                onChange={(e) => setOption(e.target.value)}
                required
              />
              <label htmlFor='option1'>サービスに関するお問合せ</label>
            </div>
            <div className='contact-radio'>
              <input
                type='radio'
                id='option2'
                name='entry.1227686451' // Google Formsのフィールド名に合わせて変更
                value='プログラミング教室に関するお問合せ'
                checked={option === 'プログラミング教室に関するお問合せ'}
                onChange={(e) => setOption(e.target.value)}
              />
              <label htmlFor='option2'>プログラミング教室に関するお問合せ</label>
            </div>
            <div className='contact-radio'>
              <input
                type='radio'
                id='option3'
                name='entry.1227686451' // Google Formsのフィールド名に合わせて変更
                value='採用に関するお問合せ'
                checked={option === '採用に関するお問合せ'}
                onChange={(e) => setOption(e.target.value)}
              />
              <label htmlFor='option3'>採用に関するお問合せ</label>
            </div>
            <div className='contact-radio'>
              <input
                type='radio'
                id='option4'
                name='entry.1227686451' // Google Formsのフィールド名に合わせて変更
                value='取材・出演依頼など'
                checked={option === '取材・出演依頼など'}
                onChange={(e) => setOption(e.target.value)}
              />
              <label htmlFor='option4'>取材・出演依頼など</label>
            </div>
          </div>
          <div className='contact-text'>
            <label htmlFor='text'>お問合せ内容</label>
            <textarea
              id='textarea'
              name='entry.311707' // Google Formsのフィールド名
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>

          <button type='submit'>送信</button>
        </form>

      </div>
        {status === 'SUCCESS' && <p className='p-center'>お問合せありがとうございました</p>}
        {status === 'ERROR' && <p className='p-center'>送信に失敗しました。もう一度お試しください。</p>}
    </section>
  );
};

export default Contact;