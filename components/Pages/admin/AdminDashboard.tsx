import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../../lib/supabase';
import { LogOut, LayoutDashboard, Briefcase, Users, FileText } from 'lucide-react';
import ProjectEditor from './components/ProjectEditor';
import TeamEditor from './components/TeamEditor';
import ServiceEditor from './components/ServiceEditor';
import SiteContentEditor from './components/SiteContentEditor';

const AdminDashboard: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('projects');

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!session) {
                navigate('/admin/login');
            } else {
                setLoading(false);
            }
        });
    }, [navigate]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/admin/login');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white flex">
            {/* Sidebar */}
            <aside className="w-64 bg-[#1a1a1a] border-r border-white/10 p-6 flex flex-col h-screen sticky top-0">
                <div className="mb-10">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-[#FF9B44] bg-clip-text text-transparent">
                        DEC Admin
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">Content Management</p>
                </div>

                <nav className="flex-1 space-y-2">
                    <button
                        onClick={() => setActiveTab('site-content')}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'site-content' ? 'bg-primary/20 text-primary' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                            }`}
                    >
                        <FileText size={20} />
                        <span>Site Content</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('projects')}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'projects' ? 'bg-primary/20 text-primary' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                            }`}
                    >
                        <Briefcase size={20} />
                        <span>Projects</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('services')}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'services' ? 'bg-primary/20 text-primary' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                            }`}
                    >
                        <LayoutDashboard size={20} />
                        <span>Services</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('team')}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'team' ? 'bg-primary/20 text-primary' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                            }`}
                    >
                        <Users size={20} />
                        <span>Team Members</span>
                    </button>
                </nav>

                <button
                    onClick={handleLogout}
                    className="flex items-center space-x-3 px-4 py-3 text-red-500 hover:bg-red-500/10 rounded-xl transition-colors mt-auto"
                >
                    <LogOut size={20} />
                    <span>Sign Out</span>
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10 overflow-auto">
                <div className="bg-[#1a1a1a] rounded-2xl border border-white/10 p-8 min-h-[600px]">
                    {activeTab === 'site-content' && <SiteContentEditor />}
                    {activeTab === 'projects' && <ProjectEditor />}
                    {activeTab === 'team' && <TeamEditor />}
                    {activeTab === 'services' && <ServiceEditor />}
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
