'use client';
import {
  CloudArrowUpIcon,
} from "@heroicons/react/20/solid";
import Nav from "../components/Nav";

const features = [
  {
    description:
      "As the most trusted brand in fulfilling your vessel requirements, we pride ourselves on our daily procurement of marine equipment. Consider us your one-stop solution for all your vessel needs, offering a comprehensive range of products and services to meet every requirement.",
    icon: CloudArrowUpIcon,
  },
];

export default function Example() {
  return (
    <>
      <Nav />
      <div className="bg-gray-900 text-white overflow-hidden py-16 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* <h2 className="text-lg font-semibold leading-7 text-indigo-400">
                About Us
              </h2> */}
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gradient">
              About Us
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Welcome to Fleet Offshore Supply, your trusted partner in sourcing high-quality ship spares and marine equipment. With a commitment to excellence and reliability, we specialize in supplying old, used, refurbished, and even new parts for a wide range of marine applications.
              </p>

              <h2 className="text-lg font-semibold leading-7 text-indigo-400">
                Our Expertise
              </h2>
              <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
                <li>Engines and Engine Spares</li>
                <li>Turbochargers</li>
                <li>Engine Control Systems</li>
                <li>DP Systems</li>
                <li>Hydraulic Systems</li>
                <li>Navigation Equipment</li>
                <li>Marine Cranes</li>
                <li>Winches and much more.</li>
              </ul>

              <h2 className="text-lg font-semibold leading-7 text-indigo-400">
                Seamless Global Supply Chain
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                At Fleet Offshore Supply, we have established strong partnerships with the most reputed shipbreakers in India, Bangladesh, and Turkey. These collaborations enable us to create a seamless supply chain, ensuring the timely and cost-effective delivery of ship spares and equipment to meet your demands.
              </p>

              <h2 className="text-lg font-semibold leading-7 text-indigo-400">
                Why Choose Us?
              </h2>
              <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
                <li>
                  <span className="font-bold">Wide Inventory:</span> We maintain a vast range of ship spares to fulfill urgent and bulk orders.
                </li>
                <li>
                  <span className="font-bold">Trusted Network:</span> Our tie-ups with leading ship breakers guarantee a consistent supply of authentic and dependable parts.
                </li>
                <li>
                  <span className="font-bold">Customer-Centric Approach:</span> We prioritize your needs, offering tailored solutions to keep your operations running smoothly.
                </li>
              </ul>
            </div>

            <div className="relative">
              <img
                src="https://plus.unsplash.com/premium_photo-1664299412781-dc0394417bed?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Product screenshot"
                className="rounded-lg shadow-lg object-cover ring-1 ring-gray-400/10 w-full h-full"
              />
            </div>
          </div>
          <p className="mt-16 text-center text-lg leading-8 text-gray-300">
            Thank you for choosing Fleet Offshore Supply. We look forward to building a lasting partnership and supporting your maritime operations with superior products and outstanding service.
          </p>
        </div>
      </div>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #1e3a8a, #1e90ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </>
  );
}
