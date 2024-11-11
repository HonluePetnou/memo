import { useState } from 'react'
import { LuUpload } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dateOfBirth: '',
    sex: '',
    justification: null,
    userType: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showPinModal, setShowPinModal] = useState(false)
  const [pin, setPin] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e, field) => {
    const file = e.target.files[0]
    setFormData(prev => ({ ...prev, [field]: file }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (formData.userType === 'librarian') {
      setShowPinModal(true)
      return
    }
    
    submitForm()
  }

  const submitForm = async (pinCode = null) => {
    setIsLoading(true)
    setError(null)

    try {
      // Here you would typically make an API call to your backend
      // Include the PIN if it was provided
      await new Promise(resolve => setTimeout(resolve, 1500))
      navigate('/dashboard')
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handlePinSubmit = (e) => {
    e.preventDefault()
    setShowPinModal(false)
    submitForm(pin)
    setPin('')
  }

  const inputClassName = "mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 pl-3 text-gray-900 placeholder-gray-400"

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mb-0 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    required
                    placeholder="Select your date of birth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Sex
                  </label>
                  <select
                    name="sex"
                    required
                    value={formData.sex}
                    onChange={handleChange}
                    className={inputClassName}
                  >
                    <option value="">Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    User Type
                  </label>
                  <select
                    name="userType"
                    required
                    value={formData.userType}
                    onChange={handleChange}
                    className={inputClassName}
                  >
                    <option value="">Select your user type</option>
                    <option value="student">Student</option>
                    <option value="lecturer">Lecturer</option>
                    <option value="administration">Administration</option>
                    <option value="librarian">Librarian</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Justification Document
                  </label>
                  <div className="mt-1 flex flex-col items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md h-[250px]">
                    <div className="space-y-4 text-center">
                      <LuUpload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span>Click to upload</span>
                          <input
                            type="file"
                            className="sr-only"
                            onChange={(e) => handleFileChange(e, 'justification')}
                            accept=".pdf,.doc,.docx"
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, DOCX up to 10MB
                      </p>
                      {formData.justification && (
                        <p className="text-sm text-gray-600">
                          Selected: {formData.justification.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                  ${isLoading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Sign up'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* PIN Modal */}
      {showPinModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg px-6 py-4 max-w-sm w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Enter Librarian PIN</h3>
            <form onSubmit={handlePinSubmit}>
              <input
                type="password"
                maxLength="6"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className={`${inputClassName} mb-4`}
                placeholder="Enter 6-digit PIN"
                required
              />
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowPinModal(false)
                    setPin('')
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
