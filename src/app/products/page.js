"use client";
import Nav from '../components/Nav'
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

// Engine Control Alarm Systems
// Navigation Equipment
// Hydraulic System And Solutions
// Turbo Chargers
// Oil Mist Detectors
// Dynamic Positioning System
// Main Engine
// Marine Cranes
// Generator
// Marine Winch
const products = [
  {
    id: 1,
    name: 'Engine Control Alarm Systems',
    href: '/products/engine-control-alarms-systems',
    imageSrc: '/engine-control/engine-control-alarm-system.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Navigation Equipment',
    href: '/products/navigation',
    imageSrc: '/navigation/JRC.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Hydraulic System And Solutions',
    href: '/products/hydraulics',
    imageSrc: '/hydraulic/Rexroth-marine-new-directional-valve-1.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Turbo Chargers',
    href: '/products/turbo-chargers',
    imageSrc: '/turbo/turbo.jpeg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 1,
    name: 'Oil Mist Detectors',
    href: '/products/oil-mist-detectors',
    imageSrc: '/oil-mist-detector/graviner-mark-6-oil-mist-detector.jpeg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Marine Winch',
    href: '/products/Engine',
    imageSrc: '/winch/winch.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Dynamic Positioning System',
    href: '/products/Engine',
    imageSrc: '/dp-system/DP.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Main Engine',
    href: '/products/Engine',
    imageSrc: '/main-engine/engine.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 4,
    name: 'Marine Cranes',
    href: '/products/Engine',
    imageSrc: '/crane/horizontal.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 4,
    name: 'Generators',
    href: '/products/Engine',
    imageSrc: '/generator/generators.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
]

export default function Example() {
  return (
    <div className="bg-black">
      <Nav />

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-slate-200">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-slate-100">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
