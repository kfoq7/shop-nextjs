import { useAppContext } from './stateWrapper'
import style from '../styles/cartButton.module.css'

export default function CartButton({ item }) {
  const cart = useAppContext()

  const handleClick = () => {
    cart.addItemToCart(item)
    cart.openCart()
  }

  return (
    <button className={style.button} onClick={handleClick}>
      Add to Cart
    </button>
  )
}
