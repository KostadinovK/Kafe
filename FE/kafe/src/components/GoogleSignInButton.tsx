type Props = {
  redirectUrl?: string
}

export default function GoogleSignInButton({ redirectUrl = '/auth/google' }: Props) {
  function handleClick() {
    // Redirect to backend route handling OAuth exchange
    window.location.href = redirectUrl
  }

  return (
    <button onClick={handleClick} className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border bg-white hover:shadow-md font-semibold">
      <span aria-hidden className="inline-flex items-center">
        <svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M44.5 20H24v8.5h11.9C34.7 33.5 30 37 24 37c-7 0-12.7-5.7-12.7-12.7S17 11.5 24 11.5c3.5 0 6.1 1.3 8.1 3.1l6-5.8C35.6 6.2 30.2 3.5 24 3.5 12.3 3.5 3 12.8 3 24.5S12.3 45.5 24 45.5c11.7 0 21.5-9.4 21.5-21.5 0-1.4-.2-2-.9-3z" fill="#EA4335"/>
        </svg>
      </span>
      <span>Continue with Google</span>
    </button>
  )
}
