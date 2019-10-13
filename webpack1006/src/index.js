import './styles/index.scss'
import './app/index'
import './app/react.jsx'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
console.log('hello world')
Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  type: 'error',
  confirmButtonText: 'Cool'
})
