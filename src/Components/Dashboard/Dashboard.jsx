import React, { useEffect, useState } from "react";
import {
  Users,
  GraduationCap,
  BookOpen,
  Bell,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Calendar,
  UserPlus,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useUserContext } from "./UserContext";

function Dashboard() {
  const { userProfile } = useUserContext();
  const [isAlertShown, setIsAlertShown] = useState(false);

  useEffect(() => {
    // Check if welcome alert has already been shown
    const hasAlerted = localStorage.getItem("welcomeAlertShown");
    if (!hasAlerted) {
      alert(`Welcome, ${userProfile.fullName}!`);
      localStorage.setItem("welcomeAlertShown", "true"); // Set flag in localStorage
      setIsAlertShown(true);
    }
  }, [userProfile.fullName]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 min-h-screen">


      {/* Notifications Section */}
      <div className="mb-8 bg-white rounded-xl p-4 shadow-lg border border-blue-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">Active Notifications</h2>
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
            5 new
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              icon: UserPlus,
              title: "New Registration",
              desc: "Anita Sharma registered for Python Course",
              time: "10 mins ago",
              color: "text-green-600 bg-green-100",
            },
            {
              icon: Clock,
              title: "Running Class",
              desc: "React Advanced - Room 201",
              time: "Ongoing",
              color: "text-blue-600 bg-blue-100",
            },
            {
              icon: AlertCircle,
              title: "Task Due",
              desc: "JavaScript Assessment submission",
              time: "Due in 2 hours",
              color: "text-red-600 bg-red-100",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`p-2 rounded-lg ${item.color}`}>
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
                <span className="text-xs text-gray-400 mt-1 block">
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { icon: Users, label: "Total Students", value: "100", trend: "+12%", color: "bg-blue-500" },
          { icon: GraduationCap, label: "Active Trainers", value: "8", trend: "+3", color: "bg-green-500" },
          { icon: BookOpen, label: "Active Courses", value: "15", trend: "+2", color: "bg-purple-500" },
          {
            icon: () => (
              <Link to="internshipForm">
                <button className="text-black px-0.5 hover:bg-blue-500 transition">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-md">Rs</span>
                  </div>
                </button>
              </Link>
            ),
            label: "Monthly Revenue",
            value: "Rs.100000",
            trend: "+15%",
            color: "bg-yellow-500",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} bg-opacity-10 p-3 rounded-lg`}>
                <stat.icon className={`h-6 w-6 ${stat.color.replace("bg-", "text-")}`} />
              </div>
              <div className="flex items-center gap-1 text-green-600 text-sm">
                <TrendingUp className="h-4 w-4" />
                {stat.trend}
              </div>
            </div>
            <h3 className="text-gray-500 text-sm mb-1">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Payments */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <span className="font-bold text-lg">Rs</span>
              Recent Payments
            </h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 text-left text-gray-600 font-medium">Student</th>
                  <th className="py-3 text-left text-gray-600 font-medium">Course</th>
                  <th className="py-3 text-left text-gray-600 font-medium">Amount</th>
                  <th className="py-3 text-left text-gray-600 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Ram Rai", course: "React Advanced", amount: "Rs.5,000", status: "Paid" },
                  { name: "Sita Rai", course: "Python Basics", amount: "Rs.8,000", status: "Pending" },
                  { name: "Hari Kumar", course: "UI/UX Design", amount: "Rs.12,000", status: "Paid" },
                ].map((payment, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 text-gray-800">{payment.name}</td>
                    <td className="py-3 text-gray-600">{payment.course}</td>
                    <td className="py-3 text-gray-800 font-medium">{payment.amount}</td>
                    <td className="py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${payment.status === "Paid"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                          }`}
                      >
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upcoming Classes */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-blue-600" />
              Today's Classes
            </h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View Schedule
            </button>
          </div>
          <div className="space-y-4">
            {[
              {
                course: "React Advanced",
                time: "09:00 AM - 11:00 AM",
                trainer: "Ram Magar",
                room: "201",
                status: "In Progress",
              },
              {
                course: "Python for Beginners",
                time: "11:30 AM - 01:30 PM",
                trainer: "Ram Thapa",
                room: "302",
                status: "Upcoming",
              },
              {
                course: "Web Development",
                time: "02:00 PM - 04:00 PM",
                trainer: "Ram Katwal",
                room: "103",
                status: "Upcoming",
              },
            ].map((class_, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{class_.course}</h4>
                    <p className="text-sm text-gray-600">{class_.trainer}</p>
                    <span className="text-xs text-gray-400">Room {class_.room}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-600">{class_.time}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${class_.status === "In Progress"
                        ? "bg-green-100 text-green-600"
                        : "bg-blue-100 text-blue-600"
                      }`}
                  >
                    {class_.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
