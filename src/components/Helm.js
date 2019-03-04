import React from 'react'
import { Helmet } from 'react-helmet'

const Helm = () => {
  return (
    <Helmet>
      {/* 
      <link id="hey" rel="stylesheet" type="text/css"
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/flatly/bootstrap.min.css" /> */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-mfizz/2.4.1/font-mfizz.css" rel="stylesheet" />
    </Helmet>
  )
}

export default Helm;