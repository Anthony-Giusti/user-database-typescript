//@ts-nocheck
import React, {useState} from 'react'
import { animate } from "motion";
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';

const SuccessSnackBar = () => {
    const [snackBarOpen, setSnackBarOpen] = useState(false);

    const openSnack = () => setSnackBarOpen(true);

    return (
        <div>
            <Button onClick={openSnack}>Open</Button>
            <Snackbar open={snackBarOpen} message="Success">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                        <circle cx="100" cy="100" r="80" pathLength="1"></circle>
                        <path d="M 54 107.5 L 88 138.5 L 144.5 67.5" pathLength="1"></path>
                    </svg>
                </div>
            </Snackbar>
        </div>
        
    )
}

export default SuccessSnackBar;
