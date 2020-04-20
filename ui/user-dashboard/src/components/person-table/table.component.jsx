// import React, { useMemo, useState, useEffect } from "react";
// import styled from "styled-components";


// export const PersonTable = ({ personData, videoPlayer }) => {
//   const [searchValue, setSearchValue] = useState("");
//   const [persons, setPersons] = useState(personData);
//   const [selectedPerson, setSelectedPerson] = useState(null);
//   const [data, setData] = useState(
//     persons.map(person => {
//       return {
//         col1: person.id,
//         col2: person.name,
//         col3: person.timestamps,
//         col4: person.blacklisted.toString(),
//         col5: "actions"
//       };
//     })
//   );

//   useEffect(() => {
//     var result = search(personData, searchValue);
//     setPersons(result);
//     var data = result.map(person => {
//       return {
//         col1: person.id,
//         col2: person.name,
//         col3: person.timestamps,
//         col4: person.blacklisted.toString(),
//         col5: "actions"
//       };
//     });
//     setData(data);
//   }, [searchValue]);

//   const search = (persons, searchVal) => {
//     var results = [];
//     for (var x = 0; x < persons.length; x++) {
//       if (persons[x].name.toUpperCase().includes(searchVal.toUpperCase())) {
//         results.push(persons[x]);
//       }
//     }
//     setPersons(results);
//     return results;
//   };

//   return (
//     <>
//       <Input
//         type={"text"}
//         placeholder={"Select a person to Search for"}
//         onChange={e => {
//           setSearchValue(e.target.value);
//         }}
//       />
//       <div style={{ overflowX: "auto", margin: "10%" }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               {headings.map(heading => {
//                 return <TableHeading>{heading.heading}</TableHeading>;
//               })}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {persons.map(person => {
//               return (
//                 <Row>
//                   <TableData>{person.id}</TableData>
//                   <TableData
//                     onClick={() => {
//                       setSelectedPerson(person);
//                       console.log(selectedPerson);
//                     }}
//                   >
//                     {person.name}
//                   </TableData>
//                   <TableData>
//                     <ul>
//                       {selectedPerson && person.timestamps.map(timestamp => {
//                         return (
//                           <BasicButton
//                             buttonTitle={timestamp}
//                             onClick={
//                               videoPlayer!=null?
//                               seekToTime(timestamp, videoPlayer):console.log("whooooooooppps")
//                             }
//                           />
//                         );
//                       })}
//                     </ul>
//                   </TableData>
//                   <TableData>{person.blacklisted.toString()}</TableData>
//                   <TableData>{"actions"}</TableData>
//                 </Row>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </div>
//     </>
//   );
// };

// const headings = [
//   { id: 1, heading: "ID" },
//   { id: 2, heading: "NAME" },
//   { id: 3, heading: "TIME STAMPS" },
//   { id: 4, heading: "BLACKLISTED" },
//   { id: 5, heading: "ACTIONS" }
// ];

// const Input = styled.input`
//   background: white;
//   padding: 0.4em;
//   width: 250px;
//   border: 1px solid #ffffff;
//   border-radius: 3px;
//   border: 1px solid #2bba85;
//   height: 10;
//   transition: 0.3s;
//   font-family: "Lexend Deca", sans-serif;
// `;

// const Table = styled.table`
//   min-width: 600px;
//   width: 1000;
//   table-layout: fixed;
//   border-collapse: collapse;
//   text-align: left;
// `;

// const TableBody = styled.tbody`
//   display: block;
//   width: 100%;
//   overflow: auto;
//   height: 500px;
// `;

// const TableHead = styled.thead`
//   background: black;
//   color: #fff;
// `;
// const TableRow = styled.tr`
//   display: block;
//   background: #333;
// `;
// const Row = styled.tr`
//   background: #ededed;
//   border-bottom: 1px solid #333;
// `;
// const TableHeading = styled.th`
//   padding: 1em;
//   text-align: left;
//   width: 200px;
// `;
// const TableData = styled.td`
//   padding: 1em;
//   text-align: left;
//   width: 200px;
// `;

// //method that takes the videoPlayer object and sets the playing time
// const seekToTime = (time, video) => {
//   console.log(video);
//   video.currentTime(time);
// };
