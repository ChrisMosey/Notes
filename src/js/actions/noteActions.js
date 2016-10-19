import axios from 'axios';

export function getNotes(){
    return (dispatch) =>{
        axios.get("http://localhost:3000/note")
            .then((response) => {
                dispatch({type: "GET_NOTES", notes: response.data})
            })
            .catch((err) => {
                console.log(err);
            });
    }
}