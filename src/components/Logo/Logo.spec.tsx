import React from 'react'
import { render, screen } from '@testing-library/react'
import { Logo } from './index'

describe('Logo', () => {
    it('should render the logo', () => {
        render(<Logo />)
        expect(screen.getByAltText('Therify Logo')).toBeInTheDocument()
    })
})
