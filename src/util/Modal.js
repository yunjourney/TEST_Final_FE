import React from 'react';
import '../App';
import './Modal.css';

// 도연 작업 완료! (조원들 공동으로 사용하세요~)

const Modal = (props) => {
    const { open, confirm, close, header } = props; 
    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open && 
                <section>
                    <header>
                        {header}
                        <button onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>{props.children}</main>
                    <footer>
                        <button className='close' onClick={close}>확인</button>
                    </footer>
                </section>
            }
        </div>
    );
};
export default Modal;