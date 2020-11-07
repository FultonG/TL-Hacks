const { default: Container } = require("../Components/Container");
const { useAppState } = require("../Context/AppContext")

const Account = () => {
  let { user } = useAppState();
  return (
    <Container align="center" direction="column" height="90%">
      <code style={{color: 'white', width: '100%'}}>{JSON.stringify(user)}</code>
    </Container>
  )
}

export default Account;