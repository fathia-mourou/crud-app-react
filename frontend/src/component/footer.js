'use client';
import { Footer } from 'flowbite-react';
import {BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';

function FooterApp() {
    return ( 
        <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              alt="Cozi Logo"
              href="#"
              name=""
              src="../CoZi-Logo.webp"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <Footer.Title title="Coordonnées" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  cozi coworking, la marina, houmt souk, Djerba
                </Footer.Link>
                <Footer.Link href="#">
                  contact@cozi.tn
                </Footer.Link>
                <Footer.Link href="#">
                  (+216) 56 550 680
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Liens utiles" />
              <Footer.LinkGroup col>
                <Footer.Link href="/contact">
                  contact
                </Footer.Link>
                <Footer.Link href="/subscriptions">
                  Subscriptions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="Cozi.tn™"
            href="#"
            year={2023}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/CoZi.tn/"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/cozi.tn/"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://twitter.com/CoZi_Coworking"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="https://www.linkedin.com/company/cozi-tn/"
              icon={BsLinkedin}
            />
          </div>
        </div>
      </div>
    </Footer>
     );
}

export default FooterApp;