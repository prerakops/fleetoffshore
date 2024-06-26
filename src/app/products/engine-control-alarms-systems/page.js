
import Nav from '../../components/Nav';

const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
]

export default function Example() {
  return (
    <div className="">
      <Nav />
      <div className="mx-auto grid max-w-4xl grid-cols-0 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">Engine Control Alarm Systems</h2>
          <p className="mt-4 text-slate-100">
            The Engine Control Alarm System, also known as the Ship Alarm Monitoring System, stands as an indispensable component in the marine industry, providing essential oversight and control over vessel operations. Designed to meticulously supervise marine engine machinery propulsion, this system offers comprehensive monitoring of sensor conditions, ensuring optimal performance and safety standards are maintained at all times.
          </p>
          <br></br>
          <hr></hr>
          <div className='gap-5 mt-20 lg:flex'>
            <div>

              <img
                src="/engine-control/auto-chief.png"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg h-64 p-2 mt-2 bg-gray-100"
              />
            </div>
            <div className='mt-5'>
              <p>dhyey</p>
              <p>dhyey sdkfnsfdsfjslj kjdsfnjsnfjdsnfjjjjjjjjjjjjjjjjj fsfdsifgifuw hfoewhf ifidgifugdaiufa gfidgfiydagfigi</p>

            </div>
          </div>

          <div className='gap-5 mt-20 lg:flex'>
            <div>
              <img
                src="/engine-control/auto-chief.png"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg h-64 p-2 mt-2 bg-gray-100"
              />
            </div>
            <div className='mt-5'>
              <p>dhyey</p>
              <p>dhyey sdkfnsfdsfjslj kjdsfnjsnfjdsnfjjjjjjjjjjjjjjjjj fsfdsifgifuw hfoewhf ifidgifugdaiufa gfidgfiydagfigi</p>

            </div>
          </div>
          <div className='gap-5 mt-20 lg:flex'>
            <div>

              <img
                src="/engine-control/auto-chief.png"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg h-64 p-2 mt-2 bg-gray-100"
              />
            </div>
            <div className='mt-5'>
              <p>dhyey</p>
              <p>dhyey sdkfnsfdsfjslj kjdsfnjsnfjdsnfjjjjjjjjjjjjjjjjj fsfdsifgifuw hfoewhf ifidgifugdaiufa gfidgfiydagfigi</p>

            </div>
          </div>
          <div className='gap-5 mt-20 lg:flex'>
            <div>
              <img
                src="/engine-control/auto-chief.png"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg h-64 p-2 mt-2 bg-gray-100"
              />
            </div>
            <div className='mt-5'>
              <p>dhyey</p>
              <p>dhyey sdkfnsfdsfjslj kjdsfnjsnfjdsnfjjjjjjjjjjjjjjjjj fsfdsifgifuw hfoewhf ifidgifugdaiufa gfidgfiydagfigi</p>

            </div>
          </div>
          {/* <div class="flex justify-start ...">
            <div>01</div>
            <div>02</div>
            <div>03</div>
          </div> */}
          {/* <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t flex border-gray-200 pt-4">
                <dt className="font-medium text-slate-100">{feature.name}</dt>
                <dd className="mt-2 text-sm text-slate-100">{feature.description}</dd>
                <img
                  src="/engine-control/auto-chief.png"
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="rounded-lg p-2 mt-2 h-64 bg-gray-100"
                />
              </div>
            ))}
          </dl> */}
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">

          {/* <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          /> */}
          {/* <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          /> */}
        </div>
      </div>
    </div>
  )
}
