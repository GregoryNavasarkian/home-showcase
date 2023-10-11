import React from "react";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-[80vh] flex bg-indigo-100 mx-auto mt-0 justify-center"
    >
      <div className="relative px-6 pb-20 sm:pt-10 lg:static lg:px-8">
        <div className="mx-auto max-w-xl lg:mx-0 md:max-w-2xl">
          <div className="absolute inset-y-0 left-0 w-full z-[-10] overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2"></div>
          <h2 className="md:text-5xl text-3xl pt-8 font-bold tracking-tight text-gray-900 text-center">
            Get in touch
          </h2>
          <p className="mt-6 md:text-2xl text-xl leading-8 text-gray-600">
            Proin volutpat consequat porttitor cras nullam gravida at. Orci
            molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu
            sed malesuada et magna.
          </p>
          <dl className="mt-10 space-y-4 text-lg leading-7 text-gray-600">
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Address</span>
                <BuildingOffice2Icon
                  className="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                545 Mavis Island
                <br />
                Chicago, IL 99191
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Telephone</span>
                <PhoneIcon
                  className="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a className="hover:text-gray-900" href="tel:+1 (555) 234-5678">
                  +1 (555) 234-5678
                </a>
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Email</span>
                <EnvelopeIcon
                  className="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a
                  className="hover:text-gray-900"
                  href="mailto:hello@example.com"
                >
                  hello@example.com
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Contact;
