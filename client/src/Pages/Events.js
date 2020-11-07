import Card from "../Components/Card";
import Container from "../Components/Container";
import { Title, Text } from "../Components/Text";

const Events = () => {
    return (
        <>
            <Container direction="column" height= "10%" width="80%"  align="center" padding="0% 0% 0% 20%">
                <Title>Tournaments</Title>
              
            </Container>
            <Card
                height="12%"
                width="50%"
                direction="row"
                justify="space-between"
                align="center"
                margin="5% auto"
                padding="2% 4% 2% 4%"
                background= "#000B1D"
            >
                <Text>Icon</Text>
                <Text>League of Legends</Text>
                <Text>Prizepool</Text>
                <Text>Date</Text>
            </Card>
        </>
    )
};


export default Events;