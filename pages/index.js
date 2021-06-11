import Layout from '../component/layout'

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-green-500">1</div>
        
        <div className="col-span-2 bg-green-500">
          <div className="ml-2">tes</div>
          <div>tes</div>
        </div>
      </div>
    </Layout>
  )
}
