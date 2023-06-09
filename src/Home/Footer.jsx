import { React, useState, useContext } from 'react';
import { Button } from '@mui/material';
import {AppContext} from '../ContextApp';

////////////////////////////
const Footer = () => {
    const [open, setOpen] = useState(false);

    const { mood } = useContext(AppContext);

    return (
        < >
            <div className="footer bg-gradient-to-b from-yellow-300 to-blue-900 ">
                <div className='con text-center py-4  dark:bg-gradient-to-b from-black to-gray-500 '>
                    <div className='header_text'>
                        <p className='text-blue-900 text-2xl '>
                            kommen sie gern uns mit, um tolle Urlauben zu erleben
                        </p>
                    </div>
                    <div className="input_area">
                        <form>
                            <input className='rounded-sm px-2 w-56' type="email" name='email' placeholder='schreiben Sie deine email'/>
                            <div> <Button variant='contained' className="mt-3"> Ein geben  </Button> </div>
                        </form>
                    </div>
                    <div className="footer_link">
                        <div className="footer_link_item">
                            <h3>
                                About us
                            </h3>
                            <p>1</p>
                        </div>
                        <div className="footer_link_item">
                            <h3>
                                Contact Us
                            </h3>
                            <p>2</p>
                        </div>
                        <div className="footer_link_item">
                            <h3>
                                Videos
                            </h3>
                            <p>3</p>
                        </div>
                        <div className="footer_link_item">
                            <h3>
                                Sozial Media
                            </h3>
                            <p>4</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
