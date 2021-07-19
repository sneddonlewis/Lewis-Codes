import ModalContainer from "./ModalContainer";
import {Button} from "reactstrap";
import React, {MouseEventHandler} from "react";

interface Props {
    showModal: boolean;
    toggleModal: MouseEventHandler<HTMLElement>;
}

function SendEmail({showModal, toggleModal}: Props) {
    return (
        <>
            {
                showModal ? (
                    <ModalContainer>
                        <div>
                            <div className="m-4">
                                Send an email with your default Mail app to lewis@lewiscodes.io ?
                            </div>
                            <div className="text-end">
                                <Button
                                    className="m-2"
                                    outline
                                    size="sm"
                                    color="warning"
                                    onClick={toggleModal}
                                >Cancel</Button>
                                <Button
                                    className="m-2"
                                    outline
                                    size="sm"
                                    color="primary"
                                    href="mailto:lewis@lewiscodes.io"
                                >Ok</Button>
                            </div>
                        </div>
                    </ModalContainer>
                ) : null
            }
        </>
    );
}

export default SendEmail;
