import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"




it("should render header with a login button",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    // const loginButton = screen.getByRole("button");
    // const loginButton=screen.getByText("login");

    const loginButton=screen.getByRole("button",{name:"login"});

    fireEvent.click(loginButton);
    const logoutButton=screen.getByRole("button",{name:"logout"});


    // expect(loginButton).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();

    
})