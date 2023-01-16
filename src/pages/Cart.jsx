import React from "react";
import styled from "styled-components";
import { Navbar, Announcement, Footer } from "../components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  @media only screen and (max-width: 380px) {
    flex-direction: column;
    padding: 10px 0px;
  }
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  @media only screen and (max-width: 380px) {
    margin: 15px 0px;
  }
`;

const TopTexts = styled.div`
  @media only screen and (max-width: 380px) {
    display: none;
  }
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  @media only screen and (max-width: 380px) {
    margin: 0px 20px;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 380px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 380px) {
    flex-direction: column;
  }
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  @media only screen and (max-width: 380px) {
    margin: 10px 15px;
  }
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 300;
  @media only screen and (max-width: 380px) {
    margin-bottom: 20px; 
  }
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  /* background-color: red; */
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "1000"};
  font-size: ${(props) => props.type === "total" && "24"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    border: 2px solid black;
    background-color: whitesmoke;
    color: black;
  }
`;

function Cart() {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlish(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Details>
                  <ProductName>
                    <b>Product: </b>CAMERA
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>9333988988
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size: </b>37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <RemoveIcon />
                  <ProductAmount>2</ProductAmount>
                  <AddIcon />
                </ProductAmountContainer>
                <ProductPrice>Rs. 300</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Details>
                  <ProductName>
                    <b>Product: </b>CAMERA
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>9333988988
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size: </b>37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <RemoveIcon />
                  <ProductAmount>2</ProductAmount>
                  <AddIcon />
                </ProductAmountContainer>
                <ProductPrice>Rs. 300</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal: </SummaryItemText>
              <SummaryItemPrice> Rs.600</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping: </SummaryItemText>
              <SummaryItemPrice>Rs. 40</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount: </SummaryItemText>
              <SummaryItemPrice>Rs. -40</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total: </SummaryItemText>
              <SummaryItemPrice>Rs. 600</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECKOUT NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
