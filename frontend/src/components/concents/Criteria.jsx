import React from 'react'
import { FaUserTie, FaBuilding, FaFileContract } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import { BsBank2 } from 'react-icons/bs'

function Criteria() {
  return (
    <>
      <div className="relative">
        <div className="max-h-[70vh] overflow-auto bg-gradient-to-bl from-red-700 via-red-600 to-black p-2 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto pt-20 sm:pt-20 lg:pt-16">
            {/* Header */}
            <div className="text-center mb-4 sm:mb-12">
              <div className="inline-flex items-center justify-center w-8 h-8 sm:w-16 sm:h-16 bg-white rounded-full mb-2 sm:mb-4 shadow-lg">
                <MdVerified className="text-lg sm:text-3xl text-red-600" />
              </div>
              <h1 className="text-base sm:text-2xl lg:text-4xl font-bold text-white mb-2 sm:mb-4">
                Customer Eligibility Criteria
              </h1>
              <p className="text-red-100 text-xs sm:text-lg max-w-2xl mx-auto px-2">
                To qualify for our services, customers must meet one of the following requirements
              </p>
            </div>

            {/* Primary Criteria Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-8 mb-4 sm:mb-12">
              {/* Government Employee Card */}
              <div className="group hover:scale-105 transition-all duration-300">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-6 h-full shadow-md hover:shadow-2xl">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mb-2 sm:mb-6 shadow-lg">
                      <FaUserTie className="text-base sm:text-3xl text-white" />
                    </div>
                    <h3 className="text-base sm:text-2xl font-bold text-white mb-2">
                      Government Employee
                    </h3>
                    <p className="text-red-100 text-xs sm:text-lg mb-2">
                      Customer must be a verified government employee with documentation
                    </p>
                    <div className="text-left">
                      <div className="flex items-center text-red-100 text-xs sm:text-sm">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        Must provide guarantee
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Owner Card */}
              <div className="group hover:scale-105 transition-all duration-300">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-6 h-full shadow-md hover:shadow-2xl">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-2 sm:mb-6 shadow-lg">
                      <FaBuilding className="text-base sm:text-3xl text-white" />
                    </div>
                    <h3 className="text-base sm:text-2xl font-bold text-white mb-2">
                      Business Owner
                    </h3>
                    <p className="text-red-100 text-xs sm:text-lg mb-2">
                      Must own and operate a profitable business with track record
                    </p>
                    <div className="text-left">
                      <div className="flex items-center text-red-100 text-xs sm:text-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                        Must provide guarantee
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Requirements */}
            <div className="mb-5 sm:mb-12">
              <h2 className="text-lg sm:text-3xl font-bold text-white text-center mb-4 sm:mb-8">
                📋 Additional Requirements
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6">
                {/* Bank Checks */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-6 shadow-md hover:shadow-2xl">
                  <div className="flex items-center mb-2">
                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mr-2 sm:mr-3 shadow-lg">
                      <BsBank2 className="text-sm sm:text-xl text-white" />
                    </div>
                    <h4 className="text-sm sm:text-xl font-bold text-white">Bank Guarantee</h4>
                  </div>
                  <p className="text-red-100 text-xs sm:text-base">
                    Provide <span className="text-white font-semibold">two valid bank checks</span> as security
                  </p>
                </div>

                {/* Agreement */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-6 shadow-md hover:shadow-2xl">
                  <div className="flex items-center mb-2">
                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mr-2 sm:mr-3 shadow-lg">
                      <FaFileContract className="text-sm sm:text-xl text-white" />
                    </div>
                    <h4 className="text-sm sm:text-xl font-bold text-white">Legal Agreement</h4>
                  </div>
                  <p className="text-red-100 text-xs sm:text-base">
                    Must <span className="text-white font-semibold">sign the legal agreement</span>
                  </p>
                </div>
              </div>
            </div>

            {/* OR Divider */}
            <div className="relative flex items-center justify-center mb-4 sm:mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/30"></div>
              </div>
              <div className="relative bg-gradient-to-r from-red-700 to-black px-3 sm:px-6 py-1 rounded-full border border-white/20">
                <span className="text-white font-semibold text-xs sm:text-lg">OR</span>
              </div>
            </div>

            {/* Steps */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-6 mb-6">
              <h3 className="text-base sm:text-2xl font-bold text-white text-center mb-4 sm:mb-8">
                ✅ Complete Eligibility Process
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                {["Meet Primary Criteria", "Provide Guarantees", "Sign Agreement"].map((step, i) => (
                  <div key={i} className="text-center">
                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full mb-2 shadow-lg">
                      <span className="text-sm sm:text-2xl font-bold text-white">{i + 1}</span>
                    </div>
                    <h4 className="text-xs sm:text-lg font-semibold text-white mb-1">{step}</h4>
                    <p className="text-red-100 text-xs sm:text-sm">
                      {i === 0 && "Be a government employee OR business owner"}
                      {i === 1 && "Submit guarantees & checks"}
                      {i === 2 && "Complete documentation"}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center mt-2 sm:mt-8">
              <p className="text-red-200 text-xs sm:text-sm px-2">
                * Additional verification and documentation may be required
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Criteria

