
import Nav from '../../components/Nav';

const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
]
// Graviner
// Daihastu
// RTE Rnetrace Engineering
// Deckma Hamburg
// Georim Engineering Co. ltd.
// Schaller Automation
const products = [
  {
    id: 1,
    name: ' Graviner',
    href: '#',
    price: '$48',
    imageSrc: '/oil-mist-detector/graviner-360x300.gif',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: ' Daihastu',
    href: '#',
    price: '$35',
    imageSrc: '/oil-mist-detector/daihatsu.png',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: ' RTE Rnetrace Engineering',
    href: '#',
    price: '$89',
    imageSrc: '/oil-mist-detector/rnertrae-360x300.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: ' Deckma Hamburg',
    href: '#',
    price: '$35',
    imageSrc: '/oil-mist-detector/deckma.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 3,
    name: ' Georim Engineering Co. ltd.',
    href: '#',
    price: '$89',
    imageSrc: '/oil-mist-detector/georim-360x300.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: ' Schaller Automation',
    href: '#',
    price: '$35',
    imageSrc: '/oil-mist-detector/schaller-360x300.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
]


export default function Example() {
  return (
    <div className="bg-gray-900">
      <Nav />
      <div className="bg-gray-900 mx-auto grid max-w-4xl grid-cols-0 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">Navigation Equipment</h2>
          <p className="mt-4 text-slate-100">
            We have a wide range of Marine radars, Marine Gyro Compass, Marine GPS, Marine Navtex Receiver, Marine D-Fax, Satcom Antena, Marine Doppler log/Speed log, Auto polit, Wind Meter, VDR, Echo Sounder, ATU- Antenna Tunins Unit, ECDIS, AIS - Automatic Identification and much more.
          </p>
          <p>
            BRANDS:
          </p>
          <p>
            SAAB, Furuno, elvin Hughes, Sperry, Decca, NAUTICAST, JRC, SAMYUNG and more.
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
                    {/* <p className="text-white mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
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
