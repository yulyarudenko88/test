import { Container } from '@mui/material';
import { Description, Btn, Title } from './Home.styled';

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Title>Tweets</Title>
      <Description>
        In our application, people share their news, thoughts and complaints!
        And you Btncan follow them…
      </Description>
      <Description>
        Join our community faster!
        <Btn to="/tweets">Tweets</Btn>
      </Description>
    </Container>
  );
};

export default Home;
