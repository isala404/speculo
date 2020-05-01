import React from "react";
import ContentLoader from "react-content-loader";
// import styled from "styled-components";


// const PersonLoader = styled.div`

// `;

const PersonLoader = () => (
  <ContentLoader 
    speed={2}
    width={250}
    height={100}
    viewBox="0 0 250 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="16" y="15" rx="3" ry="3" width="80" height="20" /> 
    <rect x="16" y="52" rx="3" ry="3" width="50" height="3" /> 
    <rect x="16" y="75" rx="3" ry="3" width="85" height="13" /> 
    <rect x="178" y="67" rx="6" ry="6" width="27" height="25" /> 
    <rect x="214" y="67" rx="6" ry="6" width="27" height="25" />
  </ContentLoader>
)

export default PersonLoader;