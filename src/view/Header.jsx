import React from 'react'
import image from "../assets/images/header-image.jpg";
import "../assets/css/Header.css";
import Card from "../components/Card";

export default function Header() {
  return (
    <section className='heading'>
      <img className='header-image' src={image}></img>
      <article className='heading-mid-section'>
        <h5>QuantumSky Solutions</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia placeat laboriosam ex dolorem magni quam enim quis dolores dignissimos.
          Esse temporibus dignissimos sunt voluptate doloribus eveniet error illo est ea.</p>
      </article>
      <article className='heading-cards'>
        <Card title='Lorem ipsum' text='amet consectetur adipisicing'/>
        <Card title='Lorem ipsum' text='amet consectetur adipisicing'/>
      </article>
    </section>
  )
}
