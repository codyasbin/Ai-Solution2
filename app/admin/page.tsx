'use client';

import { useEffect, useState } from 'react';
import { useAuth, RedirectToSignIn, SignOutButton } from '@clerk/nextjs'; // Import Clerk hooks
import { motion } from 'framer-motion'; // For animations
import { Pie } from 'react-chartjs-2'; // For Pie Chart
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'; // For Chart.js

ChartJS.register(ArcElement, Tooltip, Legend); // Register chart components

// Type definition for the Contact data
interface Contact {
  _id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  country: string;
  jobTitle: string;
  jobDetails: string;
}

interface Stats {
  totalContacts: number;
  countryStats: any;
  jobTitleStats: any;
}

const AdminDashboard = () => {
  const { isSignedIn, isLoaded } = useAuth(); // Use Clerk's useAuth hook
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [stats, setStats] = useState<Stats | null>(null); // To hold statistics data

  // Function to fetch contacts from the API
  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/admin/contacts');
      const data = await response.json();
      if (response.ok) {
        setContacts(data);
        analyzeData(data); // Analyze the data when contacts are fetched
      } else {
        console.error('Failed to fetch contacts:', data.error);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

   // Function to delete a contact
   const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this contact?');
    if (!confirmDelete) return;

    const response = await fetch(`/api/admin/delete?id=${id}`, { method: 'DELETE' });
    const result = await response.json();

    if (response.ok) {
      alert('Contact deleted successfully');
      fetchContacts(); // Reload the data after deleting the contact
    } else {
      alert(result.error || 'Error deleting contact');
    }
  };

  
  

  // Function to analyze and create statistics from the data
  const analyzeData = (data: Contact[]) => {
    const countryStats: Record<string, number> = {};
    const jobTitleStats: Record<string, number> = {};

    data.forEach((contact) => {
      countryStats[contact.country] = (countryStats[contact.country] || 0) + 1;
      jobTitleStats[contact.jobTitle] = (jobTitleStats[contact.jobTitle] || 0) + 1;
    });

    // Pie chart data for country stats
    const countryData = {
      labels: Object.keys(countryStats),
      datasets: [
        {
          data: Object.values(countryStats),
          backgroundColor: ['#A3A9FC', '#88D0F7', '#F4A261', '#2EC4B6'],
        },
      ],
    };

    setStats({
      totalContacts: data.length,
      countryStats: countryData,
      jobTitleStats: jobTitleStats,
    });
  };

  // Fetch the contacts when the component mounts
  useEffect(() => {
    fetchContacts();
  }, []);

  // If Clerk is still loading, show a loading message
  if (!isLoaded) return <div>Loading...</div>;

  // If the user is not authenticated, redirect to sign-in page
  if (!isSignedIn) return <RedirectToSignIn />;

  // If data is still loading, show a loading message
  if (loading) return <div>Loading contacts...</div>;

  // Extract username from email (before the "@"), only if user is available
  const username =  'Jharna Kunwar';

  return (
    
    <motion.div
      className="max-w-7xl mx-auto py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl font-bold mb-4 text-center">Admin Dashboard</h1>

      {/* Display Welcome Message with User's Username */}
      <div className="text-center mb-8">
        <h2 className="text-xl">Welcome, {username}!</h2>
      </div>

      {/* Logout Button */}
      <div className="mb-4 flex justify-center">
        <SignOutButton className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700">
          Sign Out
        </SignOutButton>
      </div>


      {/* Contacts Table */}
      <div className="overflow-x-auto mt-20 shadow-lg rounded-lg bg-white">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Phone</th>
              <th scope="col" className="px-6 py-3">Company</th>
              <th scope="col" className="px-6 py-3">Country</th>
              <th scope="col" className="px-6 py-3">Job Title</th>
              <th scope="col" className="px-6 py-3">Job Details</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <motion.tr
                key={contact._id}
                className="border-b bg-white hover:bg-gray-50 transition duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <td className="px-6 py-4">{contact.name}</td>
                <td className="px-6 py-4">{contact.email}</td>
                <td className="px-6 py-4">{contact.phone}</td>
                <td className="px-6 py-4">{contact.company}</td>
                <td className="px-6 py-4">{contact.country}</td>
                <td className="px-6 py-4">{contact.jobTitle}</td>
                <td className="px-6 py-4">{contact.jobDetails}</td>
                <td className="px-6 py-4">
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDelete(contact._id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Stats Section */}
      <div className="grid mt-20 grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Total Contacts */}
        <div className="bg-purple-700 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Total Contacts</h3>
          <p className="text-xl mt-4">{stats ? stats.totalContacts : 0}</p>
        </div>

        {/* Country Stats Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Contacts by Country</h3>
          {stats?.countryStats ? (
            <Pie data={stats.countryStats} />
          ) : (
            <p className="text-center mt-4">No data available</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
