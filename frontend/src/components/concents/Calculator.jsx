import React, { useState } from 'react';
import { FcCalculator } from "react-icons/fc";
import { FaCheck, FaCheckDouble } from "react-icons/fa";

function Calculator() {

  const [result, setResult] = useState(null);
  const [total, setTotal] = useState(null)
  const [form, setForm] = useState({});
  const [rotate, setRotate] = useState(true);

  const handle_change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handle_button = () => {
    setRotate(!rotate)
  }

  const do_calculation = () => {
    const price = parseFloat(form.price);
    const plan = form.select;

    if (!price || !plan) return alert("Fill all fields correctly.");

    let percent;
    if (plan === "3") percent = 15;
    else if (plan === "6") percent = 25;
    else if (plan === "12") percent = 50;

    const total = price + (price * percent / 100);
    const installment = total / parseInt(plan);
    setRotate(!rotate)
    setTotal(Math.ceil(total))
    setResult(Math.ceil(installment)); // 2 decimal places

  };

  return (
    <div className='min-h-[70vh] w-full bg-gradient-to-bl from-red-700 via-red-600 to-black flex justify-center items-center'>
      <div className='flex justify-center items-center [transform-style:preserve-3d] transition-transform duration-700' style={{ transform: rotate ? 'rotateY(0deg)' : 'rotateY(180deg)', }}>
        {rotate ? (
          <div className={`calculator backface-hidden flex flex-col justify-center items-center gap-5 border border-white/20 bg-white/10 background-drop-blur-sm rounded-2xl p-8`} >
            <div className='flex justify-center items-center'>
              <FcCalculator className="w-5 h-5 sm:w-8 sm:h-8" />
              <h1 className='font-bold text-red-100 text-2xl'>Calculate your Installment</h1>
            </div>
            <div className='grid grid-cols-2 grid-rows-2 gap-2 p-2 text-center text-red-100'>
              <input onChange={handle_change} value={form.product || ""} name="product" className="font-light rounded-lg p-2 text-center border  placeholder-red-100 border-white/20" type="text" placeholder='Product' />
              <select onChange={handle_change} name="select" className="p-2 rounded-lg border border-white/20">
                <option className="text-black" value="">Choose a plan</option>
                <option className="text-black" value="3">3 Months</option>
                <option className="text-black" value="6">6 Months</option>
                <option className="text-black" value="12">12 Months</option>
              </select>
              <input onChange={handle_change} value={form.price || ""} name="price" className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none font-light rounded-lg p-2 text-center border  placeholder-red-100 border-white/20 " type="number" placeholder='Price of product' />
              <button onClick={do_calculation} className='flex justify-center items-center gap-1 border text-red-100 border-white/20 w-20 mx-auto p-2 bg-gradient-to-bl from-red-800 to-red-600 hover:scale-105 font-bold cursor-pointer rounded-xl transition-all duration-300'>
                <FaCheck />
                <div>Check</div>
              </button>
            </div>
          </div>
        ) : (
          <div className="result flex flex-col backface-hidden rotate-y-180 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl justify-center items-center gap-5 p-6">
            <h1 className='font-bold text-red-100 text-2xl'>Installment Plan</h1>
            <div className='grid grid-cols-1 grid-rows-3 p-2 text-center text-red-100'>
              <div className='flex flex-col gap-2'>
                <div className='font-bold'>{form.product.toUpperCase()}</div>
                <div className='flex gap-2 mx-auto'>
                  <div className='flex gap-1'><label className='font-bold'>Price:</label><div>{form.price}</div></div>
                  <div className='flex gap-1'><label className='font-bold'>Months:</label><div>{form.select}</div></div>
                </div>
              </div>
              <div className=' font-light my-auto text-[14px]  items-center z-50 opacity-100'>After Interest<hr className="opacity-100 border-t relative bottom-[10px] border-white/30 w-full" /></div>
              <div>
                <div className='flex gap-1 '><label className='font-bold'>Price:</label><div>{total}</div></div>
                <div className='flex gap-1'><label className='font-bold'>Installment per-month:</label><div>{result}</div></div>
              </div>
              <button onClick={handle_button} className='flex justify-center items-center gap-1 border text-red-100 border-white/20 mx-auto p-2 bg-gradient-to-bl from-red-800 to-red-600 hover:scale-105 font-bold cursor-pointer rounded-xl transition-all duration-300 '>
                <div><FaCheckDouble /></div>
                <div>Re-Check</div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Calculator



