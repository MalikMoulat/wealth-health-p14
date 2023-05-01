

import "./modalmessage.css"

function ModalMessage({ setVar, message }){
    return(
        <div className="modal-wrap">
            <div className="modal-msg">
                <button className="modal-btn" onClick={() => setVar(false)}>
                    X
                </button>
                <p>
                    {message}
                </p>
            </div>
        </div>
    )
}


export default ModalMessage