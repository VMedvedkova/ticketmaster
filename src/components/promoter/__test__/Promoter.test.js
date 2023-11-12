import { render, screen } from '@testing-library/react'
import Promoter from '../Promoter'
import {describe, expect, test} from '@jest/globals'

const mockdateInit = {
  promoter: "Alexela OU"
}

describe("Promoter", () => {
  test("Promoter is having text value", () => {
    const { getByTestId } = render(<Promoter {...mockdateInit} />)
    expect(screen.getByTestId('promoter')).toHaveTextContent("Alexela OU")
  })
})