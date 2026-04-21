import GoogleSignInButton from '../components/GoogleSignInButton'

export default function Login() {
  return (
    <main className="flex items-center justify-center flex-1 p-12">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Sign in</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Sign in with Google to access your Kafe account.</p>
        <div className="mt-5">
          <GoogleSignInButton />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">Only Google sign-in is supported.</p>
      </div>
    </main>
  )
}
