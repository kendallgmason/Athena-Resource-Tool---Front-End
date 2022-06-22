import { PostLink } from ".";
import { render } from "@testing-library/react";

const testProps = {
<<<<<<< HEAD
    addToList: jest.fn(),
    buttonText: "orange",
=======
    handleChange: jest.fn(),
    buttonText: "Submit",
>>>>>>> 3bca200ae3ae4f98fc6a80171587a12b98a9ad68
 };

test("postLink renders successfully", () => {
    const { getByTestId } = render(<PostLink {...testProps} />);
    const actual = getByTestId("object");
    expect(actual).toBeInTheDocument();
 });