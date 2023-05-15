import React from 'react'

export const Card = ({title, description, age}) => {
  return (
      <>
          <div className="card m-3 row g-0" style={{maxWidth: '18rem', maxHeight: '20rem'}}>
                  <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">{description}</p>
                      <p className="card-text">{age}</p>
                      <a className="btn btn-primary">More info</a>
                  </div>
          </div>
      </>
  )
}
