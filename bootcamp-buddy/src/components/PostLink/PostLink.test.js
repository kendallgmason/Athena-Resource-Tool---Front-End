import { PostLink } from ".";
import { render } from "@testing-library/react";

const testProps = {
    handleChange: jest.fn(),
    buttonText: "Submit",
 };

test("postLink renders successfully", () => {
    const { getByTestId } = render(<PostLink {...testProps} />);
    const actual = getByTestId("object");
    expect(actual).toBeInTheDocument();
 });