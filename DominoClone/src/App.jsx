import './App.css'

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
            <h1>Start Your Order</h1>
            <div>
              <a href=''>Delivery</a>
              <a href=''>Carryout</a>
            </div>
          </div>
        </section>
        <div></div>
        <div></div>
      </main>
    </>
  )
}

export default App
