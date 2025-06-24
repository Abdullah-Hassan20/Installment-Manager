import React, { useEffect, useState } from 'react'
import { User, Calendar, Phone, } from 'lucide-react'
import axios from 'axios'

function All() {
  const [data, setData] = useState([])


  useEffect(() => {
    axios.get("http://localhost:3000/api/mongo_data")
      .then((res) => {setData(res.data); console.log(res.data)})
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <>
      <div className="min-w-[90vw] max-h-[45vh] overflow-auto hide-scrollbar">
        {data.length < 1 ? <div className='text-red-100'>NO customer Record</div> :
          <table className=" bg-red-800 rounded-t-2xl w-full text-red-100 table-fixed">
            <thead className="sticky top-[-1px] bg-red-800 z-10">
              <tr>
                <th className="w-[10%] p-2  font-medium sm:font-bold text-[15px] md:text-[18px]">ID</th>
                <th className="w-[35%] p-2  font-medium sm:font-bold text-[15px] md:text-[18px]">
                  <div className="flex gap-1 justify-center items-center">
                    <User className='w-[15px] md:w-[18px]' />
                    <div>Name</div>
                  </div>
                </th>
                <th className="w-[35%] p-2 font-medium sm:font-bold text-[15px] md:text-[18px]">
                  <div className="flex gap-1 justify-center items-center">
                    <Phone className='w-[15px] md:w-[18px]' />
                    <div>Phone no</div>
                  </div>
                </th>
                <th className="w-[20%]  p-2 font-medium sm:font-bold text-[15px] md:text-[18px]">
                  <div className="flex justify-center gap-1 items-center">
                    <Calendar className='w-[15px] md:w-[18px]' />
                    <div>Date</div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((customer, index) => {
              return(
                <tr key={index} className="text-center wrap-anywhere bg-white/10 backdrop-blur-sm shadow-lg text-[13px] md:text-[16px]">
                  <td className='p-2'>{customer.customer_id}</td>
                  <td className='p-2'>{customer.customer_name}</td>
                  <td className='p-2'>{customer.phone_no}</td>
                  <td className='p-2'>{customer.installment_date}</td>
                </tr>
              )
                
              })}
            </tbody>
          </table>
        }
      </div>
    </>
  )
}

export default All
