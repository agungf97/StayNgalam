"use client"

import Modal from "../../components/Modal/page"
import { useState } from "react"
import { BsFacebook, BsYoutube } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import hero from "../../assets/hero.png"
import Image from "next/image"

const ComingSoon = () => {
  const [email, setEmail] = useState("")
  const [checkEmail, setCheckEmail] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const mailCheck = text => {
    if (regex.test(email)) {
      return true
    } else {
      return false
    }
  }

  const handleSubmit = () => {
    if (mailCheck(email) === true) {
      setCheckEmail(false)
      setIsOpen(true)
      setTimeout(() => {
        setIsOpen(false)
      }, 3000)
    } else {
      setCheckEmail(true)
      setIsOpen(false)
      setTimeout(() => {
        setCheckEmail(false)
      }, 3000)
    }
  }

  const handleCloseModal = () => {
    setEmail("")
    setIsOpen(!isOpen)
  }

  return (
    <div className="container mx-auto h-screen flex flex-col md:flex-row justify-between items-center md:px-24">
      <div className="flex flex-col gap-5">
        <p className="text-lg font-medium bg-cyan-100 text-cyan-700 uppercase px-3 flex justify-center rounded-3xl py-2 w-48">
          Coming Soon
        </p>
        <p className="text-6xl font-bold">
          Get Notified <br /> When we Launch{" "}
        </p>
        <p className="text-base">Don't Worry we will not spam you .</p>
        <div className="flex gap-5">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email Address"
            // className="block py-1.5 bg-gray-100 h-full w-full rounded-full px-8 text-lg outline-none"
            className="border border-gray-200 rounded-xl focus:outline-none focus:shadow-xl shadow-sm px-4 text-lg"
          />
          <button
            type="submit"
            onClick={() => handleSubmit()}
            // className="h-full w-full rounded-full bg-black text-white"
            className="px-6 py-3 bg-gradient-to-r from-[#aacee0] to-[#b2eded] rounded-2xl hover:scale-95 duration-300 transition text-cyan-800 font-medium"
          >
            Notify Me
          </button>
        </div>
        <Modal open={isOpen} closeProps={handleCloseModal} />
        {checkEmail && (
          <div className="text-center px-4 text-red-600">Email is invalid!</div>
        )}
        <div className="flex gap-2">
          <BsFacebook className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer" />
          <RiInstagramFill className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer" />
          <BsYoutube className="text-4xl rounded-xl text-cyan-700 bg-cyan-100 px-2 py-2 hover:scale-95 duration-300 transition cursor-pointer" />
        </div>
      </div>
      <Image src={hero} alt="hero" className="h-auto w-[480px]" />
    </div>
  )
}

export default ComingSoon