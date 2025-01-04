
import Nav from '../../components/Nav';

const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
]


// 4) Turbo Chargers

// Brands:

// -> ABB
// We provide ABB series VTR which is one of the best brands in providing compact and advanced turbochargers for low speed, medium speed, and high speed marine engines. The ABB Turbocharging portfolio includes a full line of both single and two-stage turbocharging technology. It is capable of producing pressures as high as 12 bar at efficiencies as high as 75% and above. We are providing used turbochargers but in good and reliable condition. We have a large range of ABB series VTR models including VTR 254, VTR 304, VTR 184, VTR 184/11, TPS – F (TPS – 76F), TPL-C, TPL-B, TPL-A, A200-L, and many more.

// -> MAN
// Man, which is also known as Man Energy Solutions, is the world’s leading manufacturer of large exhaust gas turbochargers. They provide turbochargers for low and medium speed engines which are using diesel and gas. We provide Man B&W series turbochargers which is one of the best brands in two-stroke and dual-fuel for low speed, medium speed, and high speed marine engines. We are providing used turbochargers but in good and reliable condition. We have a large range of Man B&W series models including NR, TCR, TCX, TCT, TCA, and much more.

// -> KBB
// Kompressorenbau Bannewitz GmbH, which is also known as KBB for short, has been developing and manufacturing exhaust-gas turbochargers with both axial and radial turbines since 1953. We are providing used turbochargers but in good and reliable condition. We have a large range of KBB series models including ST27-ST3, ST4, ST, K2B HPR, M4D, H6-1, and much more.


const products = [
  {
    id: 1,
    name: 'ABB',
    href: '#',
    price: 'We provide ABB series VTR which is one of the best brands in providing compact and advanced turbochargers for low speed, medium speed, and high speed marine engines. The ABB Turbocharging portfolio includes a full line of both single and two-stage turbocharging technology. It is capable of producing pressures as high as 12 bar at efficiencies as high as 75% and above. We are providing used turbochargers but in good and reliable condition. We have a large range of ABB series VTR models including VTR 254, VTR 304, VTR 184, VTR 184/11, TPS – F (TPS – 76F), TPL-C, TPL-B, TPL-A, A200-L, and many more.',
    imageSrc: '/turbo/abb-300x225-2-1-300x225.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'KBB',
    href: '#',
    price: 'Kompressorenbau Bannewitz GmbH, which is also known as KBB for short, has been developing and manufacturing exhaust-gas turbochargers with both axial and radial turbines since 1953. We are providing used turbochargers but in good and reliable condition. We have a large range of KBB series models including ST27-ST3, ST4, ST, K2B HPR, M4D, H6-1, and much more.',
    imageSrc: '/turbo/kbb_turbo.jpeg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'MAN B&W',
    href: '#',
    price: 'Man, which is also known as Man Energy Solutions, is the world’s leading manufacturer of large exhaust gas turbochargers. They provide turbochargers for low and medium speed engines which are using diesel and gas. We provide Man B&W series turbochargers which is one of the best brands in two-stroke and dual-fuel for low speed, medium speed, and high speed marine engines. We are providing used turbochargers but in good and reliable condition. We have a large range of Man B&W series models including NR, TCR, TCX, TCT, TCA, and much more.',
    imageSrc: '/turbo/man-B&W.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
]


export default function Example() {
  return (
    <div className="bg-gray-900">
      <Nav />
      <div className=" bg-gray-900 mx-auto grid max-w-4xl grid-cols-0 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">Turbo Chargers</h2>
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
