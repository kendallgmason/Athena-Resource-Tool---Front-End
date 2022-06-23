import { NavBar } from "./index";
import { render, screen, within } from "@testing-library/react";

const testProps = {
    list: ["item 1", "item 2"],
    tickItem: jest.fn(),
 };
 
 test("NavBar renders properly", () => {
    const { getByTestId } = render(<NavBar {...testProps} />);
    const actual = getByTestId("navbar-test");
    expect(actual).toBeInTheDocument();
 });

