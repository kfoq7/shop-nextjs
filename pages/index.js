import Layout from '../components/layout'
import Product from '../components/product'
import { getLastestItems } from '../services/item.service'
import styles from '../styles/Home.module.css'
import styleProduct from '../styles/product.module.css'

export default function Home({ items }) {
  return (
    <Layout title="Bienvenido">
      <div className={styles.banner}>
        <div className={styles.bannerBackground}>
          <div className={styles.bannerInfo}>
            <h2>Shop the Winter 2021 Collection</h2>
            <p>
              Level up your comfort this season with our new Winter Collection —
              all new joggers, beanies, drinkware, and for the first time ever,
              Octocookie cutters!
            </p>
          </div>
        </div>
      </div>

      <h3>Latest Products</h3>
      <div className={styleProduct.items}>
        {items &&
          items.map(item => (
            <Product key={item.id} item={item} showAs="Default" />
          ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await getLastestItems()

  return {
    props: {
      items: res
    }
  }
}
