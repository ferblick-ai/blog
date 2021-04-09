import Container from './container'
import FooterLink from "./footer-link";
import {IoLogoLinkedin} from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-14 flex flex-col lg:flex-row items-center">
          <h3
            className="text-2xl lg:text-4xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-8 lg:mb-0 lg:pr-4 lg:w-1/2">
            A blog by ferblick<span className="text-success">.</span>
          </h3>
          <div className="flex flex-col lg:flex-row mb-8 justify-end items-center lg:mb-0 lg:pl-4 lg:w-1/2">
            <div className="flex flex-row mb-8 justify-start items-center lg:mb-0 lg:pl-4">
              <FooterLink text="Imprint" link="https://ferblick.de/imprint"/>
              <FooterLink text="Privacy" link="https://ferblick.de/privacy"/>
            </div>
            <div className="text-3xl lg:ml-8">
              <a href={'https://www.linkedin.com/company/ferblick'}>
                <IoLogoLinkedin/>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
