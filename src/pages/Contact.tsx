import React from 'react'

const Contact: React.FC<PageProps> = ({ setPage }) => {
  return (
    React.useEffect(() => {
        setPage('--');
        document.title = "Contact"
    }, [setPage]),

    <div>Contact</div>
  )
}

export default Contact