import './App.scss'
import bgImgWebp from '../public/img2.jpg'
import Button from './components/Button'

const App = (): JSX.Element => {
  return (
    <div className='home'>
      <div className='caption'>
        <h1 className='title'>TS React By EL&apos;TANA</h1>
        <h4 className='sub__title'>
          A TypeScript React Set-Up with Webpack and Babel. This App is set-up
          to support
        </h4>
        <ul className='list__group'>
          <li className='list__item'>TypeScript React</li>
          <li className='list__item'>JavaScript React</li>
          <li className='list__item'>SCSS</li>
          <li className='list__item'>CSS</li>
          <li className='list__item'>ESLINT</li>
          <li className='list__item'>and any other packages</li>
          <Button name={`Click`} />
        </ul>
      </div>
      <img className='img' src={bgImgWebp} alt='background pic' />
    </div>
  )
}

export default App
