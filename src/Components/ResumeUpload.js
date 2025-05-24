import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, FileText, CheckCircle, AlertCircle, ArrowLeft, Zap, Shield, BarChart3, Sparkles } from "lucide-react";

export default function ResumeUpload() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setMessage("");
    setUploadSuccess(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
      setMessage("");
      setUploadSuccess(false);
    } else {
      setMessage("Please drop a PDF file only.");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a PDF file first.");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:8081/api/resume/process", {
        method: "POST",
        body: formData,
      });

      const text = await res.text();
      if (res.ok) {
        setUploadSuccess(true);
        setMessage("Resume uploaded successfully! Processing your resume...\n\n" + text);
      } else {
        setMessage("Upload failed. Please try again.\n\n" + text);
      }
    } catch (error) {
      setMessage("Network error. Please check your connection and try again.\n\nError: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden font-inter">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-2xl">
        {/* Back button */}
        <button
          onClick={goBack}
          className="group flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-all duration-300 mb-8 hover:translate-x-[-4px]"
        >
          <ArrowLeft size={20} className="group-hover:scale-110 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </button>

        {/* Main card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative">
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-teal-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
          
          {/* Header */}
          <div className="relative text-center py-12 px-8 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-teal-500/10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 rounded-2xl mb-6 animate-pulse shadow-lg shadow-emerald-500/25">
              <Sparkles className="text-white" size={32} />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-emerald-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              AI Resume Analyzer
            </h1>
            <p className="text-slate-300 text-lg max-w-md mx-auto leading-relaxed">
              Get instant AI-powered insights and boost your career prospects with professional feedback
            </p>
          </div>

          <div className="p-8">
            {/* Upload zone */}
            <div
              className={`
                relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 mb-8 group
                ${isDragging 
                  ? 'border-emerald-400 bg-emerald-400/5 scale-105 shadow-lg shadow-emerald-500/25' 
                  : file 
                    ? 'border-emerald-400 bg-emerald-400/5 shadow-lg shadow-emerald-500/20' 
                    : 'border-slate-600 hover:border-cyan-400 hover:bg-cyan-400/5 hover:shadow-lg hover:shadow-cyan-500/20'
                }
              `}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              
              <div className="pointer-events-none">
                {file ? (
                  <div className="animate-fadeIn">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-4 shadow-lg shadow-emerald-500/30">
                      <FileText className="text-white" size={32} />
                    </div>
                    <p className="text-emerald-400 text-lg font-semibold mb-2">{file.name}</p>
                    <p className="text-slate-400">
                      {(file.size / 1024 / 1024).toFixed(2)} MB • Ready to analyze
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl mb-4 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-teal-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/30">
                      <Upload className="text-slate-300 group-hover:text-white transition-colors" size={32} />
                    </div>
                    <p className="text-white text-lg font-semibold mb-2">
                      Drop your resume here or click to browse
                    </p>
                    <p className="text-slate-400">
                      PDF files only • Maximum 10MB
                    </p>
                  </div>
                )}
              </div>

              {/* Animated border effect */}
              {isDragging && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-teal-500/20 animate-pulse"></div>
              )}
            </div>

            {/* Upload button */}
            <button
              onClick={() => navigate("/Analysis")}
              disabled={!file || isLoading}
              className="w-full bg-gradient-to-r from-emerald-600 via-cyan-600 to-teal-600 hover:from-emerald-700 hover:via-cyan-700 hover:to-teal-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl disabled:shadow-none mb-6 relative overflow-hidden group"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-cyan-600 to-teal-600 opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-xl"></div>
              
              <span className="relative flex items-center justify-center gap-3 text-lg">
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Processing Resume...
                  </>
                  
                ) : (
                  <>
                    <Zap size={20} />
                    Analyze Resume
                  </>
                )}
              </span>
            </button>

            {/* Message display
            {message && (
              <div className={`rounded-2xl p-6 mb-6 border backdrop-blur-sm transition-all duration-300 animate-fadeIn ${
                uploadSuccess 
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 shadow-lg shadow-emerald-500/20' 
                  : 'bg-red-500/10 border-red-500/30 text-red-300 shadow-lg shadow-red-500/20'
              }`}>
                <div className="flex items-start gap-3">
                  {uploadSuccess ? (
                    <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-emerald-400" />
                  ) : (
                    <AlertCircle size={20} className="mt-0.5 flex-shrink-0 text-red-400" />
                  )}
                  <pre className="whitespace-pre-wrap text-sm leading-relaxed font-mono">
                    {message}
                  </pre>
                </div>
              </div>
            )}

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 py-8 border-t border-white/10">
              <div className="text-center group cursor-pointer">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl mb-3 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/30">
                  <Zap className="text-emerald-400" size={24} />
                </div>
                <p className="text-white font-medium mb-1">Instant Analysis</p>
                <p className="text-slate-400 text-sm">AI-powered insights</p>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl mb-3 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/30">
                  <BarChart3 className="text-cyan-400" size={24} />
                </div>
                <p className="text-white font-medium mb-1">Detailed Scoring</p>
                <p className="text-slate-400 text-sm">Comprehensive metrics</p>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-xl mb-3 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teal-500/30">
                  <Shield className="text-teal-400" size={24} />
                </div>
                <p className="text-white font-medium mb-1">100% Secure</p>
                <p className="text-slate-400 text-sm">Privacy protected</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-10 w-2 h-2 bg-emerald-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.3s'}}></div>
        <div className="absolute bottom-32 left-10 w-1 h-1 bg-cyan-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute top-1/3 right-20 w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        .font-inter {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}