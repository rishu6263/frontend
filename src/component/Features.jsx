import React from 'react';

const Features = () => {
  return (
    <section id='features'>
      {/* Flex Container */}
      <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
        {/* What's Different */}
        <div className='flex flex-col space-y-12 md:w-1/2'>
          <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
            What's different about US?
          </h2>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        {/* Numbered List */}
        <div className='flex flex-col space-y-8 md:w-1/2'>
          {/* List Item 1 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-yellow-300SupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-yellow-300'>
                  01
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Track company-wide progress
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Track your health-wide progress
              </h3>
              <p className='text-darkGrayishBlue'>
              Our medical startup, founded on the principles of innovation and compassion, aims to revolutionize healthcare delivery. With a dedicated team of professionals, we're committed to harnessing cutting-edge technology to enhance patient care and improve outcomes. At the core of our mission lies a deep-rooted belief in accessibility, affordability, and excellence in healthcare services.
              </p>
            </div>
          </div>

          {/* List Item 2 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-yellow-300SupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-yellow-300'>
                  02
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Advanced built-in reports
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Advanced built-in reports
              </h3>
              <p className='text-darkGrayishBlue'>
              Putting patients first is our guiding philosophy. We understand the challenges individuals face when seeking quality healthcare solutions. Therefore, we've designed our services to be patient-centric, ensuring personalized care tailored to each individual's unique needs. Through empathy-driven practices and advanced medical expertise, we strive to build lasting relationships based on trust and respect.
              </p>
            </div>
          </div>

          {/* List Item 3 */}
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
            {/* Heading */}
            <div className='rounded-l-full bg-yellow-300SupLight md:bg-transparent'>
              <div className='flex items-center space-x-2'>
                <div className='px-4 py-2 text-white rounded-full md:py-1 bg-yellow-300'>
                  03
                </div>
                <h3 className='text-base font-bold md:mb-4 md:hidden'>
                  Everything you need in one place
                </h3>
              </div>
            </div>

            <div>
              <h3 className='hidden mb-4 text-lg font-bold md:block'>
                Everything you need in one place
              </h3>
              <p className='text-darkGrayishBlue'>
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
