function App() {
  return (
    <div>
      <header className="text-gray-600 body-font sticky top-0 z-10 bg-neutral-300" >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="data:image/jpeg;base64,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"
              className='h-12 w-12 rounded-full'
            />
            <span className="ml-3 text-xl">Waseem MotorCar</span>
          </a>
          <nav className="  md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center hover:cursor-pointer">
            <a href="#home"  className="mr-5 hover:text-gray-900 hover:underline">Home</a>
            <a href="#aboutCar" className="mr-5 hover:text-gray-900 hover:underline">About</a>
            <a href="#servicesCar" className="mr-5 hover:text-gray-900 hover:underline">Services</a>
            <a href="#contactUs" className="mr-5 hover:text-gray-900 hover:underline">Contact Us</a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-black mt-4 md:mt-0">
            Login
          </button>
        </div>
      </header>

      <section id="home" className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              McLaren 570 GT
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Highs Looks the part of a supercar, drives better than many supercars, costs less than most supercars. Lows The opposite of practical, diminished returns on the racetrack, most people still can't afford one. Verdict The McLaren 570 pulls heartstrings and spikes heart rates in equal measure.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                Buy
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://s.abcnews.com/images/Business/mclaren6-ht-mem-180524_hpMain_4x3_384.jpg"
            />
          </div>
        </div>
      </section>

      <section id="aboutCar" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Automotive Car About
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Luxury cars convey high class with elegant looks and unique features. From powerful engines to cutting-edge technology to lavish amenities, many of these cars have the latest features to make your drive convenient, comfortable, and unforgettable.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://m.atcdn.co.uk/vms/media/w600h450/be021c26b2774b28ae9e57584e158265.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    British brand
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Aston Martin
                  </h1>
                  <p className="leading-relaxed">
                    Aston Martin is acknowledged as an iconic global brand synonymous with style, luxury, performance, and exclusivity.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://w0.peakpx.com/wallpaper/649/444/HD-wallpaper-noir-bentley-cars-bentley-mansion-black-white-thumbnail.jpg" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    continental gt
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Black Bentley
                  </h1>
                  <p className="leading-relaxed">
                    Bentley Motors is the world's of luxury cars.extraordinary cars, and the highest quality craftsmanship.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://static.vecteezy.com/system/resources/thumbnails/030/027/221/small_2x/studiography-powerful-racing-car-auto-performance-show-automobile-luxury-exhibition-jdm-free-photo.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    G Wagon
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Mercedes AMG
                  </h1>
                  <p className="leading-relaxed">
                    The G Wagon's sturdy, boxy exterior sets it apart from the sleek, streamlined designs of most modern luxury vehicle.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://m.atcdn.co.uk/a/media/w600/3b1594a555904280bfa33d32ca55cb6a.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Spider
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Ferrari Roma
                  </h1>
                  <p className="leading-relaxed">
                    The Ferrari Roma is a grand touring car by Italian manufacturer Ferrari.It has a front mid-engine, with a turbocharged V8 engine.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://live.staticflickr.com/65535/33888171278_0c04ef3c78_b.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Vermillion Red
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    McLaren 570GT
                  </h1>
                  <p className="leading-relaxed">
                    McLaren Automotive is a luxury automotive manufacturer based at the McLaren Technology Centre in Woking,England.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Huracan-EVO/10643/1690010999692/front-left-side-47.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Huracan
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Lamborghini Huracan
                  </h1>
                  <p className="leading-relaxed">
                    Automobili Lamborghini S.p.A. is an Italian manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="servicesCar" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Automotive Services
            </h1>
            <h3 className="lg:w-2/3 mx-auto leading-relaxed text-base">
              WE ARE PROVIDE PROFFESINAL SERVICE High-quality services and top-notch designs don’t need to be expensive. With Auto Service, you get the best bang for your buck regarding tools.
            </h3>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://d1gymyavdvyjgt.cloudfront.net/drive/images/uploads/headers/ws_cropper/1_0x0_790x520_0x520_car-service-checklist.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                    microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://media.istockphoto.com/id/1347150429/photo/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage.jpg?s=612x612&w=0&k=20&c=5zlDGgLNNaWsp_jq_L1AsGT85wrzpdl3kVH-75S-zTU="
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                    microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://static.vecteezy.com/system/resources/thumbnails/028/147/472/small_2x/car-repair-service-auto-mechanic-repairing-car-in-auto-repair-shop-generative-ai-photo.jpeg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The 400 Blows
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                    microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="contactUs" className="text-gray-600 body-font relative">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact us
          </h1>
          <h3 className="lg:w-2/3 mx-auto leading-relaxed text-base">

          </h3>
        </div>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3621.1512700262615!2d67.0414250753697!3d24.824499977952755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ5JzI4LjIiTiA2N8KwMDInMzguNCJF!5e0!3m2!1sen!2s!4v1723006735071!5m2!1sen!2s" 
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                4 Khayaban-e-Bahria, Navy Housing Society, Karachi, Karachi City, Sindh 75600, Pakistan
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a href="mailto:waseemrauf672@gmail.com" className="text-purple-500 leading-relaxed">waseemrauf672@gmail.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">0321-8784-553</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button
            onClick={"submit"}
             className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </section>

      <footer className="text-gray-600 body-font bg-cyan-400">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
       <img className="w-14 h-14 text-white p-2 rounded-full" src="https://img.freepik.com/premium-vector/web-developer-logo-template_674356-207.jpg" alt="" />
      
      <span className="ml-3 text-xl">Waseem MotorCar</span>
    </a>

    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500">
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          />
          <circle cx={4} cy={4} r={2} stroke="none" />
        </svg>
      </a>
    </span>
  </div>
</footer>

    </div>
  )
}

export default App

