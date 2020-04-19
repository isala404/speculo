import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";

import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  usePagination
} from "react-table";

export const PersonTable = ({ personData }) => {
  const [searchValue, setSearchValue] = useState("");
  const [persons, setPersons] = useState(personData);
  const [data, setData] = useState(
    persons.map(person => {
        return {
          col1: person.id,
          col2: person.name,
          col3: person.timestamps,
          col4: person.blacklisted.toString(),
          col5: "actions"
        };
      }),
  )

  useEffect(() => {
    var result = search(personData, searchValue);
    setPersons(result);
    var data = result.map(person => {
        return {
          col1: person.id,
          col2: person.name,
          col3: person.timestamps,
          col4: person.blacklisted.toString(),
          col5: "actions"
        };
      })
    setData(data)
  }, [searchValue]);


  const search = (persons, searchVal) => {
    var results = [];
    for (var x = 0; x < persons.length; x++) {
      if (persons[x].name.toUpperCase().includes(searchVal.toUpperCase())) {
        results.push(persons[x]);
      }
    }
    setPersons(results);
    return results;
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "col1" // accessor is the "key" in the data
      },
      {
        Header: "NAME",
        accessor: "col2"
      },
      {
        Header: "TIMESTAMPS",
        accessor: "col3"
      },
      {
        Header: "BLACKLISTED",
        accessor: "col4"
      },
      {
        Header: "ACTIONS",
        accessor: "col5"
      }
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });
  return (
    <>
      <Input
        type={"text"}
        placeholder={"Select a person to Search for"}
        onChange={e => {
          setSearchValue(e.target.value);
        }}
      />
      <div style={{ overflowX: "auto" }}>
        <table
          {...getTableProps()}
          style={{
            margin: "auto",
            width: 1000,
            tableLayout: "fixed",
            borderCollapse: "collapse"
          }}
        >
          <thead>
            {headerGroups.map(headerGroup => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                style={{ display: "block" }}
              >
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      borderBottom: "solid 3px red",
                      background: "#000",
                      color: "#fff",
                      padding: "1em",
                      textAlign: "left",
                      width: 200
                    }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            style={{
              display: "block",
              width: "100%",
              overflow: "auto",
              height: 1000
            }}
          >
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: "1em",
                          border: "solid 1px #ffffff",
                          background: "papayawhip",
                          textAlign: "left",
                          width: 200
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

const Input = styled.input`
  background: white;
  padding: 0.4em;
  width: 250px;
  border: 1px solid #ffffff;
  border-radius: 3px;
  border: 1px solid #2bba85;
  height: 10;
  transition: 0.3s;
  font-family: "Lexend Deca", sans-serif;
`;
