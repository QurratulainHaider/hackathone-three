import Image from 'next/image';

const ClassicProduct = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center text-white px-4 sm:px-8 lg:px-16 py-10"
      style={{ backgroundColor: '#23856d' }}
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p
          className="uppercase tracking-wide mb-2"
          style={{
            fontSize: '14px',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
          }}
        >
          Summer 2020
        </p>
        <h1
          className="mb-4"
          style={{
            fontSize: '3.6rem', // Adjusts well across devices
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
          }}
        >
          Vita Classic Product
        </h1>
        <p
          className="leading-relaxed mb-6"
          style={{
            fontSize: '14px',
            fontFamily: 'Montserrat',
          }}
        >
          We know how large objects will act, we know how <br /> large objects will act. We know.
        </p>
        <div className="flex items-center justify-center md:justify-start space-x-4">
          <p className="text-lg sm:text-2xl font-semibold">$16.48</p>
          <button className="bg-white text-green-600 font-semibold px-6 py-2 rounded hover:bg-gray-100">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <Image
          src="/images/b.png" // Update with your image path
          alt="Product Image"
          width={510}
          height={685}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default ClassicProduct;
