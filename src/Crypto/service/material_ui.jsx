// import * as React from 'react';
// import usePagination from '@mui/material/usePagination';
// import { styled } from '@mui/material/styles';

// const List = styled('ul')({
//     listStyle: 'none',
//     padding: 0,
//     margin: 0,
//     display: 'flex',
// });

// export default function UsePagination() {
//     const { items } = usePagination({
//         count: 100,
//     });

//     return (
//         <nav>
//             <List>
//                 {items.map(({ page, type, selected, ...item }, index) => {
//                     let children = null;

//                     if (type === 'start-ellipsis' || type === 'end-ellipsis') {
//                         children = '…';
//                     } else if (type === 'page') {
//                         children = (
//                             <button
//                                 type="button"
//                                 style={{
//                                     fontWeight: selected ? 'bold' : undefined,
//                                 }}
//                                 {...item}
//                             >
//                                 {page}
//                             </button>
//                         );
//                     } else {
//                         children = (
//                             <button type="button" {...item}>
//                                 {type}
//                             </button>
//                         );
//                     }

//                     return <li key={index}>{children}</li>;
//                 })}
//             </List>
//         </nav>
//     );
// }







/////////////////////////////////////////////



import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({setPage}) {

    const handelChange = e => {
        setPage(e.target.textContent)
        // window.scroll(0, 0)
    }
    return (
        <Stack spacing={2}>

            <Pagination count={5} color="primary" onChange={handelChange} />
            {/* <Pagination count={10} /> */}
            {/* <Pagination count={10} color="secondary" />
            <Pagination count={10} disabled /> */}
        </Stack>
    );
}
