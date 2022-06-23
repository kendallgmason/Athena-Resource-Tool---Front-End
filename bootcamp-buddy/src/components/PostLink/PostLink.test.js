import { PostLink, Dropdown } from ".";
import { render, screen } from "@testing-library/react";
import { Typedropdown } from "../App/Typedropdown";

const testProps = {
    handleChange: jest.fn(),
    buttonText: "Submit",
 };

 test('renders the Dropdown page and checks for roles', () => {
    render(<PostLink />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

test("Checks all parts work successfully", () => {
    const { getByTestId } = render(<PostLink {...testProps} />);
    const actual = getByTestId("object");
    expect(actual).toBeInTheDocument();
 });

