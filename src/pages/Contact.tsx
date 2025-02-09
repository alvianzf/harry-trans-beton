import React from 'react'
import Contacts from '../components/contact/Contacts'
import Map from '../components/Map';

const Contact: React.FC<PageProps> = ({ setPage }) => {
  return (
    React.useEffect(() => {
        setPage('--');
        document.title = "Contact"
    }, [setPage]),

    <div>
      <Contacts />
      <Map />
    </div>
  )
}

export default Contact