import React from 'react'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import '../style/style.css'
import { useMainContext } from '../hooks/useMainContext'
import Services from '../sections/Services'

const ServicesPage = () => {
  const {companyStandardData, services} = useMainContext(); 
  
  return (
    <>
        <Header  />
        <Services companyStandardData={companyStandardData} data={services}/>
        <Footer />
    </>
  )
}

export default ServicesPage