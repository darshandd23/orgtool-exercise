import { render } from "@testing-library/react";
import Search from "./Search";

describe("Search Component", () => {
  it("renders correctly", () => {
    const component = render(<Search />);
    expect(component).toMatchSnapshot();
  });

  it("should render the text Employee Search", () => {
    const { getAllByText } = render(<Search />);
    expect(getAllByText("Employee Search")[0]).toBeInTheDocument();
  });

  it("should render search text", () => {
    const { getAllByRole } = render(
      <Search searchEmployee={jest.fn} searchText={"John Doe II"} />
    );
    expect(getAllByRole("textbox")[0].value).toBe("John Doe II");
  });
});
