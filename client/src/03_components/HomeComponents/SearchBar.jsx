import { useState} from 'react'
import { useDispatch } from 'react-redux';
import { searchCountries } from '../../02_actions/index';



export default function SearchBar() {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    
    function onSubmit(e){
        e.preventDefault();
        dispatch(searchCountries(search))
        setSearch('')
    }

    function onInputChange(e){
        e.preventDefault();
        setSearch(e.target.value)
   
    }

    return <div>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder='Colocar pais...' onChange={onInputChange} value={search} />
            <input type="submit" value="Buscar" />
        </form>
    </div>
}
