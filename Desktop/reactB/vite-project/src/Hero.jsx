import React, { useEffect } from 'react';
import './App.scss';

const Hero = () => {
  useEffect(() => {
    const text = document.querySelectorAll('.hero-text span');
    text.forEach((letter, index) => {
      const delay = Math.random() * 2; // 0から2秒のランダムなディレイ
      letter.style.animationDelay = `${delay}s`;
    });
  }, []);
  const text = "Welcome to Programing Lab";
  const splitText = text.split("").map((char, index) => (
    <span key={index}>{char}</span>
  ));
  return (
    <section className="hero">
      <h1 className="hero-text">{splitText}</h1>
      <p>Your journey to programming excellence starts here.</p>
    </section>
  )
}

export default Hero;