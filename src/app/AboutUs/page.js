import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Nav from '../components/Nav'


const features = [
  {
    // name: 'Push to deploy.',
    description:
      'As the most trusted brand in fulfilling your vessel requirements, we pride ourselves on our daily procurement of marine equipment. Consider us your one-stop solution for all your vessel needs, offering a comprehensive range of products and services to meet every requirement.',
    icon: CloudArrowUpIcon,
  },
  // {
  //   name: 'SSL certificates.',
  //   description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
  //   icon: LockClosedIcon,
  // },
  // {
  //   name: 'Database backups.',
  //   description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  //   icon: ServerIcon,
  // },
]

export default function Example() {
  return (
    <>
    <Nav></Nav>
    <div className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">About Us</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">NAME OF COMPANY</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover NAME OF COMPANY, your ultimate destination for premium marine solutions. We offer an extensive range of marine products and services, from engines to a diverse selection of parts for Marine Main Engines, Auxiliary Engines, Marine Automation Systems, Engine Control Alarm Systems, Turbochargers, Hydraulics, Marine Cranes, Navigation Gears, Diesel Generators, Oil mist detectors and more. Our commitment to excellence ensures that your vessel operates reliably and safely.

              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1502621737164-fb78cb47e276?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
    </>
  )
}
