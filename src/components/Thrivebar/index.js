import React from 'react';
import MenuBar from '../MenuBar';
import Footer from '../Footer';

const Thrivebar = () => {
  return(
    <div>
      <MenuBar />
      <section className="h-screen text-white" style={{backgroundImage: 'url(/thrivebar-hero.png)', backgroundSize: 'cover'}}>
        <div className="container mx-auto h-full flex items-center">
          <div className="w-2/3">
            <h4 className="text-white uppercase pb-6">
              Design & Development
            </h4>
            <h1>
              Rethinking the accessibility of beauty services.
            </h1>
          </div>
        </div>
      </section>
      <section className="py-32 mx-auto container">
        <div className="w-2/3 mx-auto">
          <h3 className="pb-8">
            It's thrive time
          </h3>
          <p className="pb-8">
            Let’s be real: we all want to thrive and shine. Thrivebar makes it easy for everyone. They came to us with the challenge to design a brand that spoke clearly to their customers, providing a service that is highly accessible. Our solution? Create a bright, iconic brand that reflects the energy of Thrivebar’s offerings and stands out among other services.
          </p>
        </div>
      </section>
      <div className="flex space-x-32 pl-56 pr-12">
        <img src="/thrivebar-asset-1.png" style={{width: '58rem', height: '72.5rem'}}/>
        <img className="ml-auto w-1/2 transform translate-y-40" src="/thrivebar-asset-2.png" />
      </div>
      <div className="transform -translate-y-64 container pl-56" style={{width: '75rem'}}>
        <h3 className="transform -translate-y-32">
          Tasty color combinations, sharp copywriting and energetic photography all combine to tell the story of Thrivebar’s serivces.
        </h3>
      </div>
      <div className="pl-56 pr-20 py-20">
        <img className="w-full" src='/thrivebar-asset-3.png' />
      </div>
      <div className="pl-56 pr-32 py-20">
        <img className="w-full" src='/thrivebar-asset-4.png' />
      </div>
      <section className="py-32 mx-auto container">
        <div className="w-2/3 mx-auto">
          <h3 className="pb-8">
            Website Redesign
          </h3>
          <p className="pb-8">
            Thrivebar’s website has three goals: Tell a vibrant story, help customers find the service, and provide an outlet for thought leadership through redefining what it means to thrive.
          </p>
        </div>
      </section>
      <div className="pl-56 pr-32 pb-32">
        <img className="w-full" src='/thrivebar-asset-5.png' />
      </div>
      <hr />
      <section className="pl-56 pr-32 py-32 flex">
        <h3>How we helped:</h3>
        <div className="ml-auto w-1/5">
          <h3 className="pb-4">Copywriting</h3>
          <h3 className="pb-4">Branding</h3>
          <h3 className="pb-4">Art Direction</h3>
          <h3 className="pb-4">Web Design</h3>
          <h3>Web Development</h3>
        </div>
      </section>
      <section className="pt-40 mx-auto text-center">
        <div>
        <h3>Next Project: HostGenius</h3>
        </div>
        <div className="mt-48 relative" style={{backgroundColor: '#002B3D', height: '60rem'}}>
          <img className="absolute w-2/5" style={{transform: 'translate(74%, -10%)'}} src="/hostgenius-asset-5.png" />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Thrivebar;
