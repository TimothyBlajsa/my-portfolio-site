import React from 'react';
import uniqid from 'uniqid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { education } from '../../portfolio';
import { clients } from '../../portfolio';
import { work } from '../../portfolio';
import './Accordion.css';
//import { UTurnLeftSharp } from '@mui/icons-material';


const AccordionDrawer = () => {
    const { date, school, major, achievements } = education;
    console.log(date);
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
                        <Typography sx={{fontFamily:'inherit'}}>Education</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component={'span'}>
                        <p>{date}</p>
                        <p>{school}</p>
                        <p>{major}</p>
                        <ul>
                            {achievements.map((achievement) => (
                                <li key={uniqid()} className='accordion__list'>
                                {achievement}
                                </li>
                            ))}
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
            <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panella-content"
                    id="panella-header"
                    >
                        <Typography>Clients</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component='span'>
                        <ul>
                            {clients.map((client) => (
                                <li key={uniqid()} className='accordion__list'>
                                    {client}    
                                </li>
                            ))}
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
            <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panella-content"
                    id="panella-header"
                    >
                        <Typography>Work</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component='span'>
                        <p>{work.date}</p>
                        <p>{work.client}</p>
                        <li className='accordion__list'>{work.role}</li>
                        <a href={work.link} target='_blank' rel='noreferrer' className='demo__button'>
                            <span type='button' className='btn btn--outline'>
                            Demo
                            </span>
                        </a>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            </div>
        </section>
        </>
    )
}

export default AccordionDrawer;