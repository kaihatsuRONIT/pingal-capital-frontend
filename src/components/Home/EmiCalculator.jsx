"use client";
import { useState, useMemo } from "react";
import AnimateOnScroll from "../AnimateOnScroll";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { useRouter } from "next/navigation";

const sliderStyle = `
  .emi-slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 3px;
    border-radius: 9999px;
    background: #0B2E6F;
    outline: none;
    cursor: pointer;
  }
  .emi-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #0B2E6F;
    border: 3px solid #fff;
    box-shadow: 0px 8px 10px -6px #003EC733, 0px 20px 25px -5px #003EC733;
    cursor: pointer;
  }
  .emi-slider::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #0B2E6F;
    border: 3px solid #fff;
    box-shadow: 0px 8px 10px -6px #003EC733, 0px 20px 25px -5px #003EC733;
    cursor: pointer;
  }
  .amort-table {
    width: 100%;
    border-collapse: collapse;
    font-family: Inter, sans-serif;
    font-size: 13px;
  }
  .amort-table th {
    background: #f8fafc;
    color: #0B2E6F;
    font-weight: 600;
    padding: 10px 12px;
    text-align: left;
    border-bottom: 2px solid #e2e8f0;
    position: sticky;
    top: 0;
    z-index: 1;
  }
  .amort-table td {
    padding: 9px 12px;
    border-bottom: 1px solid #f1f5f9;
    color: #374151;
  }
  .amort-table tr:hover td {
    background: #f8fafc;
  }
  .amort-scroll {
    max-height: 280px;
    overflow-y: auto;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
  }
  .amort-scroll::-webkit-scrollbar {
    width: 4px;
  }
  .amort-scroll::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 99px;
  }
`;

