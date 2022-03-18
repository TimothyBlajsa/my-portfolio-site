import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Accordion.css';

const AccordionDrawer = () => {
    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panella-content"
                    id="panella-header"
                    >
                        <Typography>Education</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Placeholder</Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default AccordionDrawer;