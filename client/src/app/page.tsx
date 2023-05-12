import Sidebar from './components/Sidebar'
import "@fortawesome/fontawesome-svg-core/styles.css";


const Home = () => {
  return (
    <main className={`bg-black text-white flex w-[100%] mx-auto min-h-screen`}>
      <Sidebar />
    </main>
  )
}

export default Home