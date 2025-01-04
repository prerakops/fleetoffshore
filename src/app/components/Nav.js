"use client";

import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between "
        aria-label="Global"
      >
        <div className="flex lg:flex-1 mt-2">
          {/* <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Fleet Offshore Supply</span>
                        <span className="text-xl font-bold text-indigo-400">Fleet Offshore Supply</span>
                    </a> */}
          <div className="bg-gray-900">
            <a href="/">
            <svg width={180} height={80} viewBox="0 0 350 122.18107804566378" className="looka-1j8o68f"><defs id="SvgjsDefs5265" /><g id="SvgjsG5266" featurekey="symbolFeature-0" transform="matrix(0.92593047846768,0,0,0.92593047846768,129.37034760766159,-16.43341691517422)" fill="#3970fb"><path xmlns="http://www.w3.org/2000/svg" d="M39.509,26.809h0.151l7.057-2.913c0.234-0.095,0.384-0.321,0.384-0.574v-4.771c0-0.205-0.101-0.396-0.283-0.521  c-0.102-0.066-0.219-0.101-0.34-0.101l-7.063,2.916c-0.228,0.099-0.375,0.323-0.375,0.571v4.771c0,0.211,0.104,0.405,0.276,0.518  L39.509,26.809z M40.039,21.667l6.062-2.546v3.952l-6.062,2.545V21.667z" /><polygon xmlns="http://www.w3.org/2000/svg" points="30.519,52.299 34.228,50.673 34.228,45.257 30.519,47.371 " /><polygon xmlns="http://www.w3.org/2000/svg" points="25.461,54.52 28.833,53.039 28.833,48.332 25.461,50.253 " /><polygon xmlns="http://www.w3.org/2000/svg" points="20.741,56.588 23.775,55.257 23.775,51.214 20.741,52.943 " /><polygon xmlns="http://www.w3.org/2000/svg" points="16.358,58.511 19.056,57.327 19.056,53.904 16.358,55.441 " /><polygon xmlns="http://www.w3.org/2000/svg" points="12.312,60.285 14.673,59.25 14.673,56.402 12.312,57.748 " /><path xmlns="http://www.w3.org/2000/svg" d="M94.198,42.99c-0.614-0.613-1.671-0.886-3.425-0.886c-3.803,0-10.99,1.348-19.639,3.369V40.54  c0-0.646-0.523-1.169-1.169-1.169h-8.271v-4.443c0-0.467-0.277-0.887-0.704-1.072c-0.181-0.078-4.072-1.732-9.812-2.06v-5h-0.976  v-9.048h-1.947v9.048h-0.975v5c-5.676,0.323-9.538,1.942-9.797,2.054c-0.003,0.001-0.006,0.002-0.008,0.003  s-0.006,0.003-0.007,0.003c-0.085,0.036-0.164,0.083-0.237,0.138L7.9,56.077c-0.293,0.221-0.467,0.567-0.467,0.935v6.258  c-0.846,0.26-1.403,0.432-1.611,0.496C5.334,63.917,5,64.37,5,64.882v7.658c0,0.582,0.427,1.074,1.001,1.157l59.067,8.543  c0.058,0.008,0.111,0.012,0.168,0.012c0.26,0,0.513-0.085,0.719-0.246c0.251-0.195,0.411-0.484,0.443-0.801  c0.965-9.242,11.494-18.52,19.184-25.294c5.961-5.251,9.335-8.347,9.416-10.906C95.023,44.234,94.746,43.538,94.198,42.99z   M61.695,41.709h7.103v4.318c-2.294,0.551-4.671,1.143-7.103,1.764V41.709z M39.105,35.733c1.492-0.528,5.256-1.66,10.126-1.66  c4.839,0,8.623,1.131,10.125,1.661v12.659c-6.657,1.729-13.623,3.643-20.25,5.521V35.733z M9.771,57.596l26.996-20.324V54.58  c-11.455,3.268-21.62,6.333-26.996,7.973V57.596z M84.038,54.156c-7.662,6.751-18.044,15.898-19.792,25.603L7.338,71.529v-5.784  c5.408-1.663,36.219-11.073,59.455-16.815c0.094-0.023,0.186-0.046,0.277-0.069c0.443-0.108,0.886-0.217,1.322-0.323  c0.58-0.141,1.158-0.28,1.729-0.417c9.169-2.192,16.805-3.678,20.652-3.678c1.513,0,1.781,0.209,1.771,0.202  c0.093,0.093,0.121,0.162,0.117,0.287C92.607,46.604,88.251,50.443,84.038,54.156z" /></g><g id="SvgjsG5267" featurekey="nameFeature-0" transform="matrix(1.286008357349931,0,0,1.286008357349931,-2.5720161014832916,70.2263372200004)" fill="#6582af"><path d="M2 40 l0 -32 l8.4 0 l0 3.2 l-4.4 0 l0 12 l3.6 0 l0 3.2 l-3.6 0 l0 13.6 l-4 0 z M13.200000000000001 40 l0 -32 l4 0 l0 28 l5.2 0 l0 4 l-9.2 0 z M24.8 40 l0 -32 l9.2 0 l0 3.2 l-5.2 0 l0 10.4 l4.4 0 l0 3.2 l-4.4 0 l0 11.2 l5.2 0 l0 4 l-9.2 0 z M36.8 40 l0 -32 l9.2 0 l0 3.2 l-5.2 0 l0 10.4 l4.4 0 l0 3.2 l-4.4 0 l0 11.2 l5.2 0 l0 4 l-9.2 0 z M47.199999999999996 11.600000000000001 l0 -3.6 l12 0 l0 3.6 l-4 0 l0 28.4 l-4 0 l0 -28.4 l-4 0 z M69.99999999999999 23.16 c0 -11.16 0.24 -15.56 6.24 -15.56 s6.24 4.4 6.24 15.56 c0 12.8 -0.24 17.24 -6.24 17.24 s-6.24 -4.44 -6.24 -17.24 z M73.99999999999999 23.16 c0 11.56 0 13.24 2.24 13.24 s2.24 -1.68 2.24 -13.24 c0 -10.4 0 -12.36 -2.24 -12.36 s-2.24 1.96 -2.24 12.36 z M86.07999999999998 40 l0 -32 l8.4 0 l0 3.2 l-4.4 0 l0 12 l3.6 0 l0 3.2 l-3.6 0 l0 13.6 l-4 0 z M97.27999999999999 40 l0 -32 l8.4 0 l0 3.2 l-4.4 0 l0 12 l3.6 0 l0 3.2 l-3.6 0 l0 13.6 l-4 0 z M107.67999999999999 30.240000000000002 l4.04 0 c0.08 5.16 0.48 6.16 1.92 6.16 c1.96 0 1.96 -1.64 1.96 -6 c0 -6.4 -7.92 -4.68 -7.92 -13.2 c0 -5 0 -9.6 6 -9.6 c4.44 0 5.64 2.52 5.92 8.56 l-4 0 c-0.16 -4.36 -0.64 -5.36 -1.92 -5.36 c-1.96 0 -1.96 2.16 -1.96 6.4 c0 6.2 7.96 4 7.96 13.2 c0 5.6 0 10 -6.04 10 c-4.64 0 -5.72 -2.76 -5.96 -10.16 z M122.88 40 l0 -32 l4 0 l0 13.6 l4 0 l0 -13.6 l4 0 l0 32 l-4 0 l0 -15.2 l-4 0 l0 15.2 l-4 0 z M138.48 23.16 c0 -11.16 0.24 -15.56 6.24 -15.56 s6.24 4.4 6.24 15.56 c0 12.8 -0.24 17.24 -6.24 17.24 s-6.24 -4.44 -6.24 -17.24 z M142.48 23.16 c0 11.56 0 13.24 2.24 13.24 s2.24 -1.68 2.24 -13.24 c0 -10.4 0 -12.36 -2.24 -12.36 s-2.24 1.96 -2.24 12.36 z M154.56 40 l0 -32 l6.48 0 c4.12 0 5.52 2.52 5.52 7.36 c0 4.36 -0.52 6.84 -1.76 8.04 l0 0.24 c1.04 0.36 1.36 2.24 1.76 6.92 l0.8 9.44 l-4 0 l-0.52 -9.44 c-0.28 -4.76 -1 -5.76 -2.2 -5.76 l-2.08 0 l0 15.2 l-4 0 z M158.56 21.6 l2.48 0 c1.4 0 1.8 -1.4 1.8 -6.24 c0 -3.16 -0.6 -4.16 -1.8 -4.16 l-2.48 0 l0 10.4 z M170.56 40 l0 -32 l9.2 0 l0 3.2 l-5.2 0 l0 10.4 l4.4 0 l0 3.2 l-4.4 0 l0 11.2 l5.2 0 l0 4 l-9.2 0 z M190.56 30.240000000000002 l4.04 0 c0.08 5.16 0.48 6.16 1.92 6.16 c1.96 0 1.96 -1.64 1.96 -6 c0 -6.4 -7.92 -4.68 -7.92 -13.2 c0 -5 0 -9.6 6 -9.6 c4.44 0 5.64 2.52 5.92 8.56 l-4 0 c-0.16 -4.36 -0.64 -5.36 -1.92 -5.36 c-1.96 0 -1.96 2.16 -1.96 6.4 c0 6.2 7.96 4 7.96 13.2 c0 5.6 0 10 -6.04 10 c-4.64 0 -5.72 -2.76 -5.96 -10.16 z M205.56000000000003 23.16 l0 -15.16 l4 0 l0 15.16 c0 11.56 0 13.24 2 13.24 s2 -1.68 2 -13.24 l0 -15.16 l4 0 l0 15.16 c0 12.8 0 17.24 -6 17.24 s-6 -4.44 -6 -17.24 z M221.36 40 l0 -32 l6.48 0 c4.12 0 5.2 2.52 5.52 8.56 l0 1.28 c-0.32 6.04 -1.4 8.56 -5.52 8.56 l-2.48 0 l0 13.6 l-4 0 z M225.36 23.2 l2.48 0 c1.2 0 1.64 -1 1.8 -5.36 l0 -1.28 c-0.16 -4.36 -0.6 -5.36 -1.8 -5.36 l-2.48 0 l0 12 z M236.16000000000003 40 l0 -32 l6.48 0 c4.12 0 5.2 2.52 5.52 8.56 l0 1.28 c-0.32 6.04 -1.4 8.56 -5.52 8.56 l-2.48 0 l0 13.6 l-4 0 z M240.16000000000003 23.2 l2.48 0 c1.2 0 1.64 -1 1.8 -5.36 l0 -1.28 c-0.16 -4.36 -0.6 -5.36 -1.8 -5.36 l-2.48 0 l0 12 z M250.96000000000004 40 l0 -32 l4 0 l0 28 l5.2 0 l0 4 l-9.2 0 z M260.96000000000004 8 l4 0 l2.4 12.32 l0.4 0 l2.4 -12.32 l4 0 l-4.6 18.08 l0 13.92 l-4 0 l0 -13.92 z" /></g></svg>
            </a>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a
            href="/products"
            className="text-sm font-semibold leading-6 text-slate-100"
          >
            Products
          </a>
          <a
            href="/AboutUs"
            className="text-sm font-semibold leading-6 text-slate-100"
          >
            About Us
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/ContactUs"
            className="text-sm font-semibold leading-6 text-slate-100"
          >
            Contact Us
          </a>
        </div>
        <a
          href="https://wa.me/9033791339"
          target="_blank"
          className="fixed bottom-4 right-4"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            className="w-14 h-14"
            alt="WhatsApp Chat"
          />
        </a>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Fleet Offshore Supply</span>
              <span className="text-xl font-bold text-indigo-400">
                Fleet Offshore Supply
              </span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/products"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-100 hover:bg-gray-500"
                >
                  Products
                </a>
                <a
                  href="/AboutUs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-100 hover:bg-gray-500"
                >
                  About Us
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/ContactUs"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-100 hover:bg-gray-500"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
