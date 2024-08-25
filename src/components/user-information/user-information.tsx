import { DeleteUser } from '@/api'
import { Formik, Form, Field } from 'formik'
import { useState } from 'react'
import Modal from 'react-modal'

interface UserInformationProps {
    userData: {
        _id: string
        firstName: string
        lastName: string
    }
}

Modal.setAppElement('#root')

export function UserInformation({ userData }: UserInformationProps) {
    console.log(typeof userData._id)

    const [modalIsOpen, setIsOpen] = useState<boolean>(false)
    function openModal() {
        setIsOpen(true)
    }
    function closeModal() {
        setIsOpen(false)
    }
    return (
        <div>
            <div>
                <span>
                    Hello,{' '}
                    <b>
                        {userData.firstName} {userData.lastName}
                    </b>
                </span>
            </div>
            <div>
                <button onClick={openModal}>Edit</button>
                <button
                    onClick={() => {
                        window.localStorage.clear()
                        window.location.reload()
                    }}
                >
                    Logout
                </button>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.75)'
                    },
                    content: {
                        position: 'absolute',
                        top: '40px',
                        left: '40px',
                        right: '40px',
                        bottom: '40px',
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '20px'
                    }
                }}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal}>close</button>
                <div>Edit profile name</div>
                <Formik
                    initialValues={{ firstName: '', lastName: '' }}
                    onSubmit={(value) => {
                        console.log(value)
                    }}
                >
                    <Form autoComplete="off">
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <Field id="firstName" name="firstName" />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <Field id="lastName" name="lastName" />
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>

                <div>
                    <p>Danger zone</p>
                    <button
                        onClick={async () => {
                            await DeleteUser(userData._id)
                                .then(() => {
                                    window.localStorage.clear()
                                    window.location.reload()
                                })
                                .catch((err) => {
                                    console.log(err)
                                })
                        }}
                    >
                        Delete account
                    </button>
                </div>
            </Modal>
        </div>
    )
}
