import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { deleting, adding, editing } from '../Redux/UserReducer';
import { Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';


const Contact = () => {
    type user = {
        id: number | undefined,
        uname: string,
        phone: number,
        status: boolean
    }
    const [EditPopup, showEditPopup] = useState(false);
    const [AddPopup, showAddPopup] = useState(false);
    const [ViewPopup, showViewPopup] = useState(false);
    const [SelectedUser, setSelectedUser] = useState<user>();
    const value = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    // Add contact form submit
    const addUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let target = e.currentTarget;
        const formValues = {
            uname: target.uname.value,
            phone: target.phone.value,
            status: target.status.value == 'active' ? true : false
        }
        dispatch(adding(formValues))
        showAddPopup(false)
    }

    // delete contact
    const deleteUser = (key: number) => {
        dispatch(deleting(key))
    }

    // View or edit contact details
    const manageUser = (key: number, method: string) => {
        method == 'edit' ?
            showEditPopup(true) :
            showViewPopup(true)
        const user = value.find((res: any) => res.id === key);
        user && setSelectedUser(user);
    }

    // On edit form submit
    const handleEdit = (e: React.FormEvent<HTMLFormElement>, key: any) => {
        e.preventDefault();
        let target = e.currentTarget;
        const formValues: user = {
            id: key,
            uname: target.uname.value,
            phone: target.phone.value,
            status: target.status.value == 'active' ? true : false
        }
        dispatch(editing(formValues))
        showEditPopup(false);
    }


    return (
        <section className="bg-[#282c34] min-h-[100vh] h-full md:flex text-white ">
            <div className='md:w-3/12'>
                <Sidebar />
            </div>
            <div className='md:w-9/12 px-10 py-10'>
                <div className=' sm:flex flex-wrap	flex-row'>
                    <div className='w-full p-4 text-center'>
                        <div className='border border-sky-500 h-full p-5 rounded-lg shadow-lg '>
                            <button className='font-thin border border-dashed rounded-full w-[80px] h-[80px]' onClick={() => { showAddPopup(true) }}>
                                <span className='leading-8  text-6xl'>+</span>
                            </button>
                            <h2 className="font-bold uppercase text-l mt-2">Create contact</h2>
                        </div>
                    </div>
                    {value &&
                        value.length == 0 ?
                        <div className='basis-1/1 w-full bg-sky-500/10 rounded-md py-5 px-5 mx-4 border border-white/30'>
                            <h2 className=' text-base'>No contact found, please add contact from create contact button</h2>
                        </div>
                        :
                        value?.map((user: any) => {
                            return <div className='basis-1/1 md:basis-1/3 sm:basis-1/2  p-4 '>
                                <div className='border border-sky-500 p-5 h-full rounded-lg shadow-lg flex flex-col' >

                                    <h2 className='uppercase text-2xl'>{user?.uname}</h2>

                                    <div className='flex flex-auto items-end gap-1 mt-4'>
                                        <button onClick={() => { manageUser(user.id,'view') }} >
                                            <svg className="w-8 h-6 dark:text-white" fill="#fff" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.406 13.844c1.188 0 2.156 0.969 2.156 2.156s-0.969 2.125-2.156 2.125-2.125-0.938-2.125-2.125 0.938-2.156 2.125-2.156zM12.406 8.531c7.063 0 12.156 6.625 12.156 6.625 0.344 0.438 0.344 1.219 0 1.656 0 0-5.094 6.625-12.156 6.625s-12.156-6.625-12.156-6.625c-0.344-0.438-0.344-1.219 0-1.656 0 0 5.094-6.625 12.156-6.625zM12.406 21.344c2.938 0 5.344-2.406 5.344-5.344s-2.406-5.344-5.344-5.344-5.344 2.406-5.344 5.344 2.406 5.344 5.344 5.344z" />
                                            </svg>
                                        </button>
                                        <button onClick={() => { manageUser(user.id,'edit') }} className='w-full flex justify-end'>
                                            <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                            </svg>
                                        </button>
                                        <button onClick={() => { deleteUser(user.id) }}>
                                            <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        })
                    }

                    {/* Popup for adding contact */}
                    {AddPopup &&
                        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black/70	'>
                            <form onSubmit={addUser} className='w-6/12 text-left bg-white text-black relative p-10 rounded-lg'>
                                <h2 className="text-3xl font-bold  mb-8 text-center">Add contact</h2>
                                <button onClick={() => showAddPopup(false)} className='closePopup rounded-full absolute top-3 right-5 bg-black text-slate-100 px-2 text-sm'>X</button>
                                <input type='text' placeholder='name' name='uname' required className='border border-gray-600 px-4 py-2 w-full rounded-lg mb-3'></input><br />
                                <input type='text' placeholder='phone' name='phone' required className='border border-gray-600 px-4 py-2 w-full rounded-lg mb-3'></input><br />
                                <label>Status : </label><br />
                                <input type='radio' name='status' value='active' required className='mx-3' />Active
                                <input type='radio' name='status' value='inactive' required className='mx-3' />Inactive<br />
                                <button type='submit' className='bg-sky-500 text-slate-50 font-bold p-2 w-full rounded-lg mt-8'>Submit</button>
                            </form>
                        </div>
                    }

                    {/* Popup for editing contact */}
                    {EditPopup &&
                        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black/70	'>
                            <form onSubmit={(e) => { handleEdit(e, SelectedUser?.id) }} className='w-6/12 text-left bg-white text-black relative p-10 rounded-lg'>
                                <h2 className="text-3xl font-bold  mb-8 text-center">Edit contact</h2>
                                <button onClick={() => showEditPopup(false)} className='closePopup rounded-full absolute top-3 right-5 bg-black text-slate-100 px-2 text-sm'>X</button>
                                <input type='text' placeholder='name' name='uname' defaultValue={SelectedUser?.uname} className='border border-gray-600 px-4 py-2 w-full rounded-lg mb-3'></input><br />
                                <input type='text' placeholder='phone' name='phone' defaultValue={SelectedUser?.phone} className='border border-gray-600 px-4 py-2 w-full rounded-lg mb-3'></input><br />
                                <label>Status : </label><br />
                                <input type='radio' name='status' value='active' defaultChecked={SelectedUser?.status == true && true} className='mx-3' />Active
                                <input type='radio' name='status' value='inactive' defaultChecked={SelectedUser?.status == false && true} className='mx-3' />Inactive<br />
                                <button type='submit' className='bg-sky-500 text-slate-50 font-bold p-2 w-full rounded-lg mt-8'>Submit</button>
                            </form>
                        </div>
                    }

                    {/* Popup showing contact details */}
                    {ViewPopup &&
                        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black/70	'>
                            <div className='w-max bg-white text-black relative p-10 rounded-lg'>
                                <button
                                    onClick={() => showViewPopup(false)}
                                    className='closePopup rounded-full absolute top-3 right-5 bg-black text-slate-100 px-2 text-sm'
                                >
                                    X
                                </button>
                                <h2 className="text-2xl text-sky-700 font-bold  mb-4 text-center">{SelectedUser?.uname}</h2>
                                <p>Phone :
                                    <span className='text-xl font-semibold text-sky-700'> {SelectedUser?.phone}</span>
                                </p>
                                <p>Status :
                                    {SelectedUser?.status ?
                                        <span className='text-green-500 font-semibold'> Active</span>
                                        :
                                        <span className='text-red-500 font-semibold'> Inactive</span>
                                    }
                                </p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}
export default Contact