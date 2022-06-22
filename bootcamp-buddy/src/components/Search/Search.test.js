import { Search } from ".";
import { render } from "@testing-library/react";

const testProps = {
    handleChange: jest.fn(),
    buttonText: "Submit",
 };

test("postLink renders successfully", () => {
    const { getByTestId } = render(<Search {...testProps} />);
    const actual = getByTestId("search-test");
    expect(actual).toBeInTheDocument();
 });