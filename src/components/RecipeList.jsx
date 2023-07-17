
import {Container,Header,Grid} from "semantic-ui-react";
import RecipeListItem from "./RecipeListItem";
const RecipeList = ({recipes ,searchedQuery}) => {
    return (
     <Container>
        <Header 
          size="huge"
          content={ <span className="p11" >Recipe for {searchedQuery}</span>}
          textAlign="center"
        />
   <Grid columns={4} doubling>
    {
        recipes && recipes.map(recipe =>(
           <Grid.Column>
                <RecipeListItem recipe={recipe}/>
           </Grid.Column>   
        ))
    }
   </Grid>
     </Container>  
    )
}
export default RecipeList;