
import {Button} from "semantic-ui-react";
import Header from "../components/com/Header";
import {Link} from "react-router-dom";
const Home = () => {
    return (
       <Header title="New Recipes" bgClass="bg-img">
        <Button
          content="SEARCH RECIPES" 
          color="primary"
          as={Link}
          to="/recipes"
          size="big"
        />
        </Header>
    )
}

export default Home;