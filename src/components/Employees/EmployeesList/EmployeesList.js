import React from "react";

import "./EmployeesList.scss";

const EmployeeDetails = ({ data }) => {
    return (
        <div>
            <div>
                <span>{data.name}</span>
                <span> ({data.title})</span>
            </div>
        </div>
    );
};
const Employee = ({ employees }) => {
    if (typeof employees === "string") return employees;
    return employees.map((emp, i) => {
        return (
            <div key={i}>
                <EmployeeDetails data={emp} />
                {emp.subordinates && emp.subordinates.lenth !== 0 && (
                    <div style={{ marginLeft: "20px" }}>
                        <Employee employees={emp.subordinates} />
                    </div>
                )}
            </div>
        );
    });
};

const EmployeesList = ({ employeesList, filteredEmployees, isSearchFound }) => {
    return (
        <div className="EmployeesList">
            <div>
                <h2>Results</h2>
                <Employee
                    employees={
                        filteredEmployees.length === 0
                            ? isSearchFound
                                ? "No Employee results!"
                                : employeesList
                            : filteredEmployees
                    }
                />
            </div>
        </div>
    );
};

export default EmployeesList;
