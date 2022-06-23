import { render, screen } from "@testing-library/react";
import { NavLink } from "./index";

const testProps = {
    LinkName: "item 1",
    
 };
 
 test("Navlink renders properly", () => {
    const { getByTestId } = render(<NavLink {...testProps} />);
    const actual = getByTestId("navlink-test");
    expect(actual).toBeInTheDocument();
 });
 
