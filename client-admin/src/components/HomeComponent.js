import React from "react";
import { Container, Grid, Header, Button, Icon, Divider } from "semantic-ui-react";
import "./Home.css";


const Home = () => {
  const handleButtonClick = () => {
    // Xử lý khi nút được nhấp
    alert("Bạn đã nhấp vào nút!");
  };

  return (
    <Container textAlign="center" className="home-container">
      <Grid centered stackable columns={2}>
        <Grid.Column>
          <Header as="h2" className="home-header" textAlign="center">
            TRANG CHỦ QUẢN TRỊ
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as="h3" className="home-subheader">
            Chào mừng đến với Bảng điều khiển Quản trị
          </Header>
        
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Home;