function formatINR(value) {
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(0)}L`;
  if (value >= 1000) return `₹${(value / 1000).toFixed(0)}k`;
  return `₹${value}`;
}

function formatINRFull(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(value);
}

export default function EMICalculator() {
  const [frequency, setFrequency] = useState('monthly');
  const [principal, setPrincipal] = useState(5000000);
  const [duration, setDuration] = useState(30);
  const [interestRate, setInterestRate] = useState(4.5);
  const [activeTab, setActiveTab] = useState("table"); // 'chart' | 'table'

  const frequencyConfig = {
    monthly: { label: 'Monthly', periodsPerYear: 12 },
  };

  const { emi, totalInterest, totalCommitment, schedule } = useMemo(() => {
    const { periodsPerYear } = frequencyConfig[frequency];
    const r = interestRate / 100 / periodsPerYear;
    const n = duration * periodsPerYear;
    let emi, totalInterest, totalCommitment;

    if (r === 0) {
      emi = principal / n;
      totalInterest = 0;
      totalCommitment = principal;
    } else {
      emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      totalCommitment = emi * n;
      totalInterest = totalCommitment - principal;
    }

    const schedule = [];
    let balance = principal;
    for (let i = 1; i <= n; i++) {
      const interest = balance * r;
      const principalPaid = emi - interest;
      balance -= principalPaid;
      schedule.push({ period: i, payment: emi, interest, balance: Math.max(0, balance) });
    }

    return { emi, totalInterest, totalCommitment, schedule };
  }, [principal, duration, interestRate, frequency]);

  // Build chart data from schedule (sample every N periods to keep it light)
  const chartData = useMemo(() => {
    const step = Math.max(1, Math.floor(schedule.length / 80));
    return schedule
      .filter((_, i) => i % step === 0)
      .map((row) => ({
        period: row.period,
        interest: parseFloat(row.interest.toFixed(2)),
        principal: parseFloat((row.payment - row.interest).toFixed(2)),
      }));
  }, [schedule]);

  const formatYAxis = (value) => {
    if (value >= 100000) return `₹${(value / 100000).toFixed(0)}L`;
    if (value >= 1000) return `₹${(value / 1000).toFixed(0)}k`;
    return `₹${value}`;
  };
  const router = useRouter()
  return (
    <section id="emi-calculator" className="bg-white pb-20 px-6">
      <style>{sliderStyle}</style>
      <div className="max-w-5xl mx-auto">
        <div
          className="rounded-3xl p-8 lg:p-12"
          style={{
            background: "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)",
            boxShadow: "0px 8px 10px -6px #003EC733, 0px 20px 25px -5px #003EC733",
          }}
        >
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Left — Sliders */}
            <div className="flex-1">
              <AnimateOnScroll direction="right" delay={0.1}>
                <h2
                  className="font-inter mb-2"
                  style={{
                    fontSize: "clamp(28px, 4vw, 64px)",
                    fontWeight: 500,
                    lineHeight: "1.15",
                    color: "#0B2E6F",
                  }}
                >
                  EMI Calculator
                </h2>
                <p
                  className="font-inter text-gray-400 mb-10"
                  style={{ fontSize: "14px", lineHeight: "22px" }}
                >
                  Model your investment with precision sliders.
                </p>
              </AnimateOnScroll>

              {/* Investment Principal */}
              <div className="mb-8">
                <div className="flex justify-between items-end mb-2">
                  <AnimateOnScroll direction="right" delay={0.1}>
                    <span className="font-inter font-semibold text-gray-700" style={{ fontSize: "14px" }}>
                      Investment Principal
                    </span>
                  </AnimateOnScroll>
                  <div className="text-right">
                    <AnimateOnScroll direction="right" delay={0.1}>
                      <div className="font-inter uppercase tracking-widest" style={{ fontSize: "10px", color: "#434656" }}>
                        Amount (₹)
                      </div>
                      <div className="font-inter font-bold" style={{ fontSize: "24px", color: "#0B2E6F" }}>
                        {new Intl.NumberFormat("en-IN").format(principal)}
                      </div>
                    </AnimateOnScroll>
                  </div>
                </div>
                <input
                  type="range"
                  className="emi-slider"
                  min={1000000}
                  max={100000000}
                  step={100000}
                  value={principal}
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                />
                <div className="flex justify-between font-inter mt-1" style={{ fontSize: "11px", color: "#434656" }}>
                  <span>₹10L</span>
                  <span>₹10Cr</span>
                </div>
              </div>

              {/* Amortization Period */}
              <div className="mb-8">
                <div className="flex justify-between items-end mb-2">
                  <AnimateOnScroll direction="right" delay={0.1}>
                    <span className="font-inter font-semibold text-gray-700" style={{ fontSize: "14px" }}>
                      Amortization Period
                    </span>
                  </AnimateOnScroll>
                  <div className="text-right">
                    <AnimateOnScroll direction="right" delay={0.1}>
                      <div className="font-inter uppercase tracking-widest" style={{ fontSize: "10px", color: "#434656" }}>
                        Duration
                      </div>
                      <div className="font-inter font-bold" style={{ fontSize: "24px", color: "#0B2E6F" }}>
                        {duration} <span style={{ fontSize: "16px", fontWeight: 500 }}>Years</span>
                      </div>
                    </AnimateOnScroll>
                  </div>
                </div>
                <input
                  type="range"
                  className="emi-slider"
                  min={5}
                  max={30}
                  step={1}
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                />
                <div className="flex justify-between font-inter mt-1" style={{ fontSize: "11px", color: "#434656" }}>
                  <span>5 yrs</span>
                  <span>30 yrs</span>
                </div>
              </div>

              {/* Repayment Frequency */}
              <div className="mb-8">
                <div className="flex justify-between items-end mb-2">
                  <span className="font-inter font-semibold text-gray-700" style={{ fontSize: "14px" }}>
                    Repayment Frequency
                  </span>
                  <div className="text-right">
                    {/* <div className="font-inter uppercase tracking-widest" style={{ fontSize: "10px", color: "#434656" }}>
                      Selected
                    </div>
                    <div className="font-inter font-bold" style={{ fontSize: "24px", color: "#0B2E6F" }}>
                      {frequencyConfig[frequency].label}
                    </div> */}
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap mt-2">
                  {Object.entries(frequencyConfig).map(([key, { label }]) => (
                    <button
                      key={key}
                      onClick={() => setFrequency(key)}
                      className="font-inter px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                      style={{
                        background: frequency === key ? '#0B2E6F' : '#f1f5f9',
                        color: frequency === key ? '#fff' : '#64748b',
                        border: frequency === key ? '2px solid #0B2E6F' : '2px solid transparent',
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interest Rate */}
              <div className="mb-2">
                <div className="flex justify-between items-end mb-2">
                  <AnimateOnScroll direction="right" delay={0.1}>
                    <span className="font-inter font-semibold text-gray-700" style={{ fontSize: "14px" }}>
                      Interest Rate
                    </span>
                  </AnimateOnScroll>
                  <div className="text-right">
                    <AnimateOnScroll direction="right" delay={0.1}>
                      <div className="font-inter uppercase tracking-widest" style={{ fontSize: "10px", color: "#434656" }}>
                        Percentage (%)
                      </div>
                      <div className="font-inter font-bold" style={{ fontSize: "24px", color: "#0B2E6F" }}>
                        {interestRate.toFixed(1)} <span style={{ fontSize: "16px", fontWeight: 500 }}>%</span>
                      </div>
                    </AnimateOnScroll>
                  </div>
                </div>
                <input
                  type="range"
                  className="emi-slider"
                  min={1}
                  max={15}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                />
                <div className="flex justify-between font-inter mt-1" style={{ fontSize: "11px", color: "#434656" }}>
                  <span>1%</span>
                  <span>15%</span>
                </div>
              </div>
            </div>

            {/* Right — Result Card + Table */}
            <div className="w-full lg:w-[380px] flex-shrink-0 flex flex-col gap-4">

              {/* Result Card */}
              <div
                className="rounded-2xl p-7 flex flex-col gap-0"
                style={{ background: "#0B2E6F" }}
              >
                <AnimateOnScroll direction="left" delay={0.1}>
                  <div>
                    {/* EMI */}
                    <div className="mb-6">
                      <p className="font-inter uppercase tracking-widest text-blue-300 mb-2"
                        style={{ fontSize: "10px", fontWeight: 600 }}>
                        Estimated {frequencyConfig[frequency].label} Payment  {/* ← was "Monthly" */}
                      </p>
                      <div
                        className="font-inter text-white font-bold"
                        style={{ fontSize: "36px", lineHeight: "44px" }}
                      >
                        {formatINRFull(emi)}
                      </div>
                    </div>

                    <hr style={{ borderColor: "rgba(255,255,255,0.15)", marginBottom: "20px" }} />

                    {/* Principal + Interest */}
                    <div className="flex gap-6 mb-6">
                      <div>
                        <p className="font-inter uppercase tracking-widest text-blue-300 mb-1" style={{ fontSize: "9px", fontWeight: 600 }}>
                          Principal
                        </p>
                        <p className="font-inter text-white font-bold" style={{ fontSize: "20px", lineHeight: "28px" }}>
                          {formatINR(principal)}
                        </p>
                      </div>
                      <div>
                        <p className="font-inter uppercase tracking-widest text-blue-300 mb-1" style={{ fontSize: "9px", fontWeight: 600 }}>
                          Interest
                        </p>
                        <p className="font-inter text-white font-bold" style={{ fontSize: "20px", lineHeight: "28px" }}>
                          {formatINR(totalInterest)}
                        </p>
                      </div>
                    </div>

                    <hr style={{ borderColor: "rgba(255,255,255,0.15)", marginBottom: "20px" }} />

                    {/* Total Commitment */}
                    <div className="mb-6">
                      <p className="font-inter uppercase tracking-widest text-blue-300 mb-1" style={{ fontSize: "9px", fontWeight: 600 }}>
                        Total Commitment
                      </p>
                      <p className="font-inter text-white font-bold" style={{ fontSize: "24px", lineHeight: "32px" }}>
                        {formatINRFull(totalCommitment)}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll direction="up" delay={0.1}>
                  <button
                    className="font-inter w-full py-3 rounded-xl font-semibold transition-opacity hover:opacity-90 cursor-pointer"
                    style={{ background: "#fff", color: "#0B2E6F", fontSize: "14px", fontWeight: 600 }}
                    onClick={()=> router.push("/contact")}
                  >
                    Apply for Pre-Approval
                  </button>
                </AnimateOnScroll>
              </div>

              {/* Amortization Table */}
              <div>
                {/* Tab Toggle */}
                <div
                  className="flex flex-wrap rounded-full p-1 mb-3"
                  style={{ background: "#f1f5f9", width: "fit-content", maxWidth: "100%" }}
                >
                  <button
                    onClick={() => setActiveTab("chart")}
                    className="font-inter font-semibold px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm transition-all"
                    style={{
                      background: activeTab === "chart" ? "#0B2E6F" : "transparent",
                      color: activeTab === "chart" ? "#fff" : "#64748b",
                    }}
                  >
                    Repayment Chart
                  </button>
                  <button
                    onClick={() => setActiveTab("table")}
                    className="font-inter font-semibold px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm transition-all"
                    style={{
                      background: activeTab === "table" ? "#0B2E6F" : "transparent",
                      color: activeTab === "table" ? "#fff" : "#64748b",
                    }}
                  >
                    Loan Amortization Table
                  </button>
                </div>

                {activeTab === "table" && (
                  <div className="amort-scroll">
                    <table className="amort-table">
                      <thead>
                        <tr>
                          <th>Period</th>
                          <th>Payment</th>
                          <th>Interest</th>
                          <th>Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {schedule.map((row) => (
                          <tr key={row.period}>
                            <td>{row.period}</td>
                            <td style={{ color: "#dc2626" }}>-{formatINRFull(row.payment)}</td>
                            <td>{formatINRFull(row.interest)}</td>
                            <td>{formatINRFull(row.balance)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === "chart" && (
                  <div style={{ width: '100%', height: 280 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={chartData}
                        margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient id="colorInterest" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#1e3a5f" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#1e3a5f" stopOpacity={0.6} />
                          </linearGradient>
                          <linearGradient id="colorPrincipal" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#bfdbfe" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#bfdbfe" stopOpacity={0.3} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis
                          dataKey="period"
                          tick={{ fontSize: 10, fill: '#94a3b8' }}
                          tickLine={false}
                          axisLine={false}
                        />
                        <YAxis
                          tickFormatter={formatYAxis}
                          tick={{ fontSize: 10, fill: '#94a3b8' }}
                          tickLine={false}
                          axisLine={false}
                          width={45}
                        />
                        <Tooltip
                          formatter={(value, name) => [formatINRFull(value), name === 'interest' ? 'Interest' : 'Principal']}
                          labelFormatter={(label) => `Period ${label}`}
                          contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e2e8f0' }}
                        />
                        <Legend
                          formatter={(value) => value === 'interest' ? 'Interest' : 'Principal'}
                          iconType="square"
                          wrapperStyle={{ fontSize: 12, paddingBottom: 4 }}
                        />
                        <Area
                          type="monotone"
                          dataKey="interest"
                          stackId="1"
                          stroke="#1e3a5f"
                          strokeWidth={1.5}
                          fill="url(#colorInterest)"
                        />
                        <Area
                          type="monotone"
                          dataKey="principal"
                          stackId="1"
                          stroke="#93c5fd"
                          strokeWidth={1.5}
                          fill="url(#colorPrincipal)"
                          strokeDasharray="3 2"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}