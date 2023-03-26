import { React } from 'react';
import Api from './service/api';

////////////////////////////
const AppCrypto = () => {
    return (
        <>
            <Api></Api>
        </>
    );
}

export default AppCrypto;












/////////////////////////////////



// const AppCrypto = () => {

//     const [loading, setLoading] = useState(true);

//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const { data: response } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1');
//                 setData(response);

//                 // console.log(data)

//             } catch (error) {
//                 console.error(error.message);
//             }
//             setLoading(false);
//         }

//         fetchData();
//     }, []);

//     return (
//         <div>

//             {loading && <div> Loading </div>}

//             {!loading &&
//                 <div>
//                     <div> <input type="text" name="" value="" placeholder='search' /> </div>
//                     {data.map(item => (<span>{item.name}</span>))}
//                 </div>
//             }

//         </div>
//     )
// }

// export default AppCrypto;