import React from 'react'
import ReactDom from 'react-dom'
import { Button } from '@material-ui/core'
import '@fontsource/poppins'
import { Logo } from './components/Logo'
const Example = React.lazy(() =>
    import('./components/Example').then((module) => ({
        default: module.Example,
    }))
)

const App = () => {
    return (
        <div>
            <Logo />
            <React.Suspense fallback={<div>Loading...</div>}>
                <Example />
            </React.Suspense>
            <Button>Click Me</Button>
        </div>
    )
}

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
