import React, { useState, useEffect } from 'react';
import { supabase } from '../../../../lib/supabase';
import { Loader2, Plus, Edit2, Trash2, X, Save } from 'lucide-react';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
}

const TeamEditor: React.FC = () => {
    const [members, setMembers] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [formData, setFormData] = useState<Partial<TeamMember>>({});
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('team_members')
            .select('*')
            .order('id', { ascending: true });

        if (error) {
            console.error('Error fetching team members:', error);
        } else {
            setMembers(data || []);
        }
        setLoading(false);
    };

    const handleAddNew = () => {
        setEditingId(null);
        setFormData({
            name: '',
            role: '',
            image: '',
        });
        setIsFormOpen(true);
    };

    const handleEdit = (member: TeamMember) => {
        setEditingId(member.id);
        setFormData({ ...member });
        setIsFormOpen(true);
    };

    const handleDelete = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this team member?')) {
            const { error } = await supabase.from('team_members').delete().eq('id', id);
            if (error) {
                alert('Error deleting member');
            } else {
                fetchMembers();
            }
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (editingId) {
                const { error } = await supabase
                    .from('team_members')
                    .update(formData)
                    .eq('id', editingId);
                if (error) throw error;
            } else {
                const { error } = await supabase
                    .from('team_members')
                    .insert([formData]);
                if (error) throw error;
            }
            setIsFormOpen(false);
            fetchMembers();
        } catch (error) {
            console.error('Error saving member:', error);
            alert('Error saving member');
        } finally {
            setLoading(false);
        }
    };

    if (loading && members.length === 0) {
        return (
            <div className="flex justify-center py-20">
                <Loader2 className="animate-spin text-[#F58220]" size={40} />
            </div>
        );
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold capitalize">Manage Team Members</h2>
                {!isFormOpen && (
                    <button
                        onClick={handleAddNew}
                        className="bg-[#F58220] hover:bg-[#F58220]/90 text-white px-6 py-2 rounded-xl transition-colors font-medium flex items-center space-x-2"
                    >
                        <Plus size={20} />
                        <span>Add New</span>
                    </button>
                )}
            </div>

            {isFormOpen ? (
                <form onSubmit={handleSave} className="space-y-6 bg-black/20 p-6 rounded-2xl border border-white/5">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-medium">{editingId ? 'Edit Team Member' : 'Add New Team Member'}</h3>
                        <button type="button" onClick={() => setIsFormOpen(false)} className="text-gray-400 hover:text-white">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                            <input type="text" value={formData.name || ''} onChange={e => setFormData({ ...formData, name: e.target.value })} required className="w-full bg-black/50 border border-white/10 rounded-xl py-2 px-4 text-white focus:border-[#F58220]" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Role / Position</label>
                            <input type="text" value={formData.role || ''} onChange={e => setFormData({ ...formData, role: e.target.value })} required className="w-full bg-black/50 border border-white/10 rounded-xl py-2 px-4 text-white focus:border-[#F58220]" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-400 mb-1">Image URL</label>
                            <input type="url" value={formData.image || ''} onChange={e => setFormData({ ...formData, image: e.target.value })} required className="w-full bg-black/50 border border-white/10 rounded-xl py-2 px-4 text-white focus:border-[#F58220]" />
                            {formData.image && <img src={formData.image} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded-xl" />}
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 mt-8">
                        <button type="button" onClick={() => setIsFormOpen(false)} className="px-6 py-2 rounded-xl border border-white/10 hover:bg-white/5">
                            Cancel
                        </button>
                        <button type="submit" disabled={loading} className="px-6 py-2 rounded-xl bg-[#F58220] hover:bg-[#F58220]/90 font-medium flex items-center space-x-2">
                            <Save size={20} />
                            <span>Save Member</span>
                        </button>
                    </div>
                </form>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {members.map(member => (
                        <div key={member.id} className="bg-black/40 rounded-2xl overflow-hidden border border-white/5 hover:border-[#F58220]/50 transition-colors group">
                            <div className="aspect-[3/4] overflow-hidden relative">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <h3 className="font-semibold text-lg">{member.name}</h3>
                                    <p className="text-[#F58220] text-sm">{member.role}</p>
                                </div>
                            </div>
                            <div className="p-3 flex items-center justify-end bg-[#1a1a1a]">
                                <button onClick={() => handleEdit(member)} className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                                    <Edit2 size={16} />
                                </button>
                                <button onClick={() => handleDelete(member.id)} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors ml-2">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                    {members.length === 0 && (
                        <div className="col-span-full text-center py-20 text-gray-500">
                            No team members found. Add one to get started.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default TeamEditor;
