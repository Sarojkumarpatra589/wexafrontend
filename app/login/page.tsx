export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950 text-white">

      <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700"
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-xl font-medium">
            Login
          </button>

        </div>

      </div>

    </main>
  );
}