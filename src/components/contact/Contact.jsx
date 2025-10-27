import { useRef } from 'react';
import send from '../../assets/send.svg'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const serviceId = import.meta.env.VITE_SERVICE_ID
  const templateId = import.meta.env.VITE_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_PUBLIC_KEY

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey
    )
      .then(() => {
        console.log("Email sent successfully");
        e.target.reset();
      }, (error) => {
        console.log('Error sending email...', error);
      });
  };

  return (
    <section className='section' id='contact'>
      <h2 className='section__title'>Get in Touch</h2>
      <span className='section__subtitle'>Contact Me</span>

      <div className='contact__container container grid'>
        <div className='contact__content'>
          <div className='contact__info'>
            <div className='contact__card'>
              <i className='uil uil-phone contact__icon'></i>
              <h3 className='contact__card-title'>Phone</h3>
              <span className='contact__card-subtitle'>+91 95695 92572</span>
              <a href='tel:+919569592572' className='contact__button'>
                Call Now
                <i className='uil uil-arrow-right contact__button-icon'> </i>
              </a>
            </div>
            <div className='contact__card'>
              <i className='uil uil-fast-mail contact__icon'></i>
              <h3 className='contact__card-title'>Email</h3>
              <span className='contact__card-subtitle'>shivansh.singh20021@gmail.com</span>
              <a href='mailto:shivansh.singh20021@gmail.com' className='contact__button'>
                Send Email
                <i className='uil uil-arrow-right contact__button-icon'> </i>
              </a>
            </div>
          </div>
        </div>

        <div className='contact__content'>
          <form ref={form} className='contact__form' onSubmit={sendEmail}>
            <div className='contact__form-div'>
              <label className='contact__form-tag'>Name</label>
              <input type='text' name='name' className='contact__form-input' placeholder='Your Name' required />
            </div>
            <div className='contact__form-div'>
              <label className='contact__form-tag'>Email</label>
              <input type='email' name='email' className='contact__form-input' placeholder='Your Email' required />
            </div>
            <div className='contact__form-div contact__form-area'>
              <label className='contact__form-tag'>Message</label>
              <textarea name='project' cols='30' rows='10' className='contact__form-input' placeholder='Message' required></textarea>
            </div>
            <button className='button button--flex'>
              Submit
              <img src={send} alt="send" style={{ marginLeft: '0.1rem' }} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact