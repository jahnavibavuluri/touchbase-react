import React, { useState, useEffect } from 'react';

import './Toast.css';

const Toast = props => {
    const { toastList, position, handleClose } = props;
    const [list, setList] = useState(toastList);

    useEffect(() => {
        setList(toastList);
    }, [toastList, list]);

    return (
        <>
            <div className={`notification-container ${position}`}>
                {
                    list.map((toast, i) =>
                        <div
                            key={i}
                            className={`notification toast ${position}`}
                            style={{ backgroundColor: toast.backgroundColor }}
                        >
                            {/*<button className="toast-button" onClick={handleClose}>
                                X
                            </button>*/}
                            <div className="notification-image">
                                <img src={toast.icon} alt="" />
                            </div>
                            <div className="message">
                                <p className="notification-title">{toast.title}</p>
                                <p className="notification-message">
                                    {toast.description}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default Toast;
