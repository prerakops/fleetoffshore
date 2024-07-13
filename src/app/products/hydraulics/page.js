
import Nav from '../../components/Nav';

const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
]

const products = [
  {
    id: 1,
    name: 'Daikin',
    href: '#',
    price: 'DAIKIN world’s largest global Hydraulic Equipment manufacturer. We as Fleet Of Shore Supply DAIKIN’s Hydraulic Pumps and Motors. We are dealing in V38A, V8A and more products.',
    imageSrc: '/hydraulic/daikin.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Denison',
    href: '#',
    price: 'DENISON Hydraulics world’s global Hydraulic Equipment manufacturer with variety range of models in Hydraulic Pump and Motor. We as Fleet Of Shore Supply supplying DENISON HYDRAULIC’s Pumps and Motors. We are providing M11G, M1C, M14H and more products in Motors P14P, P160, P6 and more',
    imageSrc: '/hydraulic/denison.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Fukushima',
    href: '#',
    price: 'FUKUSHIMA is global Hydraulic Motors and Pumps manufacturer. We as Fleet Of Shore Supply supplying FUKUSHIMA’s Pumps and Motors. We are supplying V39, V8A and more models.',
    imageSrc: '/hydraulic/fukushima.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Hydranor Kongsberg',
    href: '#',
    price: `HYDRANOR KONGSBERG NORWAY is Directional Valve manufacturer globally. We as Fleet Of Shore Supply dealing in HYDRANOR’s New Directional Valve. We are supplying 3AVB, 3SV14 and more models for marine hydraulic system.`,
    imageSrc: '/hydraulic/Hydranor-Kongsberg.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 3,
    name: 'Rexroth',
    href: '#',
    price: 'REXROTH is manufacturing Piston Pumps, Gear Pumps, Hydraulic Motors, Vane Pumps, New Directional Valve for marine hydraulic system. We as Fleet Of Shore Supply supplying almost each products of REXROTH.',
    imageSrc: '/hydraulic/rexroth.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'IHI',
    href: '#',
    price: `IHI is manufacturer globally marine hydraulic pumps. We as Fleet Of Shore Supply dealing in IHI’s Hydraulic Pumps. We are supplying 6 P 48, 6P 67 R, 6P 41 R and more models for marine hydraulic system.`,
    imageSrc: '/hydraulic/ihi.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 3,
    name: 'Dowmax',
    href: '#',
    price: `DOWMAX Hydraulic Motors masters in global Hydraulic Motors manufacturing. We as Fleet Of Shore Supply supplying DOMAX’s Motors. We are supplying ME1300, PAV 107 and more.`,
    imageSrc: '/hydraulic/dowmax.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'kawasaki',
    href: '#',
    price: `KAWASAKI is worldwide manufacturer marine hydraulic pumps and motors. We as Fleet Of Shore Supply supplying KAWASAKI’s Hydraulic Pumps and Motors. We are supplying LZ 030-110 R 11D, K3 VG 12 -13 NR -1 NM4 and more models for marine hydraulics equipment.`,
    imageSrc: '/hydraulic/kawasaki.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 4,
    name: 'KYB',
    href: '#',
    price: `KYB is manufacturer of marine hydraulic pumps and motors. We as Fleet Of Shore Supply supplying KYB’s Hydraulic Motors. We are supplying more models for marine hydraulics smooth functioning.`,
    imageSrc: '/hydraulic/kyb.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
]


export default function Example() {
  return (
    <div className="">
      <Nav />
      <div className="mx-auto grid max-w-4xl grid-cols-0 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">Hydraulic System And Solutions</h2>
          <p className="mt-4 text-slate-100">
            Hydraulic System and Equipments like Motor and Pump are very important to manage and control Marine Functionality smoothly. Main usage of Hydraulic System in ships is its Applications. These Applications are very useful to manage various functions on ships. Hydraulic System has various type of Applications to manage below mentioned functions on vessels.
          </p>

          <br></br>
          <hr></hr>

          <div className="text-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h2 className="sr-only">Products</h2>

              <div className="text-white grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                {products.map((product) => (
                  <a key={product.id} href={product.href} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        alt={product.imageAlt}
                        src={product.imageSrc}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="text-white mt-4 text-sm text-gray-700">{product.name}</h3>
                    <p className="text-white mt-1 text-lg">{product.price}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
