import img5_1 from '../Slider/img5/MENSRESPONSIBLEFLANNELEGRET101-259-20425_5260.webp'
import img5_2 from '../Slider/img5/MENSRESPONSIBLEFLANNELNIGHTSKY101-259-25025_8339.webp'
import img5_3 from '../Slider/img5/MENSRESPONSIBLEFLANNELSMOKYOCHRE101-259-35125_51027_xx.webp'
import img5_4 from '../Slider/img5/MENS_RESPONSIBLE_FLANNEL_LAGOON_101-259-35325_6288.webp'
import img5_5 from '../Slider/img5/MENS_RESPONSIBLE_FLANNEL_MERLOT_101-259-34725_ccv7313.webp'

const initialState = {
    id: 1,
    img: img5_1,
    color: 'Night Sky',
    title: <p className="hover:underline"> The Responsible Flannel </p>,
    price: <p> <span className="line-through pr-2 text-gray-500"> $98.00 </span> $49 </p>

}

const useReducerShow3 = (state = initialState, action) => {
    // console.log(state)

    switch (action.type) {

        case "Merlot":
            state.id = 4
            state.color = 'Merlot'
            state.img = img5_4
            return { ...state }

        case "Egret":
            state.id = 5
            state.color = 'Egret'
            state.img = img5_5
            return { ...state }

        case "Lagoon":
            state.id = 3
            state.color = 'Lagoon'
            state.img = img5_3
            return { ...state }

        case "Smoky_Ochre":
            state.id = 2
            state.color = 'Smoky Ochre'
            state.img = img5_2
            return { ...state }

        case "Default":
            state.id = 1
            state.color = 'Night Sky'
            state.img = img5_1
            return { ...state }

        default:
            return { ...state }
    }
}


export default useReducerShow3;
