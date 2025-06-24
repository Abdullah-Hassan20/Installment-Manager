import React, { useState } from 'react'
import Add from './Add'
import All from "./All"
import axios from 'axios'
import { Search, Edit, Trash2, User, Calendar, Briefcase, Phone, Home, UserCheck } from 'lucide-react'
import { ToastContainer, toast, Bounce } from 'react-toastify';

function SearchComponent() {
  const [data, setdata] = useState()
  const [val, setval] = useState({})
  const [display, setdisplay] = useState(false)

  const handle_change = (e) => {
    setval({ ...val, [e.target.name]: e.target.value })
  }

  const handle_search = async () => {
    try {
      const result = await axios.post("http://localhost:3000/api/search", val);
      if(result.data && !result.data.message){
        setdata(result.data)
        setval({})
        setdisplay(true)
      }
      else{
        toast(result.data.message, {
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
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  const handle_display = () => {
    setdisplay(false)
  }

  const handle_delete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/delete/${id}`);
      toast(res.data.message, {
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
    setdisplay(false)
    } catch (err) {
      console.error("Error deleting:", err);
    }
  };

  const handle_edit = () => {
  };
  return (
    <>
      <div className='max-h-[70vh] overflow-auto bg-gradient-to-bl from-red-700 via-red-600 to-black'>
        <div className='min-h-[70vh] flex flex-col justify-start items-center p-4'>
          {/* Search Section */}
          <div className="search-section mb-4 flex justify-center items-center rounded-lg p-3 text-center border border-white/20 bg-white/10 backdrop-blur-sm shadow-lg">
            <div className="relative flex items-center">
              <input
                onChange={handle_change}
                type="number"
                name='value'
                value={val.value || ""}
                placeholder='Enter Customer ID'
                className='placeholder-red-100 text-red-100 outline-none pr-10 pl-3 py-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none min-w-[200px]'
              />
              <button onClick={handle_search} className='absolute right-2 text-red-100 font-bold hover:scale-110 transition-transform duration-200'>
                <Search size={18} />
              </button>
            </div>
          </div>

          {display ?
            <div className=' card text-red-100 p-5 w-full max-w-2xl m-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl'>
              {/* Card Header */}
              <div className='flex items-center justify-between mb-2 pb-4 border-b border-white/20'>
                <div className="backdrop-blur-sm bg-white/20 font-medium text-[14px] sm:text-[17px] w-[15%] placeholder-red-100 border border-white/20 p-2 rounded-xl text-center">{data.customer_id}</div>
                <div className='flex justify-center items-center'>
                  <User className="mr-2" size={20} />
                  <h2 className="text-xl font-semibold">Customer Record</h2>
                </div>
                <button onClick={handle_display} className="backdrop-blur-sm bg-white/20 font-medium text-[14px] sm:text-[17px] w-[15%] placeholder-red-100 border border-white/20 p-2 rounded-xl text-center">Cancel</button>
              </div>

              {/* Customer Info Grid */}
              <div className='space-y-4'>
                {/* Name and Date Row */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <div className='md:col-span-2'>
                    <label className='text-sm font-medium text-red-200 mb-2 flex items-center'>
                      <User size={16} className="mr-1" />
                      Customer Name
                    </label>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                      <span className="text-white font-medium">{data.customer_name}</span>
                    </div>
                  </div>
                  <div>
                    <label className='text-sm font-medium text-red-200 mb-2 flex items-center'>
                      <Calendar size={16} className="mr-1" />
                      Installment Date
                    </label>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                      <span className="text-white">{data.installment_date}</span>
                    </div>
                  </div>
                </div>

                {/* Occupation and Phone Row */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='text-sm font-medium text-red-200 mb-2 flex items-center'>
                      <Briefcase size={16} className="mr-1" />
                      Occupation
                    </label>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                      <span className="text-white">{data.occupation}</span>
                    </div>
                  </div>
                  <div>
                    <label className='text-sm font-medium text-red-200 mb-2 flex items-center'>
                      <Phone size={16} className="mr-1" />
                      Phone Number
                    </label>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                      <span className="text-white">{data.phone_no}</span>
                    </div>
                  </div>
                </div>

                {/* Reference Contact Row */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='text-sm font-medium text-red-200 mb-2 flex items-center'>
                      <UserCheck size={16} className="mr-1" />
                      Reference Person
                    </label>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                      <span className="text-white">{data.guranter}</span>
                    </div>
                  </div>
                  <div>
                    <label className='text-sm font-medium text-red-200 mb-2 flex items-center'>
                      <Phone size={16} className="mr-1" />
                      Referance Phone_no
                    </label>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                      <span className="text-white">{data.guranter_phone_no}</span>
                    </div>
                  </div>
                </div>

                {/* Address Row */}
                <div>
                  <label className='text-sm font-medium text-red-200 mb-2 flex items-center'>
                    <Home size={16} className="mr-1" />
                    Address
                  </label>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <span className="text-white">{data.address}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className='flex justify-end gap-4 mt-8 pt-4 border-t border-white/20'>
                <button onClick={handle_edit}  className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg">
                  <Edit size={18} />
                  <span>Edit</span>
                </button>
                <button onClick={handle_delete} className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg">
                  <Trash2 size={18} />
                  <span>Delete</span>
                </button>
              </div>
            </div>
            : <All />
          }
        </div>
      </div >
      <ToastContainer />
    </>
  )
}

export default SearchComponent
