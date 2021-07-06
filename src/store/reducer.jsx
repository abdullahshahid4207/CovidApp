import axios from 'axios';

const Reducer = (state = INITIAL_STATE) => {
    // const [data, setData] = useState([]);
    
    INITIAL_STATE.data = 
    axios.get(`https://api.covidtracking.com/v1/states/current.json`)
    .then(res => {
      const apiData = res.data;
    //   setData({ apiData });
      console.log(apiData)
    })
    console.log(state)
    return (
        state
    );
};

const INITIAL_STATE = {
    data: '',
};

export default Reducer;