import React from 'react';
import { Modal } from 'antd';

import Button from '../Button/index';
import './style.css'
import '../../App.css';

const LyftConfirmationModal = ({visibleLyft}) => {
        return (
    <div >
        <Modal
            visible={visibleLyft}
            closable={false}
            footer={null}
            bodyStyle={{height: '50%'}}
            wrapClassName="modalSize"
        >
            <div className="textSize" >Is this your first vehicle inspection?</div>
            {/* <div className="buttonsContainerModal"> */}
            <div className="btnComponentContainerModal">
            <Button title="Yes" />
            </div>
            <div className="btnComponentContainerModal">
            <Button title="No" />
            </div>
            {/* </div> */}
        </Modal>
    </div>
    )
}

export default LyftConfirmationModal;