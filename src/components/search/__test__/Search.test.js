import { render, screen } from '@testing-library/react'
import Search from '../Search'
import { describe, expect } from '@jest/globals'
import React from "react";
import { createStore } from 'redux'
import rootReducer from '../../../redux/reducers/index'
import { Provider } from 'react-redux'

jest.mock("../../../api", () => ({
  events: () => ({ searchTerm: "searchTerm" })
}))

const initialState = {
  events: {
    searchTerm: "searchTerm"
  }
}

const store = createStore(rootReducer, initialState)

const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
)

describe("Search", () => {
  it("Search displays correct searchTerm", async () => {
    render(<Search />, { wrapper: Wrapper })
    const search = screen.getByTestId("search")
    expect(search.value).toEqual("searchTerm")
  })
})