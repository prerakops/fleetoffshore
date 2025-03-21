
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
    <div className="">
      <Nav />
      <div className="mx-auto grid max-w-4xl grid-cols-0 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">Winch Engine</h2>
          <p className="mt-4 text-slate-100">
            Drop us an email about your requirement at prerak@fleetoffshoresupply.com to get a quotation.
          </p>

          <br></br>
          <hr></hr>



        </div>
      </div>
    </div>
  )
}
