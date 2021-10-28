import { render } from "@testing-library/react";
import EmployeesList from "./EmployeesList";
import json from "../../../api/db.json";

describe("Employees List Component", () => {
  it("renders correctly", () => {
    const component = render(
      <EmployeesList
        employeesList={json.employees}
        filteredEmployees={[]}
        isSearchFound={false}
      />
    );
    expect(component).toMatchSnapshot();
  });
  it("should render all employeesList in initial state", () => {
    const { getByText } = render(
      <EmployeesList
        employeesList={json.employees}
        filteredEmployees={[]}
        isSearchFound={false}
      />
    );
    expect(getByText("Results")).toBeInTheDocument();
    expect(getByText("John Doe I")).toBeInTheDocument();
    expect(getByText("John Doe IV")).toBeInTheDocument();
    expect(getByText("Jane Doe III")).toBeInTheDocument();
  });
  it("should render searh result based on the user search text", () => {
    const { getByText } = render(
      <EmployeesList
        employeesList={json.employees}
        filteredEmployees={[
          {
            id: 1,
            title: "CEO",
            name: "Jane Doe I",
          },
        ]}
        isSearchFound={true}
      />
    );
    expect(getByText("Results")).toBeInTheDocument();
    expect(getByText("Jane Doe I")).toBeInTheDocument();
  });
  it("shouldn't  show any searh result when the user search text doesn't match", () => {
    const { getByText } = render(
      <EmployeesList
        employeesList={json.employees}
        filteredEmployees={[]}
        isSearchFound={true}
      />
    );
    expect(getByText("Results")).toBeInTheDocument();
    expect(getByText("No Employee results!")).toBeInTheDocument();
  });
});
