import React, { useState } from 'react'

export default function SocialIcons() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)

  return (
    <>
      <a href="https://www.youtube.com/@sitaramachandradevalayam" target="_blank" rel="noreferrer" aria-label="Youtube">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#FF0000"/>
          <path d="M9 8L16 12L9 16V8Z" fill="white"/>
        </svg>
      </a>
      <a href="https://wa.me/919849918520" target="_blank" rel="noreferrer" aria-label="Whatsapp" onClick={(e) => { e.preventDefault(); setShowWhatsAppModal(true); }} style={{ cursor: 'pointer' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11" fill="#25D366"/>
          <path d="M17.5 14.5c-.3 0-1.8-.8-2-.9-.2-.1-.4-.1-.5.1-.2.2-.6.9-.8 1-.1.2-.3.2-.5.1-.3-.1-1-.4-2-1.2-.7-.7-1.2-1.5-1.4-1.8-.1-.3 0-.4.1-.5l.4-.5c.1-.1.1-.2.2-.4 0-.1 0-.3-.1-.4-.1-.1-.5-1.3-.7-1.7-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3 1 2.5c.1.2 1.6 2.5 4 3.5.5.2 1 .3 1.3.4.6.2 1.1.2 1.5.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3z" fill="white"/>
        </svg>
      </a>
      <a href="https://www.instagram.com/kakatiyanagarramalayam/" target="_blank" rel="noreferrer" aria-label="Instagram">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="url(#ig-gradient)"/>
          <defs>
            <linearGradient id="ig-gradient" x1="0" y1="24" x2="24" y2="0">
              <stop offset="0%" stopColor="#FD5949"/>
              <stop offset="50%" stopColor="#D6249F"/>
              <stop offset="100%" stopColor="#285AEB"/>
            </linearGradient>
          </defs>
          <rect x="7" y="7" width="10" height="10" rx="2" stroke="white" strokeWidth="1.5" fill="none"/>
          <circle cx="12" cy="12" r="2.5" stroke="white" strokeWidth="1.5" fill="none"/>
          <circle cx="17.5" cy="6.5" r="1" fill="white"/>
        </svg>
      </a>

      {/* WhatsApp QR Code Modal */}
      {showWhatsAppModal && (
        <div className="modal-overlay" onClick={() => setShowWhatsAppModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowWhatsAppModal(false)}>×</button>
            <h3>Join Our WhatsApp Group</h3>
            <img src="/assets/whatsApp.jpeg" alt="WhatsApp QR Code" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
            <p>Scan the QR code with WhatsApp to join our group</p>
          </div>
        </div>
      )}
    </>
  )
}
