import Card from "../Components/Card";
import Container from "../Components/Container";
import { Title, Text } from "../Components/Text";
import API from "../API/index";
import { useEffect, useState } from "react";


const Events = () => {
    const [tournaments, setTournaments] = useState([]);
    useEffect(() => {
        fetchTournamentInfo();
    }, []);

    const fetchTournamentInfo = async () => {
        try {
            let res = await API.getTournamentInfo();
            setTournaments(res.data.result);
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <Container justify="center" align="center" height="90%" direction="column">
            <Container height="20%" justify="center">
            <Title>Tournaments</Title>
            </Container>
            <Container direction="column" align="center" overflow>
            {tournaments.map(tournament => (
                <Card
                    width="75%"
                    height="15%"
                    direction="row"
                    align="center"
                    background="#000B1D"
                    margin="10px"
                >
                    <Container justify="center" align="center" width="40%">
                        <Text>{tournament.name}</Text>
                    </Container>
                    <Container justify="center" align="center" width="20%">
                        <Text>{tournament.prizepool}</Text>
                    </Container>
                    <Container justify="center" align="center" width="20%">
                        <Text>{tournament.startdate}</Text>
                    </Container>
                    <Container justify="center" align="center" width="20%">
                        <Text>{tournament.enddate}</Text>
                    </Container>
                </Card>
            ))}
            </Container>
        </Container>
    )
};


export default Events;