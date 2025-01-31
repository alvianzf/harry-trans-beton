import React from 'react'
import Contacts from '../components/contact/Contacts'

const Contact: React.FC<PageProps> = ({ setPage }) => {
  return (
    React.useEffect(() => {
        setPage('--');
        document.title = "Contact"
    }, [setPage]),

    <div>
      <Contacts />
    </div>
  )
}

export default Contact