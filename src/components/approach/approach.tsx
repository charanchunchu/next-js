
export default function Approach() {
  return (
   <div className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-black text-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&q=80"
                  alt="Our Approach"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-4 relative group inline-block">
                  Our Approach
                  <span className="absolute left-0 bottom-[-6px] h-1 w-10 bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </h2>
                <p className="text-white-600 mb-6">
                  At Uday Infrastructure, we believe in a holistic approach to urban development. Our team of experts
                  combines innovative design, sustainable practices, and cutting-edge technology to create
                  infrastructure that not only meets the needs of today but is also prepared for the challenges of
                  tomorrow.
                </p>
                <button 
            style={{
                border: "1px solid white",
                borderRadius :"10px",
                padding: "10px 20px",
                backgroundColor: "black",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px"
            }}
            // onClick={handleClick}
        >
            Learn More
            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
        </button>                </div>
            </div>
          </div>
        </div>
      
   </div>
  );
}
