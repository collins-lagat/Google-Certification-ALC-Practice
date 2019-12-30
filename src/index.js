import './styles/styles.css'
import './styles/navigation.css'
import './styles/responsive.css'
import './styles/images.css'

import Modernizr from '../modernizr'

if (Modernizr.flexbox) {
	alert('Flexbox available')
}
