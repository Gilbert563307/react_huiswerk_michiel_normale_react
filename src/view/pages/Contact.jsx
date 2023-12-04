import React from 'react'
import "../../assets/css/Contact.css";
import BS5Button from '../../components/BS5Button';
import BS5FormInput from '../../components/BS5FormInput';
import BS5TextArea from '../../components/BS5TextArea';

export default function Contact() {
  return (
    <article className='contact'>
      <div class="card d-flex">
        <div class="card-header">
        </div>
        <div class="card-body contact-section">

          <div>
            <div className='mb-3'>
              <p>Hoofdkantoor</p>
              <p> Kerkweg 12</p>
              <p>7561 PT Deurningen</p>
              <div className='d-flex flex-column gap-1'>
                <span>Vestiging Utrecht</span>
                <span>Euclideslaan 55 unit 2.12
                  3584 BM Utrecht</span>

                <span>   info@accommodatiehuur.nl
                  085 - 029 05 20</span>
              </div>
            </div>
          </div>

          <div>
            <h5 class="card-title">Contact us</h5>
            <BS5FormInput
              name="Naam"
              type="name"
              placeholder="John Doe"
            />
            <BS5FormInput
              name="Email"
              type="email"
              placeholder="name@example.com"
            />

            <BS5TextArea
              name="message"
              title="Bericht"
            />

            <div className='mb-3'>
              <BS5Button title="Submit" />
            </div>
          </div>

        </div>
      </div>

    </article>
  )
}
