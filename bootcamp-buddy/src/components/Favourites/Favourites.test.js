import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { Favourites } from '.';

test('Checks that the Favourites component renders successfully', () => {
    const testFavourites = []
    render(<Favourites favourites={testFavourites} />)
    const favourites = screen.getByText('My Favourites');
    expect(favourites).toBeInTheDocument();
})

const testCases = [
    {testFavourites: [{}], length: 1},
    {testFavourites: [{}, {}], length: 2},
    {testFavourites: [{}, {}, {}], length: 3},
    {testFavourites: [{}, {}, {}, {}], length: 4},
    {testFavourites: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}], length: 10},
]

test.each(testCases)(`Checks that the <ul> element has $length <li> children when there are $length favourites`, (testCase) => {
    render(<Favourites favourites={testCase.testFavourites} />)
    const allFavourites = screen.getAllByRole('listitem')
    expect(allFavourites.length).toEqual(testCase.length)
});

test('Checks that the handleClick function is called when the <button> next to each <li> is clicked', () => {
    const mockFn = jest.fn();
    const testFavourites = [
        {
            title: 'Learn Jest!',
            url: 'https://github.com/testing-library/jest-dom/blob/main/README.md'
        }
    ];
    render(<Favourites favourites={testFavourites} handleClick={mockFn} />)
    const favouriteButton = screen.getByRole('button');
    userEvent.click(favouriteButton);
    expect(mockFn).toHaveBeenCalled();
})