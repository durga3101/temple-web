import React from 'react'

const donationCauses = [
  {
    id: 1,
    title: 'Become those who do',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,',
    raised: 2410,
    goal: 4000,
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Donate Ngos',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,',
    raised: 1400,
    goal: 2000,
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Feed Poors',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,',
    raised: 2090,
    goal: 3000,
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=600&q=80'
  }
]

function DonationCard({ cause }) {
  const percentage = Math.round((cause.raised / cause.goal) * 100)
  
  return (
    <article className="donation-card">
      <div className="donation-image">
        <img src={cause.image} alt={cause.title} />
      </div>
      <div className="donation-content">
        <h4>
          <a href="#/donate">{cause.title}</a>
        </h4>
        <p>{cause.description}</p>
        <div className="donation-progress-info">
          <span>Raised: ${cause.raised}</span>
          <span>Goal: ${cause.goal}</span>
        </div>
        <div className="donation-progress-bar">
          <div className="donation-progress-fill" style={{ width: `${percentage}%` }}>
            <span className="donation-percentage">{percentage}%</span>
          </div>
        </div>
        <a className="btn primary donation-btn" href="#/donate">DONATE NOW</a>
      </div>
    </article>
  )
}

export default function Donations() {
  return (
    <section className="donations-section">
      <div className="container">
        <div className="section-header">
          <h2>Make a Donation to<br />Help Community</h2>
        </div>
        <div className="donations-grid">
          {donationCauses.map(cause => (
            <DonationCard key={cause.id} cause={cause} />
          ))}
        </div>
      </div>
    </section>
  )
}
