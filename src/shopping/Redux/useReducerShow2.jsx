import img4_1 from '../Slider/img4/Frame 5.jpg'
import img4_2 from '../Slider/img4/ULTIMATEBISONSOCK_BROWN_709-001-04624_5133.webp'
import img4_3 from '../Slider/img4/ULTIMATEBISONSOCK_LIME_709-001-07024_3085.webp'
import img4_4 from '../Slider/img4/ULTIMATEBISONSOCK_NAVY_709-001-13224_8207.webp'
import img4_5 from '../Slider/img4/ULTIMATEBISONSOCK_RED_709-001-10724_1036.webp'

const initialState = {
    id: 2,
    img: img4_2,
    color: 'Natural',
    title: <p className="hover:underline"> The Ultimate Bison Sock </p>,
    price: <p> <span className="line-through pr-2 text-gray-500"> $44.00 </span> $22 </p>
}

const useReducerShow2 = (state = initialState, action) => {
    switch (action.type) {

        case "Navy":
            state.id = 4
            state.color = 'Navy'
            state.img = img4_4
            return { ...state }

        case "Red":
            state.id = 5
            state.color = 'Red'
            state.img = img4_5
            return { ...state }

        case "Lime":
            state.id = 3
            state.color = 'Lime'
            state.img = img4_3
            return { ...state }

        case "Orange":
            state.id = 1
            state.color = 'Orange'
            state.img = img4_1
            return { ...state }

        case "Default":
            state.id = 2
            state.color = 'Natural'
            state.img = img4_2
            return { ...state }

        default:
            return { ...state }
    }
}


export default useReducerShow2;
