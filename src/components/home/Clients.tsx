import pertamina from '../../assets/images/clients/pertamina.png'
import pertaminaRokan from '../../assets/images/clients/peramina-rokan.png'
import halliburton from '../../assets/images/clients/halliburton.png'
import adhiKarya from '../../assets/images/clients/adhi-karya.png'
import nindya from '../../assets/images/clients/nindya.png'
import hki from '../../assets/images/clients/HKI.png'
import transSumatera from '../../assets/images/clients/trans-sumatera.png'
import imk from '../../assets/images/clients/imk.png'
import pas from '../../assets/images/clients/pas.png'


function Clients() {
  return (
    <div className="clients">
        <h2>Our Clients</h2>
        <img src={pertamina} alt="Pertamina" />
        <img src={pertaminaRokan} alt="Pertamina Rokan" />
        <img src={halliburton} alt="Halliburton" />
        <img src={adhiKarya} alt="Adhi Karya" />
        <img src={nindya} alt="Nindya" />
        <img src={hki} alt="HKI" />
        <img src={transSumatera} alt="Trans Sumatera" />
        <img src={imk} alt="IMK" />
        <img src={pas} alt="PAS" />
    </div>
  )
}

export default Clients