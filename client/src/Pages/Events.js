import Card from "../Components/Card";
import Container from "../Components/Container";
import { Title, Text } from "../Components/Text";
import API from "../API/index";
import { useEffect } from "react";

const Events = () => {

    // useEffect(() => {
    //     fetchTournamentInfo();
    // }, []);

    // const fetchTournamentInfo = async () => {
    //     try {
    //         let res = await API.getTournamentInfo();
    //         console.log(res);
    //     } catch (e) {
    //         console.log(e.message);
    //     }
    // }

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
                {/* <Text>{icon}</Text>
                <Text>{name}</Text>
                <Text>{prizepool}</Text>
                <Text>{startdate}</Text>
                <Text>{enddate}</Text> */}
            </Card>
        </>
    )
};


export default Events;