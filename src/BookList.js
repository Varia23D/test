import React from 'react'

export default function BookList({books, sUrl}) {
  
  return (
    <div>
      {books.map ((item) => {
        return (
          <div key ={item.id}>
            <h2>{item.attributes.title}</h2>
            <p>Description: {item.attributes.description}</p>
            { item.attributes.cover.data ? (
              <img style={{maxHeight:'200px', maxWidth: '200px'}} src={`${sUrl}${item.attributes.cover.data[0].attributes.url}`} alt={`${item.attributes.title}'s cover`} />
            ) : (
              <p>No image available</p>
            )}
          </div>
        )
      })}
      
    </div>
  )
}
