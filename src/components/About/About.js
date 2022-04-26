import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import { about } from '../../portfolio'
import './About.css'
//import image from 'images/skull.png'
import { hero } from '../../portfolio';

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      <div className='hero-container'>
        <div className='hero-text'>
      <img className='hero-image' src={hero.src} alt='profile-pic' width="100%" height="auto"/>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      </div>
      </div>
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target='_blank' rel='noreferrer'>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedInIcon />
              </a>
            )}

            {social.twitter && (
              <a
                href={social.twitter}
                aria-label='twitter'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <TwitterIcon />  
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
