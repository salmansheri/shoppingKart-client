import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Navbar, Announcement, Newsletter, Footer } from "../components";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import { useLocation } from "react-router-dom";
// import axios from "axios";
import { publicRequest } from "../api";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  object-fit: cover;
  @media only screen and (max-width: 380px) {
    padding: 10px;
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  @media only screen and (max-width: 380px) {
    padding: 0px 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  border-radius: 15px;
  @media only screen and (max-width: 380px) {
    height: 40vh;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
  @media only screen and (max-width: 380px) {
    margin: 10px 0px 0px 0px;
  }
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 380px) {
    flex-direction: column;
  }
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 380px) {
    margin: 10px 0px;
  }
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  @media only screen and (max-width: 380px) {
    width: 100%;
    padding: 0px 0px 20px 0px;
  }
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  cursor: pointer;
  background-color: white;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
  @media only screen and (max-width: 380px) {
    padding: 5px;
    margin-left: 10px;
  }
`;

const FilterSizeOption = styled.option``;

function Product() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/product/find/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "decrease") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>Rs. {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => {
                  return (
                    <FilterSizeOption key={s} value={s}>
                      s
                    </FilterSizeOption>
                  );
                })}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveCircleOutlineOutlinedIcon
                onClick={() => handleQuantity("decrease")}
              />
              <Amount>{quantity} </Amount>
              <AddCircleOutlineSharpIcon
                onClick={() => handleQuantity("increase")}
              />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Product;
