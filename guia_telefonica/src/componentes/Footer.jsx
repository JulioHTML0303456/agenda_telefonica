import { useState } from 'react'


function Footer() {
const  [SoyElFooter, setSoyElFooter] = useState('soy un footer')

  return (
    <>
    <h1>{SoyElFooter}</h1>
    </>
  )
}

export default Footer;
