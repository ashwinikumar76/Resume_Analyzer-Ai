import { ArrowLeft } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import {
  BarChart3,
  CheckCircle,
  AlertCircle,
  Sparkles
} from 'lucide-react';



function Analysis({ analysisData, onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden font-inter">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(16, 185, 129, 0.15) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}></div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Back button */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-all duration-300 mb-8 hover:translate-x-[-4px]">
          <ArrowLeft
            size={20}
            className="group-hover:scale-110 transition-transform"
          />
          <span className="font-medium">Back to Upload</span>
        </button>

        {/* Analysis Results */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative">
          {/* Header */}
          <div className="relative text-center py-12 px-8 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-teal-500/10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 rounded-2xl mb-6 shadow-lg shadow-emerald-500/25">
              <BarChart3 className="text-white" size={32} />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              Resume Analysis Results
            </h1>
            <p className="text-slate-300 text-lg max-w-md mx-auto leading-relaxed">
              Here's your comprehensive resume analysis and recommendations
            </p>
          </div>

          <div className="p-8">
            {/* Score Card */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-6 mb-8 border border-emerald-500/20">
              <div className="text-center">
                <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text mb-2">
                  {analysisData?.score || 0}%
                </div>
                <p className="text-slate-300 text-lg">Overall Match Score</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-white text-lg font-semibold mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-slate-400">Email: </span>
                    <span className="text-emerald-400">
                      {analysisData?.email || "Not found"}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400">Phone: </span>
                    <span className="text-emerald-400">
                      {analysisData?.phone || "Not found"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-white text-lg font-semibold mb-4">
                  Quick Stats
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-slate-400">Strengths: </span>
                    <span className="text-cyan-400">
                      {analysisData?.feedback?.strengths?.length || 0}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400">Areas to Improve: </span>
                    <span className="text-yellow-400">
                      {analysisData?.feedback?.weaknesses?.length || 0}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feedback Sections */}
            {analysisData?.feedback && (
              <div className="space-y-6">
                {/* Strengths */}
                {analysisData.feedback.strengths?.length > 0 && (
                  <div className="bg-emerald-500/10 rounded-2xl p-6 border border-emerald-500/20">
                    <h3 className="text-emerald-400 text-lg font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle size={20} />
                      Strengths
                    </h3>
                    <ul className="space-y-2">
                      {analysisData.feedback.strengths.map(
                        (strength, index) => (
                          <li
                            key={index}
                            className="text-slate-300 flex items-start gap-2">
                            <span className="text-emerald-400 mt-1">•</span>
                            {strength}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {/* Weaknesses */}
                {analysisData.feedback.weaknesses?.length > 0 && (
                  <div className="bg-yellow-500/10 rounded-2xl p-6 border border-yellow-500/20">
                    <h3 className="text-yellow-400 text-lg font-semibold mb-4 flex items-center gap-2">
                      <AlertCircle size={20} />
                      Areas for Improvement
                    </h3>
                    <ul className="space-y-2">
                      {analysisData.feedback.weaknesses.map(
                        (weakness, index) => (
                          <li
                            key={index}
                            className="text-slate-300 flex items-start gap-2">
                            <span className="text-yellow-400 mt-1">•</span>
                            {weakness}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {/* Improvement Tips */}
                {analysisData.feedback.improvement_tips?.length > 0 && (
                  <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-500/20">
                    <h3 className="text-cyan-400 text-lg font-semibold mb-4 flex items-center gap-2">
                      <Sparkles size={20} />
                      Improvement Tips
                    </h3>
                    <ul className="space-y-2">
                      {analysisData.feedback.improvement_tips.map(
                        (tip, index) => (
                          <li
                            key={index}
                            className="text-slate-300 flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            {tip}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={onBack}
                className="flex-1 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02]">
                Upload Another Resume
              </button>
              <button
                onClick={() => window.print()}
                className="flex-1 bg-gradient-to-r from-emerald-600 via-cyan-600 to-teal-600 hover:from-emerald-700 hover:via-cyan-700 hover:to-teal-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02]">
                Save Results
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

        .font-inter {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
export default Analysis;
