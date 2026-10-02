'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, User, LogOut, MessageSquare, Briefcase, ChevronRight, CheckCircle2 } from 'lucide-react';

const API_URL = '/api';

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Dashboard state
  const [activeTab, setActiveTab] = useState<'contacts' | 'internships'>('contacts');
  const [contacts, setContacts] = useState<any[]>([]);
  const [internships, setInternships] = useState<any[]>([]);
  const [dataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    const savedToken = localStorage.getItem('adminToken');
    if (savedToken) {
      setToken(savedToken);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn && token) {
      fetchData();
    }
  }, [isLoggedIn, token, activeTab]);

  const fetchData = async () => {
    setDataLoading(true);
    try {
      const endpoint = activeTab === 'contacts' ? '/contact' : '/internship';
      const response = await fetch(`${API_URL}${endpoint}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        if (activeTab === 'contacts') setContacts(data);
        else setInternships(data);
      } else {
        if (response.status === 401) handleLogout();
      }
    } catch (err) {
      console.error('Failed to fetch data', err);
    } finally {
      setDataLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.trim(), password: password.trim() })
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('adminToken', data.token);
        setToken(data.token);
        setIsLoggedIn(true);
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      setError('Server error. Ensure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setToken(null);
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 relative overflow-hidden font-sans">
        {/* Background Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-2xl relative z-10"
        >
          <div className="mb-8 text-center">
            <motion.div 
              initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}
              className="w-16 h-16 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg"
            >
              <Lock className="text-white w-8 h-8" />
            </motion.div>
            <h1 className="text-3xl font-semibold text-white tracking-tight">Admin Access</h1>
            <p className="text-white/50 mt-2 text-sm">Secure login to the dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1">
              <label className="text-xs font-medium text-white/70 ml-1 uppercase tracking-wider">Username</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-blue-500 focus:bg-white/[0.08] transition-all"
                  placeholder="Enter admin username"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-xs font-medium text-white/70 ml-1 uppercase tracking-wider">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 focus:bg-white/[0.08] transition-all"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: 'auto' }} 
                  exit={{ opacity: 0, height: 0 }}
                  className="text-red-400 text-sm text-center bg-red-400/10 py-2 rounded-lg border border-red-400/20"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {loading ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white flex overflow-hidden font-sans">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -300 }} animate={{ x: 0 }} transition={{ type: 'spring', damping: 20 }}
        className="w-72 bg-white/[0.02] border-r border-white/10 flex flex-col backdrop-blur-xl z-20"
      >
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
            <Lock className="text-white w-5 h-5" />
          </div>
          <div>
            <h2 className="font-semibold text-lg tracking-tight">Admin Panel</h2>
            <p className="text-xs text-white/50">Manage your data</p>
          </div>
        </div>

        <div className="flex-1 py-6 px-4 space-y-2">
          <button 
            onClick={() => setActiveTab('contacts')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'contacts' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'text-white/60 hover:bg-white/[0.04] hover:text-white border border-transparent'}`}
          >
            <MessageSquare className="w-5 h-5" />
            <span className="font-medium">Contact Forms</span>
            {activeTab === 'contacts' && <ChevronRight className="w-4 h-4 ml-auto" />}
          </button>

          <button 
            onClick={() => setActiveTab('internships')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'internships' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'text-white/60 hover:bg-white/[0.04] hover:text-white border border-transparent'}`}
          >
            <Briefcase className="w-5 h-5" />
            <span className="font-medium">Internships</span>
            {activeTab === 'internships' && <ChevronRight className="w-4 h-4 ml-auto" />}
          </button>
        </div>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-400/10 transition-all font-medium border border-transparent hover:border-red-400/20"
          >
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative h-screen overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

        <header className="h-20 border-b border-white/10 flex items-center px-8 bg-white/[0.01] backdrop-blur-md z-10">
          <h1 className="text-2xl font-semibold tracking-tight capitalize">
            {activeTab === 'contacts' ? 'Contact Inquiries' : 'Internship Applications'}
          </h1>
          <div className="ml-auto flex items-center gap-2 text-sm text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full border border-emerald-400/20">
            <CheckCircle2 className="w-4 h-4" />
            Live Data
          </div>
        </header>

        <div className="flex-1 overflow-auto p-8 z-10">
          {dataLoading ? (
            <div className="flex items-center justify-center h-full">
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full" />
            </div>
          ) : (
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="grid gap-6"
            >
              {activeTab === 'contacts' ? (
                contacts.length > 0 ? contacts.map(contact => (
                  <div key={contact._id} className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.04] transition-all group relative overflow-hidden">
                    <div className="absolute left-0 top-0 w-1 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-all" />
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-medium text-white">{contact.name || contact.fullName}</h3>
                        <p className="text-blue-400 text-sm">{contact.email}</p>
                      </div>
                      <span className="text-xs text-white/40 bg-white/5 px-3 py-1 rounded-full">{new Date(contact.createdAt).toLocaleDateString()}</span>
                    </div>
                    {contact.subject && <div className="mb-2 text-sm font-medium text-white/80">Subject: {contact.subject}</div>}
                    <p className="text-white/60 text-sm leading-relaxed whitespace-pre-wrap bg-black/20 p-4 rounded-xl border border-white/5">
                      {contact.message}
                    </p>
                  </div>
                )) : (
                  <div className="text-center py-20 text-white/40">No contact inquiries found.</div>
                )
              ) : (
                internships.length > 0 ? internships.map(intern => (
                  <div key={intern._id} className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.04] transition-all group relative overflow-hidden">
                    <div className="absolute left-0 top-0 w-1 h-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-all" />
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-medium text-white">{intern.fullName || intern.name}</h3>
                        <p className="text-purple-400 text-sm">{intern.email}</p>
                      </div>
                      <span className="text-xs text-white/40 bg-white/5 px-3 py-1 rounded-full">{new Date(intern.createdAt).toLocaleDateString()}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="bg-black/20 p-3 rounded-xl border border-white/5">
                        <div className="text-xs text-white/40 mb-1">Phone</div>
                        <div className="text-sm">{intern.phone || 'N/A'}</div>
                      </div>
                      <div className="bg-black/20 p-3 rounded-xl border border-white/5">
                        <div className="text-xs text-white/40 mb-1">Role</div>
                        <div className="text-sm">{intern.role || intern.position || 'N/A'}</div>
                      </div>
                      <div className="bg-black/20 p-3 rounded-xl border border-white/5">
                        <div className="text-xs text-white/40 mb-1">Experience</div>
                        <div className="text-sm">{intern.experience || 'N/A'}</div>
                      </div>
                      <div className="bg-black/20 p-3 rounded-xl border border-white/5">
                        <div className="text-xs text-white/40 mb-1">Portfolio/LinkedIn</div>
                        <div className="text-sm truncate">
                          {intern.portfolioUrl || intern.linkedin ? (
                            <a href={intern.portfolioUrl || intern.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">Link</a>
                          ) : 'N/A'}
                        </div>
                      </div>
                    </div>

                    {intern.message && (
                      <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                        <div className="text-xs text-white/40 mb-2">Additional Message</div>
                        <p className="text-white/60 text-sm leading-relaxed whitespace-pre-wrap">{intern.message}</p>
                      </div>
                    )}
                  </div>
                )) : (
                  <div className="text-center py-20 text-white/40">No internship applications found.</div>
                )
              )}
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
