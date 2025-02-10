import {render,screen} from "@testing-library/react"
import Grocery from "../Grocery"
import "@testing-library/jest-dom"


test("should load contact us component",()=>{
    render(<Grocery />)

    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})