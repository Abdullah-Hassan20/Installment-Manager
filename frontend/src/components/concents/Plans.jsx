import React, { useState } from 'react';
import { ShoppingCart, Gift } from 'lucide-react';
import { FcClock, FcCalculator } from "react-icons/fc";
import { MdVerified } from "react-icons/md";

const InstallmentCriteria = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 1,
      duration: '12 Months',
      interest: '50%',
      title: '1 Year Plan',
    },
    {
      id: 2,
      duration: '6 Months',
      interest: '25%',
      title: '6 Months Plan',
    },
    {
      id: 3,
      duration: '3 Months',
      interest: '15%',
      title: '3 Months Plan',
    }
  ];

  return (
    <div className="max-h-[70vh] overflow-auto bg-gradient-to-bl from-red-700 via-red-600 to-black p-2 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto pt-20 sm:pt-20 lg:pt-16">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-12">
          <div className="inline-flex items-center justify-center w-8 h-8 sm:w-16 sm:h-16 bg-white rounded-full mb-2 sm:mb-4 shadow-lg">
            <MdVerified className="text-lg sm:text-3xl text-red-600" />
          </div>
          <h1 className="text-base sm:text-2xl lg:text-4xl font-bold text-white mb-2 sm:mb-4">
            Installment Plan Options
          </h1>
          <p className="text-red-100 text-xs sm:text-lg max-w-2xl mx-auto px-2">
            Choose the most suitable installment duration and interest rate
          </p>
        </div>

        {/* Installment Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer ${
                selectedPlan === plan.id ? 'ring-4 ring-white' : ''
              }`}
            >
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg">
                  <FcClock className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-red-100 mb-1">{plan.title}</h3>
                <p className="text-sm sm:text-base text-red-100 opacity-90 mb-3">{plan.duration}</p>
                <div className="rounded-lg p-2">
                  <p className="text-xs sm:text-sm text-red-100 font-semibold">Interest Rate</p>
                  <p className="text-xl sm:text-2xl font-bold text-red-100">{plan.interest}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Calculator Button */}
        <div className="text-center mb-6 sm:mb-12">
          <a
            href="/calculator"
            className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-red-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <FcCalculator className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
            Calculator
          </a>
        </div>

        {/* Benefits */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-2xl font-bold text-red-100 text-center mb-4 sm:mb-6">🎁 Great Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
            <div className="bg-gradient-to-br from-red-700 to-black border border-white/20 rounded-lg p-4 sm:p-6">
              <div className="flex items-center mb-3">
                <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-red-100 mr-2" />
                <h4 className="text-base sm:text-xl font-bold text-red-100">Early Payment Discount</h4>
              </div>
              <p className="text-sm sm:text-base text-red-100 opacity-90">
                Pay before your deadline and enjoy discount based on your used months.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-700 to-black border border-white/20 rounded-lg p-4 sm:p-6">
              <div className="flex items-center mb-3">
                <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 text-red-100 mr-2" />
                <h4 className="text-base sm:text-xl font-bold text-red-100">Any Product Available</h4>
              </div>
              <p className="text-sm sm:text-base text-red-100 opacity-90">
                Pick any product from the market, and we’ll buy it for you on installment.
              </p>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-red-100 rounded-xl p-4 sm:p-6">
          <div className="flex items-start">
            <div className="bg-red-100 rounded-full p-1.5 sm:p-2 mr-3 flex-shrink-0">
              <span className="text-black font-bold text-sm sm:text-base">!</span>
            </div>
            <div>
              <h4 className="text-sm sm:text-xl font-bold text-red-100 mb-1">Important Note</h4>
              <p className="text-xs sm:text-base text-red-100 opacity-90">
                <strong>Only usable items</strong> are given on installment — <strong>no cash involved</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallmentCriteria;

