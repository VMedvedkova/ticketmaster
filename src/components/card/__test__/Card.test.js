import { render, screen } from '@testing-library/react'
import Card from '../Card'
import {describe, expect, test } from '@jest/globals'

const mockdateInit = {
  id: "8455adfggg", 
  getCurrentEvent: {
    id: "8455adfggg"
  }, 
  onClick: () => {return true}, 
  images: [{ url: "url" }], 
  title: 'Event Title', 
  date: "2023-11-11T16:00:00Z", 
  promoter: 'Promoter OU'
}

describe("Card", () => {
    test("Card is in the document", () => {
    const { getByTestId } = render(<Card {...mockdateInit} />)
    expect(screen.getByTestId('card')).toBeInTheDocument()
  })
})