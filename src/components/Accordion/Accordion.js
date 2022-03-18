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
        <section className='section experience' id='experience'>
            <h2 className='section__title'>Experience</h2>
            <div>
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
            </div>
        </section>
        </>
    )
}

export default AccordionDrawer;