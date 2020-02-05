import React, { useState } from "react";
import Spinner             from './Spinner';


const useSpinner = overlay => {
    const [visible, setVisible] = useState(false)

    const showSpinner = () => setVisible(true)
    const hideSpinner = () => setVisible(false)
    const spinner = visible ? <Spinner overlay={overlay} /> : null

    return [spinner, showSpinner, hideSpinner]
}

export default useSpinner