import {useState} from 'react';
import {Grid,Form,Input} from 'semantic-ui-react';

const Search = ({setSearchedQuery}) => {
    const[value,setValue]=useState("");
    const onFormSubmit = () => {
          setSearchedQuery(value);
    }
    return (
        <Grid column={2} textAlign="center" className='search-box'>
         <Grid.Column>
            <h2 className='search-handling'> Search Recipes And Spread Love</h2>
                <h4 style={{fontFamily:'Georgia',fontSize:20,color:"green"}}>Enter the Item to get Recipe</h4>
                <Form onSubmit={onFormSubmit}>
                    <Input className='pop'
                    placeholder="Spinach,peas,cherry"
                    action={{icon:'search',color:'blue'}}
                     onChange={(e) => setValue(e.target.value)}
                     value={value}
                    />
                </Form>
         </Grid.Column>

        </Grid>
    )
}
export default Search;