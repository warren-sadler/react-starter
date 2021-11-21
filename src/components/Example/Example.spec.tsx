import React from 'react'
import { render, screen } from '@testing-library/react'
import { Example } from './index'

describe('Example', () => {
    it('renders', () => {
        render(<Example />)
        expect(screen.getByText('Hello World')).toBeInTheDocument()
    })
})
