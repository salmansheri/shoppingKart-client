import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Container = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  @media only screen and (max-width: 380px) {
    flex-direction: column; 
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.div`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  display: flex;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px; 
  @media only screen and (max-width: 380px) {
    background-color: #eee; 
  }
`;

const Center = styled.div`
  flex: 1;
  @media only screen and (max-width: 380px) {
    display: none; 
  }
`;

const Title = styled.h3`
  margin-top: 20px;
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>ShoppingKart...</Logo>
        <Desc>
          CREATED WITH <FavoriteIcon /> BY SALMAN SHERIFF...
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="1A0000">
            <GitHubIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon style={{ marginRight: "10px" }} /> 4/54g, Indian Nagar, Gangaleri, Krishnagiri.
        </ContactItem>
        <ContactItem><LocalPhoneIcon style={{ marginRight: "10px" }} />+91-9944874518</ContactItem>
        <ContactItem><MailOutlineIcon style={{ marginRight: "10px" }} />sheriffsalman00@gmail.com</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}

export default Footer;
