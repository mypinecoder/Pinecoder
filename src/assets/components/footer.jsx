const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 text-center border-t border-gray-700">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
          <div className="mb-4 md:mb-0 flex flex-col items-center">
            <h2 className="text-2xl text-red-600 font-bold">Pinecoder.in</h2>
            <p className="text-sm mt-2">© {new Date().getFullYear()} Pinecoder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  