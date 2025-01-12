import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

function ResetPassword() {
  const inputs = useRef([]);
  const [timer, setTimer] = useState(0);

  const handleInput = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    } else if (value.length === 0 && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleResendOTP = () => {
    setTimer(30); // Start a 30-second countdown
  };

  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setTimeout(() => setTimer(timer - 1), 1000);
    }
    return () => clearTimeout(countdown);
  }, [timer]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 ">
        <div className="relative bg-white rounded-xl shadow-lg border-2 border-indigo-300 p-4">
          {/* Back Arrow */}
          <Link
            to="/auth/login"
            className="absolute left-0 top-4 text-indigo-500 hover:text-indigo-700 ml-2"
          >
            <AiOutlineArrowLeft size={20} />
          </Link>

          {/* Heading */}
          <h1 className="text-xl font-bold text-gray-800 text-center mb-4">Reset Password</h1>

          <form>
            <div className="flex justify-center gap-2 mb-4 p-4">
              {[...Array(4)].map((_, index) => (
                <input
                  key={index}
                  ref={(el) => (inputs.current[index] = el)}
                  className="w-10 h-10 text-center border rounded-md shadow-sm focus:border-black focus:ring-indigo-100 transition-all"
                  type="text"
                  maxLength="1"
                  pattern="[0-9]"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  onChange={(e) => handleInput(e, index)}
                  required
                />
              ))}
            </div>
            <div className="flex items-center justify-center">
              <Link to="/auth/resetPassword/setNewPassword">
                <button
                      className="w-full py-3 px-4 bg-blue-800 text-white rounded-md hover:bg-blue-600 transition duration-300"
                      type="button"
                >
                  Verify
                </button>
              </Link>
              <button
                className="inline-block align-baseline font-bold text-sm text-black-100  hover:text-indigo-600 ml-4 transition-colors"
                type="button"
                onClick={handleResendOTP}
                disabled={timer > 0} // Disable button if countdown is active
              >
                {timer > 0 ? `Resend OTP (${timer}s)` : "Resend OTP"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
