import Layout from '../../components/layout'
import Product from '../../components/product'
import { getItemData, getPathsFromIds } from '../../lib/utils'

export default function ProductPage({ productInfo }) {
  return (
    <Layout>
      <Product item={productInfo} showAs="Page" />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getPathsFromIds()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const id = params.id
  const productInfo = await getItemData(id)

  return {
    props: {
      productInfo
    }
  }
}
