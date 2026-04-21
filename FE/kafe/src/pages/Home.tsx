import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="flex-1 p-12">
      <section className="max-w-3xl mx-auto text-left">
        <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">Welcome to Kafè</h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">Track your coffee intake, rate brews, and discover favorites. Kafè is a simple, focused app that helps coffee lovers log and analyze their daily cups.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-5 rounded-lg shadow bg-white dark:bg-gray-800">
            <h2 className="text-lg font-medium">Quick Logs</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Record each cup with notes about roast, brew method, and rating.</p>
          </div>
          <div className="p-5 rounded-lg shadow bg-white dark:bg-gray-800">
            <h2 className="text-lg font-medium">Insights</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">See trends over time: how much you drink and which beans you prefer.</p>
          </div>
          <div className="p-5 rounded-lg shadow bg-white dark:bg-gray-800">
            <h2 className="text-lg font-medium">Share</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Share your favorite entries with friends and collaborators.</p>
          </div>
        </div>

        <div className="mt-8">
          <Link to="/login"><button className="px-4 py-2 rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-700">Sign in with Google</button></Link>
        </div>
      </section>
    </main>
  )
}
