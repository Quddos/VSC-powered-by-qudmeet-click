import { db } from '@/lib/db';
import { applications } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { ApplicationFormData } from '@/app/api/applications/route';
import DateDisplay from '@/app/admin/applications/date-display';
import Link from 'next/link';
import PaymentStatus from '@/components/student/PaymentStatus';

// Define the type for application data from the database
type Application = {
  id: string;
  user_id: string;
  status: 'pending' | 'approved' | 'rejected';
  application_data: ApplicationFormData;
  created_at: Date | null;
  updated_at: Date | null;
};

export default async function StudentDashboard() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const userApplications = await db
    .select()
    .from(applications)
    .where(eq(applications.user_id, userId)) as Application[];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl font-bold mb-6">Your Applications</h1>
      {userApplications.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600">You haven't submitted any applications yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {userApplications.map((app) => (
              <div
                key={app.id}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                  <div>
                    <h2 className="font-semibold">Application #{app.id.slice(0, 8)}</h2>
                    <p className="text-sm text-gray-600">
                      Submitted: <DateDisplay date={app.created_at} />
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    app.status === 'approved' ? 'bg-green-100 text-green-800' :
                    app.status === 'rejected' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                  </span>
                </div>
                {app.application_data && (
                  <div className="mt-3 text-sm text-gray-600">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <p>Full Name: {app.application_data.fullName}</p>
                      <p>Email: {app.application_data.email}</p>
                      <p>Phone: {app.application_data.phoneNumber}</p>
                      <p>Country: {app.application_data.country || 'N/A'}</p>
                      <p>Applying For: {app.application_data.countryApplyingFor || 'N/A'}</p>
                      <p>Funding Type: {app.application_data.fundingType || 'N/A'}</p>
                    </div>
                    <div className="mt-2 pt-2 border-t border-gray-200">
                      <Link
                        href={`/student/applications/${app.id}`}
                        className="text-blue-600 hover:text-blue-800 text-xs font-medium"
                      >
                        View Complete Application
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Payment Status Card */}
          <div className="lg:col-span-1">
            {userApplications.length > 0 && (
              <PaymentStatus applicationId={userApplications[0].id} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
