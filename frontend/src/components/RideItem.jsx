import React from 'react'
import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";
import { TbClockHour4Filled } from "react-icons/tb";
import { BsHourglassSplit, BsFillTaxiFrontFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";



export const RideItem = () => {
  return (
    <section className='bg-tertiary text-white rounded-2xl p-2 grid grid-cols-2 grid-rows-3 gap-1'>
      <div className='flex items-center'>
        <FaLocationDot />
        <b className='ml-2'>Origen:</b>
        <p className='ml-2'>Barranco</p>
      </div>

      <div className='flex items-center'>
        <TbClockHour4Filled />
        <b className='ml-2'>Hora de salida:</b>
        <p className='ml-2'>16:00</p>
      </div>

      <div className='flex items-center'>
        <FaMapLocationDot />
        <b className='ml-2'>Destino:</b>
        <p className='ml-2'>Miraflores</p>
      </div>

      <div className='flex items-center'>
        <BsHourglassSplit />
        <b className='ml-2'>Hora de llegada:</b>
        <p className='ml-2'>16:30</p>
      </div>

      <div className='flex items-center'>
        <AiFillDollarCircle />
        <b className='ml-2'>Precio:</b>
        <p className='ml-2'>S/. 20</p>
      </div>

      <div className='flex items-center'>
        <BsFillTaxiFrontFill />
        <b className='ml-2'>Conductor(a):</b>
        <p className='ml-2'>María</p>
      </div>
    </section>
  )
}
