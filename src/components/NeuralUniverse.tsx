import Image from 'next/image';

const NeuralUniverse = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 md:p-16">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/images/copule.png" 
          alt="Couple in a plaid scarf"
          width={704}
          height={682}
          className="rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
        <p className="text-gray-500 uppercase tracking-wide text-sm mb-2">Summer 2020</p>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Part of the Neural Universe
        </h1>
        <p className="text-gray-600 mb-6">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
            Buy Now
          </button>
          <button className="border border-green-500 text-green-500 px-6 py-2 rounded hover:bg-green-100">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NeuralUniverse;
