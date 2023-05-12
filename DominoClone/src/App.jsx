import './App.css'
import pizza1 from './assets/pizza1.webp'
import pizza2 from './assets/pizza2.webp'
import pizza3 from './assets/pizza3.webp'

function App() {

  return (
    <>
  <header>
    <div className='primary-nav-container'>
      <nav className="primary-nav">
        <ul className='options'>
          <li className='primary-nav-items'>
            <a href="">Order Online</a>
          </li>
          <li className='primary-nav-items'>
            <a href="">Locations</a>
          </li>
          <li className='primary-nav-items'>
            <a href="">Menu</a>
          </li>
          <li className='primary-nav-items'>
            <a href="">Coupons</a>
          </li>
          <li className='primary-nav-items'>
            <a href="">Tracker</a>
          </li>
          <li className='primary-nav-items'>
            <a href="">Rewards</a>
          </li>
        </ul>
        <ul className='options'>
          <li>Earn Points</li>
          <li>Sign in and Earn Rewards</li>
          <li>Cart</li>
        </ul>
      </nav>
      
    </div>
  </header>
  <main>
        <section>
          <div>
            <h1 className='start'>Start Your Order</h1>
            <div>
              <a className='color' href=''>Delivery</a>
              <a className='color' href=''>Carryout</a>
            </div>
          </div>
        </section>
        <div className='grid'>
        <div className='grid-1'>
          <img className='image-pizza' src={pizza1}></img>
          <div></div>
        </div>
        <div>
          <img className='image-pizza' src={pizza2}></img>
          <div></div>
        </div>
        <div>
          <img className='image-pizza' src={pizza3}></img>
        </div>
        </div>
      </main>
    </>
  )
}

export default App
