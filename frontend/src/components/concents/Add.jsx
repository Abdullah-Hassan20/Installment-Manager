import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { FaPersonCircleCheck } from "react-icons/fa6";
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';



function Add() {
  const [form, setform] = useState({})

  const handle_change = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const handle_submit = async (e) => {
    e.preventDefault();
    const { id, name, date, occupation, phone_no, guranter, guranter_no, address } = form;
    if (!id || !name || !date || !occupation || !phone_no || !guranter || !guranter_no || !address) {
      toast("All feilds must be filled !!", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          color: "#ffffff",
          border: "1px solid rgba(255,255,255,0.2)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          borderRadius: "0.75rem",
          fontSize: "16px",
          fontWeight: "bold",
          textAlign: "center"
        },
        position: "top-center",
        autoClose: 5000,
        transition: Bounce,
        theme: "colored", // optional but helps override
      })
      return;
    }
    try {
      let response;
      response = await axios.post("http://localhost:3000/api/data", form);
      if (response.data.message) {
        toast(response.data.message, {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            color: "#ffffff",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            borderRadius: "0.75rem",
            fontSize: "16px",
            fontWeight: "bold",
            textAlign: "center"
          },
          position: "top-center",
          autoClose: 5000,
          transition: Bounce,
          theme: "colored", // optional but helps override
        })
        setform({});
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  }

  return (
    <>
      <div className='min-h-[70vh] bg-gradient-to-bl from-red-700 via-red-600 to-black flex justify-center items-center'>
        <div className="card m-4 max-h-[70vh] overflow-auto rounded-2xl justify-center p-3 md:p-6 gap-3 grid grid-cols-1 grid-rows-[auto,1fr,1fr,1fr,1fr,1fr] border border-white/20 bg-white/10 background-drop-blur-sm text-red-100">
          <div className='w-full font-bold text-lg sm:text-2xl text-center flex justify-center items-center gap-2 relative'>
            <input onChange={handle_change} value={form.id || ""} name="id" type="number" placeholder='ID' className="absolute font-medium left-0 text-[14px] sm:text-[17px] w-[15%] placeholder-red-100 border border-white/20 p-2 rounded-xl text-center"/>
            <div className="flex items-center justify-center w-9 h-9 sm:w-15 sm:h-15 bg-white rounded-full shadow-sm text-red-600">
              <FaPersonCircleCheck />
            </div>
            <div>Customer Record</div>
          </div>
          <div className='flex gap-2 w-full'>
            <input onChange={handle_change} value={form.name || ""} name="name" className="text-[14px] sm:text-[17px] w-[60%] placeholder-red-100 border border-white/20 p-2 rounded-xl text-center" type="text" placeholder='Name' />
            <input onChange={handle_change} value={form.date || ""} name="date" className="text-[14px] sm:text-[17px] w-[40%] placeholder-red-100 border border-white/20 p-2 rounded-xl text-center" type="text" placeholder='Installment Date' />
          </div>
          <div className='flex gap-2 w-full'>
            <input onChange={handle_change} value={form.occupation || ""} name="occupation" className="text-[14px]sm:text-[17px]  w-[60%] placeholder-red-100 border border-white/20 p-2 rounded-xl text-center" type="text" placeholder='Occupation' />
            <input onChange={handle_change} value={form.phone_no || ""} name="phone_no" className="text-[14px] sm:text-[17px] w-[40%] placeholder-red-100 border border-white/20 p-2 rounded-xl text-center appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" type="number" placeholder='Phone-no' />
          </div>
          <div className='flex gap-2 w-full'>
            <input onChange={handle_change} value={form.guranter || ""} name="guranter" className="text-[14px] sm:text-[17px] w-[60%] placeholder-red-100 border border-white/20 p-2 rounded-xl text-center" type="text" placeholder='Guranter' />
            <input onChange={handle_change} value={form.guranter_no || ""} name="guranter_no" className="text-[14px] sm:text-[16px] w-[40%] placeholder-red-100 border border-white/20 p-2 rounded-xl text-center appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" type="number" placeholder="Guranter's Phone-no" />
          </div>
          <div>
            <input onChange={handle_change} value={form.address || ""} name="address" className="text-[14px] sm:text-[17px] placeholder-red-100 border border-white/20 p-2 rounded-xl w-full text-center" type="text" placeholder='Address' />
          </div>
          <div className='flex justify-end'>
            <button onClick={handle_submit} className="flex justify-center items-center w-20 cursor-pointer bg-gradient-to-l from-red-800 to-red-600 p-2 rounded-xl text-center font-bold hover:scale-105 transition-all duration-300">
              < IoMdAdd className="text-bold" />
              <div>Add</div>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Add

