import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ height: "50px", padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 360px) {
    flex: 0.5;
  }
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  @media only screen and (max-width: 380px) {
    margin-bottom: 10px;
  }
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ display: "none" })};
`;

const Sk = styled.h1`
  display: none;
  @media only screen and (max-width: 380px) {
    display: flex;
    margin-left: 40px;
    margin-bottom: 10px;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 3, justifyContent: "center", marginBottom: 10 })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "10px", marginLeft: "10px" })}
`;

function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  // console.log(quantity);
  return (
    <Container className="container">
      <Wrapper>
        <Left>
          <Language>English</Language>
          <SearchContainer>
            <Input placeholder="Search..." />
            <SearchIcon style={{ color: "gray", fontSize: "10px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Sk>SK</Sk>
          <Logo>ShoppingKart.</Logo>
        </Center>
        <Right>
          <Link style={{textDecoration: "none"}} to="/register">
            <MenuItem>REGISTER</MenuItem>
          </Link>

          <Link style={{textDecoration: "none"}} to="/login">
            <MenuItem>SIGN IN</MenuItem>
          </Link>

          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
