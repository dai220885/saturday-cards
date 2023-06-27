//import { Button } from './components/ui/button'

import { Button } from './components/ui/button/index'
import { Link } from 'react-router-dom'

export function App() {
  return (
    <div>
      <div>Hello</div>

      <Button variant="primary"> Primary Button</Button>
      <Button variant="primary" as="a" href="https://google.com">
        Primary Button
      </Button>
      <Button variant="secondary" as={Link} to={'https://google.com'}>
        {' '}
        Secondary Button
      </Button>
      <Link to={'https://google.com'}>LINK</Link>
    </div>
  )
}
