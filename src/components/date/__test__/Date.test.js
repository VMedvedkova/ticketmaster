import { render, screen } from '@testing-library/react'
import Date from '../Date'
import {describe, expect, test} from '@jest/globals'

const mockdateInit = "2023-11-11T16:00:00Z"

describe("Date", () => {
  test("Date is in correct format", () => {
    const { getByTestId } = render(<Date date={mockdateInit} />)
    expect(screen.getByTestId('date')).toHaveTextContent("Saturday, 11.11.2023 @ 18:00")
  })
})