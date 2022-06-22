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


// import { screen} from "@testing-library/react";
// // const testProps = {
// //     list: ["item 1", "item 2"],
// //     tickItem: jest.fn(),
// //  };
// // test("postLink renders successfully", () => {
// //     const { getByTestId } = render(<Result {...testProps} />);
// //     const actual = getByTestId("object");
// //     expect(actual).toBeInTheDocument();
// //  });

// //---------------------------------

// test("testing search button", ()=> {

//     // const input = screen.queryByText('input')
//     // expect(input).toBeInTheDocument()

//     const searchButton = screen.queryByText('Search')
//     expect(searchButton).toBeInTheDocument()
// })

