const modal = ({ open, closeProps }) => {
  return (
    <>
      <div
        className={`${
          open ? "block" : "hidden"
        } fixed inset-0 flex flex-col justify-center bg-black bg-opacity-50`}
      >
        <div className="flex flex-col items-center text-center w-2/3 md:w-1/4 mx-auto bg-white shadow-xl rounded-xl py-8 px-8">
          <div className="text-lg md:text-xl font-black">
            Registered successful
          </div>
          <div className="py-8">
            <p className="text-md md:text-lg">
              Your registration has been successfully submitted. We’ve sent you
              an email with all of the details of your registration.
            </p>
          </div>
          <div className="w-40 h-14">
            <button
              className="h-full w-full rounded-full bg-black text-white"
              type="button"
              onClick={closeProps}
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default modal
