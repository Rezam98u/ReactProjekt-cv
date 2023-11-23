import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { TbTopologyStar3 } from "react-icons/tb";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { PiTreeStructureBold } from "react-icons/pi";
import { TbSquarePlus } from "react-icons/tb";
import { TbSquareMinus } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import Modal from "react-modal"
import axios from 'axios';


import './ArmSam.scss'
Modal.setAppElement('#root')
/////////////////////////////
const AmrSam = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [changeTab, setChangeTab] = useState(false);
    const [isCollapse, setIsCollapse] = useState({})
    const [showData, setShowData] = useState(false)
    // const [id, setId] = useState('')
    const [data, setData] = useState([])

    const [title, setTitle] = useState(String);
    const [processId, setProcessId] = useState(String);
    const [owner, setOwner] = useState(String);
    const [supervisor, setSupervisor] = useState(String);
    const [description, setDescription] = useState(String);

    const closeModal = () => setIsOpen(false)

    const customStyles = {
        content: {
            height: '650px',
            width: '850px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }
    }

    const treeName = [
        {
            id: '1',
            name: 'معاونت فناوری اطلاعات',
            kind: [
                {
                    id: '1_1',
                    name: 'مدیریت نرم افزار',
                    kind: [],
                    data: []

                },
                {
                    id: '1_2',
                    name: 'مدیریت زیر ساخت',
                    kind: [],
                    data: []
                },
                {
                    id: '1_3',
                    name: 'مدیریت امنیت تبادل اطلاعات',
                    kind: [
                        {
                            id: '1_3_1',
                            name: "آرش بهرامی",
                            jobPosition: "مدیر امنیت",
                        },
                        {
                            id: '1_3_2',
                            name: "کاطمی پور",
                            jobPosition: "کارشناس امنیت",
                        },
                    ],
                    data: [
                        { info: " A.01.02 : واحد ۱" },
                        { info: " A.01.02 : واحد ۲" },
                        { info: " A.01.03 : واحد ۳" },
                    ]
                }
            ]
        },

        {
            id: '2',
            name: "معاونت آموزش",
            kind: [],
            data: [],
        },

        {
            id: '3',
            name: "معاونت پژوهش",
            kind: [],
            data: [],
        },
    ]


    const toggleCollapse = id => {
        setIsCollapse(prevState => ({
            ...prevState,
            [id]: !prevState[id],
        }))
        setShowData(false)
        // setId(id)
    }

    const postData = () => {
        const userData = {
            title: title,
            processId: processId,
            owner: owner,
            supervisor: supervisor,
            description: description,
        }

        axios.post('https://jsonplaceholder.typicode.com/posts/', userData)
            .then(response => console.log('Response:', response.data))
            .catch(error => console.error('Error:', error))
    }


    const dataHandler = data => setData(data)


    return (
        <>
            <div className='w-[90%] mx-auto text-center mt-20'>
                <div>
                    <button onClick={() => setIsOpen(true)} className='myButton text-3xl'>
                        نمایش مدال
                    </button>
                    <Modal
                        isOpen={isOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                    >

                        <div lang='fa-ir' dir='rtl' >
                            <div className='flex items-center justify-between mb-10'>
                                <div className='flex items-center gap-1'>
                                    <button onClick={closeModal}> <IoIosCloseCircleOutline size={30} color='#b7b7b7' /> </button>
                                    <div className='text-gray-500 text-lg'> اضافه کردن فرایند</div>
                                </div>
                                <div>
                                    <button className='px-3 py-1 bg-[#e2e2e2] rounded-md font-bold'> A.01.003 </button>
                                </div>
                            </div>

                            <div className='w-[90%] mx-auto'>
                                <div className='flex items-center'>
                                    <div className={changeTab ? "circle1_tab2" : "circle1"}>
                                        مشخصات  فرایند
                                    </div>

                                    <div className={changeTab ? " text-[#0fba0f] font-bold text-3xl" : 'text-[#b7b7b7] font-bold text-3xl'}>
                                        -----
                                    </div>

                                    < div className={changeTab ? "circle2_tab2" : "circle2"}>
                                        واحدهای  درگیر
                                    </div>
                                </div>

                                {!changeTab ?
                                    <div>
                                        <form>
                                            <div className='flex flex-col w-[48%]'>
                                                <label htmlFor="processTitle" >
                                                    <p> عنوان فرایند </p>
                                                    <TbTopologyStar3 color='red' size={10} />
                                                </label>
                                                <input
                                                    type="text"
                                                    name='processTitle'
                                                    id='processTitle'
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                />
                                            </div>

                                            <div className='flex flex-col w-[48%]'>
                                                <label htmlFor="processId">
                                                    شناسه فرایند
                                                    <TbTopologyStar3 color='red' size={10} />
                                                </label>
                                                <input
                                                    type="text"
                                                    name='processId'
                                                    value={processId}
                                                    onChange={(e) => setProcessId(e.target.value)}
                                                />
                                            </div>

                                            <div className='flex flex-col w-[48%]'>
                                                <label htmlFor="processOwner">
                                                    مالک فرایند
                                                    <TbTopologyStar3 color='red' size={10} />
                                                </label>
                                                <input
                                                    type="text"
                                                    name='processOwner'
                                                    value={owner}
                                                    onChange={(e) => setOwner(e.target.value)}
                                                />
                                            </div>

                                            <div className='flex flex-col w-[48%]'>
                                                <label htmlFor="process‌Supervisor" >
                                                    ناظر فرایند
                                                    <TbTopologyStar3 color='red' size={10} />
                                                </label>
                                                <input
                                                    type="text"
                                                    name='process‌Supervisor'
                                                    value={supervisor}
                                                    onChange={(e) => setSupervisor(e.target.value)}
                                                />
                                            </div>

                                            <div className='flex flex-col w-full'>
                                                <label htmlFor="processDescription"> توضیحات فرایند</label>
                                                <textarea
                                                    rows="4"
                                                    cols="50"
                                                    name="comment"
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                />
                                            </div>
                                        </form>

                                        <div className='mt-2 flex justify-end'>
                                            <button className='myButton' onClick={() => setChangeTab(true)}>
                                                ثبت و ادامه
                                            </button>
                                        </div>
                                    </div>

                                    :

                                    <div>
                                        <div className='flex items-center my-4 gap-x-5 text-[#a4a4a4]'>
                                            <div className='w-[49%]'>
                                                <h1 className='text-start py-[20px]'> لیست کل واحد های سازمانی </h1>
                                                <div className='border-2 h-[280px] rounded-lg p-2'>
                                                    <div className='flex gap-3 items-center'>
                                                        <PiTreeStructureBold />  سازمان آموزش فنی و حرفه ای
                                                    </div>

                                                    {treeName.map(item =>
                                                        <div>
                                                            <div className='flex gap-3 items-center'>
                                                                <button onClick={() => toggleCollapse(item.id)}>
                                                                    {isCollapse[item.id] ? <TbSquareMinus /> : <TbSquarePlus />}
                                                                </button>
                                                                <PiTreeStructureBold />
                                                                {item.name}
                                                            </div>
                                                            <div className='border-solid border-r-2 rounded-md leading-7'>
                                                                {isCollapse[item.id] &&
                                                                    item.kind.map(itm =>
                                                                        <div>
                                                                            <div className='flex gap-3 items-center mr-4'>
                                                                                <button onClick={() => {
                                                                                    toggleCollapse(itm.id)
                                                                                    dataHandler(itm.data)
                                                                                }}>
                                                                                    {isCollapse[itm.id] ? <TbSquareMinus /> : <TbSquarePlus />}
                                                                                </button>
                                                                                <PiTreeStructureBold />
                                                                                <p
                                                                                    className='px-1 rounded-md'
                                                                                    style={{ backgroundColor: isCollapse[itm.id] && '#e8e8e8' }}
                                                                                >
                                                                                    {itm.name}
                                                                                </p>
                                                                            </div>

                                                                            {isCollapse[itm.id] &&
                                                                                itm.kind.map(i =>
                                                                                    <div className='flex gap-3 items-center mr-14'>
                                                                                        <FaUserAlt size={13} />
                                                                                        {i.jobPosition} /<span className='text-blue-600'>{i.name}</span>
                                                                                    </div>
                                                                                )}
                                                                        </div>
                                                                    )}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <Tippy content="نمایش اطلاعات" delay={550} placement='top'>
                                                <button onClick={() => setShowData(true)}>
                                                    <RiArrowLeftDoubleFill size={25} color='#b7b7b7' />
                                                </button>
                                            </Tippy>

                                            <div className='w-[49%]'>
                                                <h1 className='text-start py-[20px]'> واحد های سازمانی مرتبط با فرایند </h1>
                                                <div className='border-2 h-[280px] rounded-lg text-start'>
                                                    {showData && data.map(i =>
                                                        <div className='leading-9 border-b-2 w-[85%] mx-auto'>
                                                            {i.info}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>


                                        <div className=' flex justify-between'>
                                            <button className='myButton' onClick={() => setChangeTab(false)}>
                                                قبلی
                                            </button>
                                            <button type='submit' className='myButton' onClick={postData}>
                                                ثبت اطلاعات
                                            </button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </>
    )
}

export default AmrSam;
