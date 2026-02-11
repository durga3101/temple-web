import React from 'react'

export default function PageHero({ 
  title, 
  description,  //= "We are a Temple that believes in God and the followers. We are a Temple that believes in Krishna.",
  breadcrumbs,  //= [{ label: 'Home', path: '#/' }],
  backgroundImage = 'https://images.unsplash.com/photo-1500930288181-cd58fbc6b2cc?auto=format&fit=crop&w=1600&q=80'
}) {
  return (
    <section className="page-hero" style={{ backgroundImage: `url('${backgroundImage}')` }}>
      <div className="page-hero-overlay">
        <div className="page-hero-inner">
          {(title || description) && (
            <div className="page-hero-content">
              {title && <h1>{title}</h1>}
              {description && <p>{description}</p>}
            </div>
          )}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="page-hero-breadcrumb">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span className="breadcrumb-sep">/</span>}
                  {crumb.path ? (
                    <a href={crumb.path}>{crumb.label}</a>
                  ) : (
                    <span className="breadcrumb-active">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
