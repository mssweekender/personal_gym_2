import React from "react";
import styled from "styled-components";

//import images

import BG from "../../Images/customer-bg.svg";

const Customer = () => {
  return <CustomerContainer></CustomerContainer>;
};

export default Customer;

const CustomerContainer = styled.div`
  width: 100%;
  height: 1259px;
  background-image: url(${BG});
  background-position: center;
`;
