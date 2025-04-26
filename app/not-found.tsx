import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-700 mb-8">The page you're looking for doesn't exist.</p>
        <Link 
          href="/" 
          className="text-purple-600 hover:text-purple-700 underline"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
} 