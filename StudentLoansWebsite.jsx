import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function StudentLoansWebsite() {
  const [amount, setAmount] = useState(5000);
  const [years, setYears] = useState(5);
  const [eligible, setEligible] = useState(null);

  const monthlyRepayment = (amount / (years * 12)).toFixed(2);

  const checkEligibility = () => {
    setEligible(amount <= 20000 ? "Eligible" : "Not Eligible");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Student Loan Solutions
        </h1>
        <p className="text-lg text-blue-700 max-w-2xl mx-auto">
          Affordable, stress-free student loans with <span className="font-semibold text-green-600">0% interest for students</span>.
        </p>
      </motion.div>

      {/* Repayment Calculator */}
      <Card className="max-w-xl mx-auto mb-10 shadow-2xl rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Loan Calculator</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Loan Amount ($)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-2">Repayment Period (years)</label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full border p-2 rounded"
              />
            </div>
            <p className="text-blue-900 font-medium">
              Monthly Payment: <span className="text-green-600 font-bold">${monthlyRepayment}</span> (0% interest!)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Eligibility Checker */}
      <Card className="max-w-xl mx-auto mb-10 shadow-2xl rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Eligibility Checker</h2>
          <Button onClick={checkEligibility}>Check Eligibility</Button>
          {eligible && (
            <p className="mt-4 text-lg font-bold text-green-700">{eligible}</p>
          )}
        </CardContent>
      </Card>

      {/* Loan Application Form */}
      <Card className="max-w-xl mx-auto mb-10 shadow-2xl rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Apply for a Loan</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" />
            <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" />
            <input type="text" placeholder="SSN (Demo Only)" className="w-full border p-2 rounded" />
            <input type="number" placeholder="Requested Loan Amount ($)" className="w-full border p-2 rounded" />
            <Button type="submit" className="w-full">Submit Application</Button>
          </form>
        </CardContent>
      </Card>

      {/* FAQs */}
      <Card className="max-w-3xl mx-auto shadow-2xl rounded-2xl">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-blue-800">FAQs</h2>
          <div>
            <p className="font-medium">Do students really get 0% interest?</p>
            <p className="text-blue-700">Yes! All student borrowers enjoy zero interest loans during their studies.</p>
          </div>
          <div>
            <p className="font-medium">What’s the max loan amount?</p>
            <p className="text-blue-700">Up to $20,000 with affordable monthly payments.</p>
          </div>
          <div>
            <p className="font-medium">Can I repay early?</p>
            <p className="text-blue-700">Yes, without any penalty.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
