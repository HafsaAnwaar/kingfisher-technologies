import { Link } from 'react-router-dom'
import logo from '../../assets/logo.webp'

export function Logo() {
  return (
    <Link className="lf-brand" to="/#top" aria-label="Kingfisher Wings Technologies home">
      <img className="lf-brand-logo" src={logo} alt="Kingfisher Wings Technologies" width={148} height={48} />
    </Link>
  )
}
