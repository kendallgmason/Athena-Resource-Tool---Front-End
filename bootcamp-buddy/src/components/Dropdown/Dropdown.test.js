import { Dropdown } from ".";
import { render,screen} from "@testing-library/react";

const testProps = {
    handleChange: jest.fn(),
 };

test("Result renders successfully", () => {
    const { getByTestId } = render(<Dropdown {...testProps} />);
    const actual = screen.getByTestId("dropdown-test");
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