import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Navbar, Announcement, Footer } from "../components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector } from "react-redux";
import StripCheckout from "react-stripe-checkout";
import { userRequest } from "../api";
import { useNavigate } from "react-router-dom"// import env from 'react-dotenv';

const KEY =
  "pk_test_51MQktJSIAirQdLTsgCPnNeUVwxcW4aN3oX3W1R58nadPXy0XmF3IJHEP7QiebbFoupqE479mojW5i7qe3zRXcI8o00Xf36J3Sv";
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
  const cart = useSelector((state) => state.cart);
  const [token, setToken] = useState(null);
  const onToken = (token) => {
    setToken(token);
  };
  const navigate = useNavigate();
  useEffect(() => {
    const makeRequest = async (req, res) => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: token,
          amount: cart.total * 100,
        });
        navigate.push("/success", { data: res.data });
        console.log(res.data);
      } catch (err) {}
    };
    token && makeRequest();
  }, [token, cart.total, navigate]);
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
          <StripCheckout
            name="ShoppingKart"
            image=""
            billingAddress
            shippingAddress
            description={`Your total is ${cart.total}`}
            amount={cart.total * 100}
            token={onToken}
            stripeKey={KEY}>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </StripCheckout>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <>
                <Product>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>
                        <b>Product: </b>
                        {product.title}
                      </ProductName>
                      <ProductId>
                        <b>ID: </b>
                        {product.id}
                      </ProductId>
                      <ProductColor color={product.color} />
                      <ProductSize>
                        <b>Size: </b>
                        {product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <RemoveIcon />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <AddIcon />
                    </ProductAmountContainer>
                    <ProductPrice>
                      Rs. {product.price * product.quantity}
                    </ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr />
              </>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal: </SummaryItemText>
              <SummaryItemPrice> Rs.{cart.total}</SummaryItemPrice>
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
              <SummaryItemPrice>{cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripCheckout
              name="ShoppingKart"
              image=""
              billingAddress
              shippingAddress
              description={`Your total is ${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}>
              <SummaryButton>CHECKOUT NOW</SummaryButton>
            </StripCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
