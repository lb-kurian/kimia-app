export default function CheckEmail() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
          <h1 className="text-2xl font-bold mb-4">Check Your Email</h1>
          <p className="mb-4">
            We've sent you an email with a link to confirm your account. Please check your inbox and click the link to complete your registration.
          </p>
          <p className="text-sm text-gray-500">
            If you don't see the email, check your spam folder.
          </p>
        </div>
      </div>
    )
  }
  