import React from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Lorem Amet',
    text: 'Curabitur convallis enim at orci ullamcorper sagittis. Morbi porand gon nullalacu scelerisque in aliquam vitae, aliquam ut lectus. Nam utte mink Phasellus magna, efficitur finibus dictum auctor.',
    rating: 5
  },
  {
    id: 2,
    name: 'Dolor Porta',
    text: 'Curabitur convallis enim at orci ullamcorper sagittis. Morbi porand gon nullalacu scelerisque in aliquam vitae, aliquam ut lectus. Nam utte mink Phasellus magna, efficitur finibus dictum auctor.',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-content">
          <div className="testimonials-intro">
            <h2>What Our Members Say</h2>
            <p>
              We are a Temple that belives in Krishna and the followers and We are 
              a Temple that belives in Krishna. This is where you should start Lorem 
              ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod Lorem 
              ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod This is 
              where you should start Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
          
          <div className="testimonials-list">
            {testimonials.map(testimonial => (
              <article key={testimonial.id} className="testimonial-card">
                <div className="testimonial-text">
                  <p>{testimonial.text}</p>
                </div>
                <div className="testimonial-author">
                  <h5>{testimonial.name}</h5>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
